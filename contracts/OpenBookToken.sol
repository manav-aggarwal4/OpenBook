// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./CampusVerification.sol";

/**
 * @title OpenBookToken
 * @dev ERC20 token for OpenBook platform governance and rewards
 */
contract OpenBookToken is ERC20, ERC20Burnable, ERC20Permit, Ownable {
    
    // Reference to campus verification contract
    CampusVerification public campusVerification;
    
    // Reference to marketplace contract
    address public marketplace;
    
    // Reward rates (tokens per successful transaction)
    uint256 public rewardRate = 10 * 10**18; // 10 tokens per transaction
    
    // Maximum supply
    uint256 public constant MAX_SUPPLY = 1000000 * 10**18; // 1 million tokens
    
    // Events
    event RewardDistributed(address indexed user, uint256 amount, string reason);
    event RewardRateUpdated(uint256 newRate);
    event MarketplaceUpdated(address newMarketplace);
    
    constructor(address _campusVerification) 
        ERC20("OpenBook Token", "OBT") 
        ERC20Permit("OpenBook Token")
        Ownable(msg.sender)
    {
        campusVerification = CampusVerification(_campusVerification);
        
        // Mint initial supply to owner (20% for platform operations)
        _mint(msg.sender, 200000 * 10**18);
    }
    
    /**
     * @dev Set marketplace contract address
     * @param _marketplace Address of the marketplace contract
     */
    function setMarketplace(address _marketplace) external onlyOwner {
        require(_marketplace != address(0), "Invalid marketplace address");
        marketplace = _marketplace;
        emit MarketplaceUpdated(_marketplace);
    }
    
    /**
     * @dev Distribute rewards to verified students
     * @param user Address of the user to reward
     * @param amount Amount of tokens to reward
     * @param reason Reason for the reward
     */
    function distributeReward(
        address user,
        uint256 amount,
        string memory reason
    ) external {
        require(msg.sender == marketplace || msg.sender == owner(), "Not authorized");
        require(campusVerification.isVerified(user), "User not verified");
        require(amount > 0, "Amount must be greater than 0");
        require(totalSupply() + amount <= MAX_SUPPLY, "Would exceed max supply");
        
        _mint(user, amount);
        emit RewardDistributed(user, amount, reason);
    }
    
    /**
     * @dev Reward for successful textbook sale
     * @param seller Address of the seller
     * @param buyer Address of the buyer
     */
    function rewardSuccessfulSale(address seller, address buyer) external {
        require(msg.sender == marketplace, "Only marketplace can call");
        
        if (campusVerification.isVerified(seller)) {
            _mint(seller, rewardRate);
            emit RewardDistributed(seller, rewardRate, "Successful sale");
        }
        
        if (campusVerification.isVerified(buyer)) {
            _mint(buyer, rewardRate);
            emit RewardDistributed(buyer, rewardRate, "Successful purchase");
        }
    }
    
    /**
     * @dev Reward for listing a textbook
     * @param user Address of the user
     */
    function rewardListing(address user) external {
        require(msg.sender == marketplace, "Only marketplace can call");
        require(campusVerification.isVerified(user), "User not verified");
        
        uint256 listingReward = rewardRate / 2; // Half reward for listing
        _mint(user, listingReward);
        emit RewardDistributed(user, listingReward, "Textbook listing");
    }
    
    /**
     * @dev Update reward rate (owner only)
     * @param newRate New reward rate
     */
    function updateRewardRate(uint256 newRate) external onlyOwner {
        require(newRate > 0, "Rate must be greater than 0");
        rewardRate = newRate;
        emit RewardRateUpdated(newRate);
    }
    
    /**
     * @dev Mint tokens (owner only, for platform operations)
     * @param to Address to mint to
     * @param amount Amount to mint
     */
    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Would exceed max supply");
        _mint(to, amount);
    }
    
    /**
     * @dev Get user's reward balance
     * @param user Address of the user
     * @return uint256 Token balance
     */
    function getRewardBalance(address user) external view returns (uint256) {
        return balanceOf(user);
    }
    
    /**
     * @dev Check if user is eligible for rewards
     * @param user Address of the user
     * @return bool True if eligible
     */
    function isEligibleForRewards(address user) external view returns (bool) {
        return campusVerification.isVerified(user);
    }
    
    /**
     * @dev Get remaining mintable supply
     * @return uint256 Remaining supply
     */
    function getRemainingSupply() external view returns (uint256) {
        return MAX_SUPPLY - totalSupply();
    }
}
