# OpenBook

A decentralized marketplace for college students to buy, sell, and trade textbooks using blockchain technology. Built with Next.js, IPFS, and smart contracts on Polygon.

## Features

OpenBook combines Web3 technology with a user-friendly interface to create a secure, trustless textbook trading platform. Students can verify their campus identity through NFT badges, upload textbooks to decentralized IPFS storage, and complete transactions through smart contract escrow. The platform includes a comprehensive marketplace with search and filtering, campus verification system, and integrated support center. All transactions are secured by blockchain technology with automatic payment release and dispute resolution.

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Blockchain**: Polygon Network, Solidity Smart Contracts
- **Storage**: IPFS (InterPlanetary File System)
- **Web3**: Ethers.js, Wagmi, RainbowKit

## Quick Start

```bash
# Clone the repository
git clone https://github.com/manav-aggarwal4/OpenBook.git
cd OpenBook

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to explore the platform.

## Smart Contracts

The platform uses three main smart contracts deployed on Polygon:
- **CampusVerification.sol**: NFT badges for student verification
- **TextbookMarketplace.sol**: Main marketplace with escrow functionality
- **OpenBookToken.sol**: Governance and rewards token
