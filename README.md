# OpenBook - Web3 Textbook Trading Platform

OpenBook is a decentralized marketplace for college students to buy, sell, and trade textbooks using Web3 technology. Built with Next.js, IPFS, Polygon, and Solidity smart contracts.

## 🚀 Features

### Core Features
- **Campus Verification**: NFT-based verification system for college students
- **IPFS Storage**: Decentralized storage for textbook files
- **Smart Contract Escrow**: Trustless payment system on Polygon
- **Marketplace**: Browse, search, and filter textbooks by campus and condition
- **Digital Ownership**: True ownership through NFTs with verifiable authenticity

### Technical Stack
- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Blockchain**: Polygon Network for low-cost transactions
- **Storage**: IPFS for decentralized file storage
- **Smart Contracts**: Solidity for escrow and verification
- **Web3**: Ethers.js, Wagmi, and Web3Modal for wallet integration

## 🏗️ Project Structure

```
OpenBook/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page
│   │   ├── marketplace/
│   │   │   ├── page.tsx            # Marketplace browse
│   │   │   └── list/
│   │   │       └── page.tsx        # List textbook form
│   │   ├── connect/
│   │   │   └── page.tsx            # Wallet connection
│   │   └── verify/
│   │       └── page.tsx            # Campus verification
│   ├── components/
│   │   └── Navigation.tsx          # Shared navigation
│   └── lib/                        # Utility functions
├── public/                         # Static assets
└── contracts/                      # Solidity smart contracts
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MetaMask or other Web3 wallet
- Polygon network access

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OpenBook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   NEXT_PUBLIC_POLYGON_RPC_URL=https://polygon-rpc.com
   NEXT_PUBLIC_IPFS_GATEWAY=https://ipfs.io/ipfs/
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Landing Page (`/`)
- Modern, responsive design showcasing OpenBook's features
- Hero section with clear value proposition
- Feature highlights with icons and descriptions
- How it works section with step-by-step process
- Call-to-action for getting started

### Marketplace (`/marketplace`)
- Browse available textbooks with search and filtering
- Filter by campus, condition, and price
- Sort by recent, price, or rating
- Responsive grid layout for textbook cards
- Quick access to listing form

### List Textbook (`/marketplace/list`)
- Upload textbook files to IPFS
- Form for textbook metadata (title, author, ISBN, etc.)
- Price setting and condition selection
- Campus selection dropdown
- Smart contract integration for listing creation

### Connect Wallet (`/connect`)
- Web3Modal integration for wallet connection
- Support for MetaMask and other popular wallets
- Polygon network configuration
- Connection status and error handling

### Campus Verification (`/verify`)
- College email verification system
- NFT badge minting for verified students
- Supported campus list
- Verification status tracking

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Style
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Prettier for code formatting

## 🌐 Web3 Integration

### Smart Contracts
The platform uses several smart contracts on Polygon:

1. **CampusVerification.sol**: Mints NFT badges for verified students
2. **TextbookMarketplace.sol**: Handles textbook listings and escrow
3. **OpenBookToken.sol**: Platform token for governance and rewards

### IPFS Integration
- Textbook files are uploaded to IPFS for decentralized storage
- Metadata is stored on-chain with IPFS hashes
- Gateway integration for file access

### Wallet Support
- MetaMask
- WalletConnect
- Coinbase Wallet
- Trust Wallet
- And other Web3Modal supported wallets

## 🎨 Design System

### Colors
- Primary: Blue (#2563EB)
- Secondary: Purple (#7C3AED)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)

### Typography
- Font: Inter (system font fallback)
- Headings: Bold weights
- Body: Regular weights
- Code: Monospace

### Components
- Responsive design with mobile-first approach
- Consistent spacing and sizing
- Smooth transitions and hover effects
- Accessible color contrast ratios

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.openbook.com](https://docs.openbook.com)
- **Discord**: [discord.gg/openbook](https://discord.gg/openbook)
- **Email**: support@openbook.com
- **Twitter**: [@OpenBookWeb3](https://twitter.com/OpenBookWeb3)

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Basic marketplace functionality
- ✅ Wallet connection
- ✅ Campus verification
- ✅ Textbook listing

### Phase 2 (Next)
- 🔄 Smart contract deployment
- 🔄 IPFS integration
- 🔄 Payment processing
- 🔄 User profiles and ratings

### Phase 3 (Future)
- 📋 Mobile app
- 📋 Advanced search and AI recommendations
- 📋 Social features and study groups
- 📋 Governance token and DAO

---

Built with ❤️ for the Web3 education community
