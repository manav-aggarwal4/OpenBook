# OpenBook Smart Contracts Documentation

## Overview

OpenBook uses three main smart contracts deployed on the Polygon network to provide a decentralized textbook trading platform:

1. **CampusVerification.sol** - NFT-based campus verification system
2. **TextbookMarketplace.sol** - Main marketplace with escrow functionality
3. **OpenBookToken.sol** - Platform governance and rewards token

## Contract Architecture

```
┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐
│ CampusVerification  │    │ TextbookMarketplace │    │   OpenBookToken     │
│                     │    │                     │    │                     │
│ • NFT Badges        │◄───┤ • Listings          │◄───┤ • Rewards           │
│ • Student Verify    │    │ • Escrow            │    │ • Governance        │
│ • Campus Check      │    │ • Purchases         │    │ • Token Economics   │
└─────────────────────┘    └─────────────────────┘    └─────────────────────┘
```

## 1. CampusVerification Contract

### Purpose
Mints NFT badges for verified college students, ensuring only legitimate students can participate in the marketplace.

### Key Features
- **NFT Badges**: Each verified student receives a unique NFT badge
- **Campus Verification**: Supports multiple universities with campus-specific badges
- **Access Control**: Only verified students can list and purchase textbooks
- **Revocation**: Admin can revoke verification if needed

### Functions

#### `verifyStudent(address student, string campus, string tokenURI)`
- **Access**: Owner only
- **Purpose**: Verifies a student and mints their campus NFT badge
- **Parameters**:
  - `student`: Student's wallet address
  - `campus`: Campus name (must be supported)
  - `tokenURI`: Metadata URI for the NFT

#### `getStudentInfo(address student)`
- **Access**: Public view
- **Returns**: `(bool verified, string campus)`
- **Purpose**: Get verification status and campus for a student

#### `isValidCampus(string campus)`
- **Access**: Public view
- **Returns**: `bool`
- **Purpose**: Check if a campus is supported

### Supported Campuses
- MIT
- Stanford
- UC Berkeley
- Harvard
- Yale
- Princeton
- Columbia
- University of Pennsylvania

### Events
- `StudentVerified(address indexed student, string campus, uint256 tokenId)`
- `VerificationRevoked(address indexed student, string campus)`

## 2. TextbookMarketplace Contract

### Purpose
Handles all textbook listings, purchases, and escrow functionality with trustless payments.

### Key Features
- **Escrow System**: Secure payment handling with automatic release
- **Campus Verification**: Only verified students can participate
- **Dispute Resolution**: Built-in dispute handling system
- **Platform Fees**: 2.5% fee on successful transactions
- **Listing Management**: Create, update, and cancel listings

### Data Structures

#### `TextbookListing`
```solidity
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
```

#### `Purchase`
```solidity
struct Purchase {
    uint256 listingId;
    address buyer;
    address seller;
    uint256 price;
    uint256 purchaseTime;
    bool isCompleted;
    bool isDisputed;
}
```

### Functions

#### `createListing(...)`
- **Access**: Verified students only
- **Purpose**: Create a new textbook listing
- **Requirements**:
  - Student must be verified
  - Price > 0
  - Valid IPFS hash
  - Duration between 24 hours and 30 days

#### `purchaseListing(uint256 listingId)`
- **Access**: Verified students only
- **Purpose**: Purchase a textbook listing
- **Requirements**:
  - Listing must be active and not sold
  - Cannot purchase own listing
  - Correct payment amount
  - Listing not expired

#### `completePurchase(uint256 listingId)`
- **Access**: Buyer only
- **Purpose**: Release funds to seller after successful transaction
- **Process**:
  - Calculates platform fee (2.5%)
  - Transfers remaining amount to seller
  - Transfers fee to platform owner

#### `disputePurchase(uint256 listingId, string reason)`
- **Access**: Buyer or seller
- **Purpose**: Initiate dispute resolution
- **Process**: Freezes funds until admin resolves

#### `resolveDispute(uint256 listingId, address winner)`
- **Access**: Owner only
- **Purpose**: Resolve disputes by determining winner
- **Process**: Refunds buyer or pays seller based on decision

### Events
- `ListingCreated(uint256 indexed listingId, address indexed seller, string title, uint256 price, string campus)`
- `ListingSold(uint256 indexed listingId, address indexed buyer)`
- `PurchaseCompleted(uint256 indexed listingId)`
- `PurchaseDisputed(uint256 indexed listingId, string reason)`
- `DisputeResolved(uint256 indexed listingId, address winner)`

## 3. OpenBookToken Contract

### Purpose
ERC20 token for platform governance, rewards, and incentives.

### Key Features
- **Reward System**: Tokens for successful transactions
- **Governance**: Future DAO voting rights
- **Limited Supply**: 1 million tokens maximum
- **Campus Integration**: Only verified students eligible for rewards

### Tokenomics
- **Total Supply**: 1,000,000 OBT
- **Initial Distribution**: 200,000 OBT to platform operations
- **Reward Rate**: 10 OBT per successful transaction
- **Listing Reward**: 5 OBT per textbook listing

