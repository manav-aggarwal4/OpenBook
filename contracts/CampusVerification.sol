// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title CampusVerification
 * @dev NFT contract for campus verification badges
 * Students receive an NFT badge after verifying their college email
 */
contract CampusVerification is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;
    
    // Mapping from student address to their campus
    mapping(address => string) public studentCampus;
    
    // Mapping from student address to verification status
    mapping(address => bool) public isVerified;
    
    // Mapping from campus to verification count
    mapping(string => uint256) public campusVerificationCount;
    
    // Events
    event StudentVerified(address indexed student, string campus, uint256 tokenId);
    event VerificationRevoked(address indexed student, string campus);
    
    // Supported campuses
    string[] public supportedCampuses = [
        "MIT",
        "Stanford", 
        "UC Berkeley",
        "Harvard",
        "Yale",
        "Princeton",
        "Columbia",
        "University of Pennsylvania"
    ];
    
    constructor() ERC721("OpenBook Campus Verification", "OBVC") Ownable(msg.sender) {}
    
    /**
     * @dev Verify a student and mint their campus badge NFT
     * @param student Address of the student to verify
     * @param campus Campus name
     * @param tokenURI Metadata URI for the NFT
     */
    function verifyStudent(
        address student,
        string memory campus,
        string memory tokenURI
    ) external onlyOwner {
        require(!isVerified[student], "Student already verified");
        require(isValidCampus(campus), "Invalid campus");
        
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        _safeMint(student, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        
        studentCampus[student] = campus;
        isVerified[student] = true;
        campusVerificationCount[campus]++;
        
        emit StudentVerified(student, campus, newTokenId);
    }
    
    /**
     * @dev Revoke a student's verification
     * @param student Address of the student to revoke
     */
    function revokeVerification(address student) external onlyOwner {
        require(isVerified[student], "Student not verified");
        
        string memory campus = studentCampus[student];
        uint256 tokenId = tokenOfOwnerByIndex(student, 0);
        
        _burn(tokenId);
        
        delete studentCampus[student];
        delete isVerified[student];
        campusVerificationCount[campus]--;
        
        emit VerificationRevoked(student, campus);
    }
    
    /**
     * @dev Check if a campus is supported
     * @param campus Campus name to check
     * @return bool True if campus is supported
     */
    function isValidCampus(string memory campus) public view returns (bool) {
        for (uint i = 0; i < supportedCampuses.length; i++) {
            if (keccak256(bytes(supportedCampuses[i])) == keccak256(bytes(campus))) {
                return true;
            }
        }
        return false;
    }
    
    /**
     * @dev Get verification status and campus for a student
     * @param student Address of the student
     * @return verified Verification status
     * @return campus Campus name
     */
    function getStudentInfo(address student) external view returns (bool verified, string memory campus) {
        return (isVerified[student], studentCampus[student]);
    }
    
    /**
     * @dev Get total number of verified students
     * @return uint256 Total count
     */
    function getTotalVerifiedCount() external view returns (uint256) {
        return _tokenIds.current();
    }
    
    /**
     * @dev Get all supported campuses
     * @return string[] Array of campus names
     */
    function getSupportedCampuses() external view returns (string[] memory) {
        return supportedCampuses;
    }
    
    /**
     * @dev Add a new supported campus
     * @param campus Campus name to add
     */
    function addSupportedCampus(string memory campus) external onlyOwner {
        require(!isValidCampus(campus), "Campus already supported");
        supportedCampuses.push(campus);
    }
    
    // Override required functions
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
