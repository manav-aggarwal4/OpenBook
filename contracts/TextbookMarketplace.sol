// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./CampusVerification.sol";

/**
 * @title TextbookMarketplace
 * @dev Smart contract for buying and selling textbooks with escrow
 */
contract TextbookMarketplace is ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _listingIds;
    
    // Reference to campus verification contract
    CampusVerification public campusVerification;
    
    // Platform fee percentage (2.5%)
    uint256 public platformFeePercentage = 250; // Basis points (2.5%)
    
    // Minimum listing duration (24 hours)
    uint256 public minListingDuration = 24 hours;
    
    // Maximum listing duration (30 days)
    uint256 public maxListingDuration = 30 days;
    
    struct TextbookListing {
        uint256 listingId;
        address seller;
        string title;
        string author;
        string isbn;
        uint256 price;
        string condition;
        string campus;
        string ipfsHash;
        string description;
        uint256 createdAt;
        uint256 expiresAt;
        bool isActive;
        bool isSold;
    }
    
    struct Purchase {
        uint256 listingId;
        address buyer;
        address seller;
        uint256 price;
        uint256 purchaseTime;
        bool isCompleted;
        bool isDisputed;
    }
    
    // Mappings
    mapping(uint256 => TextbookListing) public listings;
    mapping(uint256 => Purchase) public purchases;
    mapping(address => uint256[]) public userListings;
    mapping(address => uint256[]) public userPurchases;
    
    // Events
    event ListingCreated(
        uint256 indexed listingId,
        address indexed seller,
        string title,
        uint256 price,
        string campus
    );
    
    event ListingUpdated(uint256 indexed listingId, uint256 newPrice);
    event ListingCancelled(uint256 indexed listingId);
    event ListingSold(uint256 indexed listingId, address indexed buyer);
    
    event PurchaseCreated(
        uint256 indexed listingId,
        address indexed buyer,
        uint256 price
    );
    
    event PurchaseCompleted(uint256 indexed listingId);
    event PurchaseDisputed(uint256 indexed listingId, string reason);
    event DisputeResolved(uint256 indexed listingId, address winner);
    
    event PlatformFeeUpdated(uint256 newFeePercentage);
    
    constructor(address _campusVerification) Ownable(msg.sender) {
        campusVerification = CampusVerification(_campusVerification);
    }
    
    /**
     * @dev Create a new textbook listing
     * @param title Textbook title
     * @param author Textbook author
     * @param isbn ISBN number
     * @param price Price in wei
     * @param condition Textbook condition
     * @param campus Campus name
     * @param ipfsHash IPFS hash of the textbook file
     * @param description Description of the textbook
     * @param duration Listing duration in seconds
     */
    function createListing(
        string memory title,
        string memory author,
        string memory isbn,
        uint256 price,
        string memory condition,
        string memory campus,
        string memory ipfsHash,
        string memory description,
        uint256 duration
    ) external {
        require(campusVerification.isVerified(msg.sender), "Not a verified student");
        require(price > 0, "Price must be greater than 0");
        require(bytes(ipfsHash).length > 0, "IPFS hash required");
        require(duration >= minListingDuration, "Duration too short");
        require(duration <= maxListingDuration, "Duration too long");
        
        _listingIds.increment();
        uint256 newListingId = _listingIds.current();
        
        listings[newListingId] = TextbookListing({
            listingId: newListingId,
            seller: msg.sender,
            title: title,
            author: author,
            isbn: isbn,
            price: price,
            condition: condition,
            campus: campus,
            ipfsHash: ipfsHash,
            description: description,
            createdAt: block.timestamp,
            expiresAt: block.timestamp + duration,
            isActive: true,
            isSold: false
        });
        
        userListings[msg.sender].push(newListingId);
        
        emit ListingCreated(newListingId, msg.sender, title, price, campus);
    }
    
    /**
     * @dev Purchase a textbook listing
     * @param listingId ID of the listing to purchase
     */
    function purchaseListing(uint256 listingId) external payable nonReentrant {
        TextbookListing storage listing = listings[listingId];
        
        require(listing.isActive, "Listing not active");
        require(!listing.isSold, "Listing already sold");
        require(block.timestamp < listing.expiresAt, "Listing expired");
        require(msg.sender != listing.seller, "Cannot purchase your own listing");
        require(campusVerification.isVerified(msg.sender), "Not a verified student");
        require(msg.value == listing.price, "Incorrect payment amount");
        
        // Create purchase record
        purchases[listingId] = Purchase({
            listingId: listingId,
            buyer: msg.sender,
            seller: listing.seller,
            price: listing.price,
            purchaseTime: block.timestamp,
            isCompleted: false,
            isDisputed: false
        });
        
        userPurchases[msg.sender].push(listingId);
        
        // Mark listing as sold
        listing.isSold = true;
        listing.isActive = false;
        
        emit ListingSold(listingId, msg.sender);
        emit PurchaseCreated(listingId, msg.sender, listing.price);
    }
    
    /**
     * @dev Complete a purchase (release funds to seller)
     * @param listingId ID of the listing
     */
    function completePurchase(uint256 listingId) external nonReentrant {
        Purchase storage purchase = purchases[listingId];
        TextbookListing storage listing = listings[listingId];
        
        require(purchase.buyer == msg.sender, "Only buyer can complete");
        require(!purchase.isCompleted, "Purchase already completed");
        require(!purchase.isDisputed, "Purchase is disputed");
        
        purchase.isCompleted = true;
        
        // Calculate platform fee
        uint256 platformFee = (purchase.price * platformFeePercentage) / 10000;
        uint256 sellerAmount = purchase.price - platformFee;
        
        // Transfer funds
        payable(listing.seller).transfer(sellerAmount);
        payable(owner()).transfer(platformFee);
        
        emit PurchaseCompleted(listingId);
    }
    
    /**
     * @dev Dispute a purchase
     * @param listingId ID of the listing
     * @param reason Reason for dispute
     */
    function disputePurchase(uint256 listingId, string memory reason) external {
        Purchase storage purchase = purchases[listingId];
        
        require(
            purchase.buyer == msg.sender || purchase.seller == msg.sender,
            "Only buyer or seller can dispute"
        );
        require(!purchase.isCompleted, "Purchase already completed");
        require(!purchase.isDisputed, "Purchase already disputed");
        
        purchase.isDisputed = true;
        
        emit PurchaseDisputed(listingId, reason);
    }
    
    /**
     * @dev Resolve a dispute (owner only)
     * @param listingId ID of the listing
     * @param winner Address of the winner (buyer or seller)
     */
    function resolveDispute(uint256 listingId, address winner) external onlyOwner nonReentrant {
        Purchase storage purchase = purchases[listingId];
        TextbookListing storage listing = listings[listingId];
        
        require(purchase.isDisputed, "Purchase not disputed");
        require(!purchase.isCompleted, "Purchase already completed");
        require(
            winner == purchase.buyer || winner == purchase.seller,
            "Winner must be buyer or seller"
        );
        
        purchase.isCompleted = true;
        
        if (winner == purchase.buyer) {
            // Refund buyer
            payable(purchase.buyer).transfer(purchase.price);
        } else {
            // Pay seller (minus platform fee)
            uint256 platformFee = (purchase.price * platformFeePercentage) / 10000;
            uint256 sellerAmount = purchase.price - platformFee;
            
            payable(purchase.seller).transfer(sellerAmount);
            payable(owner()).transfer(platformFee);
        }
        
        emit DisputeResolved(listingId, winner);
    }
    
    /**
     * @dev Update listing price
     * @param listingId ID of the listing
     * @param newPrice New price in wei
     */
    function updateListingPrice(uint256 listingId, uint256 newPrice) external {
        TextbookListing storage listing = listings[listingId];
        
        require(listing.seller == msg.sender, "Only seller can update");
        require(listing.isActive, "Listing not active");
        require(!listing.isSold, "Listing already sold");
        require(newPrice > 0, "Price must be greater than 0");
        
        listing.price = newPrice;
        
        emit ListingUpdated(listingId, newPrice);
    }
    
    /**
     * @dev Cancel a listing
     * @param listingId ID of the listing
     */
    function cancelListing(uint256 listingId) external {
        TextbookListing storage listing = listings[listingId];
        
        require(listing.seller == msg.sender, "Only seller can cancel");
        require(listing.isActive, "Listing not active");
        require(!listing.isSold, "Listing already sold");
        
        listing.isActive = false;
        
        emit ListingCancelled(listingId);
    }
    
    /**
     * @dev Get listing details
     * @param listingId ID of the listing
     * @return listing Listing details
     */
    function getListing(uint256 listingId) external view returns (TextbookListing memory) {
        return listings[listingId];
    }
    
    /**
     * @dev Get purchase details
     * @param listingId ID of the listing
     * @return purchase Purchase details
     */
    function getPurchase(uint256 listingId) external view returns (Purchase memory) {
        return purchases[listingId];
    }
    
    /**
     * @dev Get user's listings
     * @param user User address
     * @return uint256[] Array of listing IDs
     */
    function getUserListings(address user) external view returns (uint256[] memory) {
        return userListings[user];
    }
    
    /**
     * @dev Get user's purchases
     * @param user User address
     * @return uint256[] Array of listing IDs
     */
    function getUserPurchases(address user) external view returns (uint256[] memory) {
        return userPurchases[user];
    }
    
    /**
     * @dev Update platform fee percentage (owner only)
     * @param newFeePercentage New fee percentage in basis points
     */
    function updatePlatformFee(uint256 newFeePercentage) external onlyOwner {
        require(newFeePercentage <= 1000, "Fee cannot exceed 10%");
        platformFeePercentage = newFeePercentage;
        emit PlatformFeeUpdated(newFeePercentage);
    }
    
    /**
     * @dev Get total number of listings
     * @return uint256 Total count
     */
    function getTotalListings() external view returns (uint256) {
        return _listingIds.current();
    }
    
    /**
     * @dev Emergency withdraw (owner only)
     */
    function emergencyWithdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    
    // Receive function to accept ETH
    receive() external payable {}
}