### Functions

#### `rewardSuccessfulSale(address seller, address buyer)`
- **Access**: Marketplace contract only
- **Purpose**: Reward both parties for successful transaction
- **Rewards**: 10 OBT each to seller and buyer

#### `rewardListing(address user)`
- **Access**: Marketplace contract only
- **Purpose**: Reward user for listing a textbook
- **Rewards**: 5 OBT to the lister

#### `distributeReward(address user, uint256 amount, string reason)`
- **Access**: Marketplace or owner
- **Purpose**: Manual reward distribution
- **Requirements**: User must be verified

### Events
- `RewardDistributed(address indexed user, uint256 amount, string reason)`
- `RewardRateUpdated(uint256 newRate)`
- `MarketplaceUpdated(address newMarketplace)`

## Security Features

### Reentrancy Protection
- All payment functions use `ReentrancyGuard`
- Prevents reentrancy attacks on escrow functions

### Access Control
- `Ownable` pattern for admin functions
- Role-based access for critical operations
- Campus verification requirement for marketplace access

### Input Validation
- Price validation (must be > 0)
- Duration limits (24 hours to 30 days)
- File size and type validation
- Campus verification checks

### Emergency Functions
- `emergencyWithdraw()` for contract owner
- Dispute resolution system
- Verification revocation capability

## Gas Optimization

### Optimizations Implemented
- **Solidity Optimizer**: Enabled with 200 runs
- **Efficient Storage**: Packed structs where possible
- **Batch Operations**: Support for multiple operations
- **View Functions**: Read-only functions for data access

### Estimated Gas Costs
- **Campus Verification**: ~50,000 gas
- **Create Listing**: ~150,000 gas
- **Purchase**: ~80,000 gas
- **Complete Purchase**: ~60,000 gas

## Deployment Instructions

### Prerequisites
1. Node.js 18+ (for Hardhat compatibility)
2. MetaMask or other Web3 wallet
3. Polygon network access
4. Environment variables configured

### Environment Setup
```bash
# Copy example environment file
cp env.example .env.local

# Configure your environment variables
POLYGON_RPC_URL=your_polygon_rpc_url
PRIVATE_KEY=your_private_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key
```

### Deployment Steps
```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Deploy to local network (for testing)
npx hardhat node
npx hardhat run scripts/deploy.ts --network localhost

# Deploy to Mumbai testnet
npx hardhat run scripts/deploy.ts --network polygonMumbai

# Deploy to Polygon mainnet
npx hardhat run scripts/deploy.ts --network polygon
```

### Contract Verification
```bash
# Verify on PolygonScan
npx hardhat verify --network polygon CONTRACT_ADDRESS [constructor_args]
```

## Testing

### Test Coverage
- Unit tests for all contract functions
- Integration tests for contract interactions
- Gas optimization tests
- Security vulnerability tests

### Test Commands
```bash
# Run all tests
npx hardhat test

# Run with coverage
npx hardhat coverage

# Run specific test file
npx hardhat test test/CampusVerification.test.ts
```

## Integration with Frontend

### Web3 Integration
The frontend uses the following utilities:
- `src/lib/web3.ts` - Web3 connection and contract interaction
- `src/app/api/ipfs/upload/route.ts` - IPFS file upload API
- Contract ABIs for type-safe interactions

### Key Integration Points
1. **Wallet Connection**: MetaMask integration
2. **Campus Verification**: NFT badge checking
3. **Marketplace Operations**: Listing and purchasing
4. **IPFS Upload**: File storage integration
5. **Token Rewards**: Balance checking and claiming

## Monitoring and Analytics

### Events to Track
- Student verifications
- Textbook listings and sales
- Platform fee collection
- Token rewards distribution
- Dispute resolutions

### Key Metrics
- Total verified students per campus
- Transaction volume and fees
- Token distribution and circulation
- User engagement and retention

## Future Enhancements

### Planned Features
1. **DAO Governance**: Token-based voting system
2. **Advanced Disputes**: Community-based resolution
3. **Campus Expansion**: More university support
4. **Mobile Integration**: Native mobile app
5. **AI Recommendations**: Smart textbook matching

### Technical Improvements
1. **Layer 2 Scaling**: Polygon zkEVM integration
2. **Cross-chain**: Multi-chain support
3. **Advanced IPFS**: Decentralized storage optimization
4. **Zero-knowledge**: Privacy-preserving features

## Support and Resources

### Documentation
- [OpenBook Documentation](https://docs.openbook.com)
- [Smart Contract API Reference](https://docs.openbook.com/contracts)
- [Integration Guide](https://docs.openbook.com/integration)

### Community
- [Discord](https://discord.gg/openbook)
- [GitHub](https://github.com/openbook)
- [Twitter](https://twitter.com/OpenBookWeb3)

### Support
- Email: support@openbook.com
- Technical Issues: github.com/openbook/issues
- Security: security@openbook.com

---

*This documentation is maintained by the OpenBook development team. For the latest updates, please check our official documentation.*
