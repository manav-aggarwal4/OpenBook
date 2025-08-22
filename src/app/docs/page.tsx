import Link from 'next/link'
import { BookOpen, Code, Database, Shield, Wallet, Coins, Globe, FileText, ExternalLink } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-semibold">OpenBook</span>
            </Link>
            <span className="mx-4 text-gray-400">/</span>
            <h1 className="text-2xl font-bold text-gray-900">Documentation</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OpenBook Developer Documentation</h2>
          <p className="text-lg text-gray-600">
            Learn how to integrate with OpenBook's decentralized textbook trading platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                <a href="#overview" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Overview</span>
                </a>
                <a href="#smart-contracts" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Code className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Smart Contracts</span>
                </a>
                <a href="#api" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Database className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">API Reference</span>
                </a>
                <a href="#integration" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Integration Guide</span>
                </a>
                <a href="#security" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Shield className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Security</span>
                </a>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">External Resources</h4>
                <div className="space-y-2">
                  <a 
                    href="https://polygon.technology" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Polygon Documentation
                  </a>
                  <a 
                    href="https://ipfs.io/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    IPFS Documentation
                  </a>
                  <a 
                    href="https://ethereum.org/en/developers/docs/smart-contracts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Smart Contract Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div id="overview" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                Platform Overview
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  OpenBook is a decentralized marketplace for college textbook trading built on blockchain technology. 
                  The platform uses smart contracts for secure escrow, IPFS for decentralized file storage, and 
                  NFT badges for campus verification.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Components</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Smart Contracts:</strong> Handle payments, escrow, and verification on Polygon network</li>
                  <li><strong>IPFS Storage:</strong> Decentralized file storage for textbook files</li>
                  <li><strong>NFT Verification:</strong> Campus badges for student verification</li>
                  <li><strong>Web3 Integration:</strong> Wallet connection and blockchain interactions</li>
                </ul>
              </div>
            </div>

            {/* Smart Contracts */}
            <div id="smart-contracts" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="h-6 w-6 text-green-600 mr-2" />
                Smart Contracts
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">CampusVerification.sol</h4>
                  <p className="text-gray-600 mb-2">ERC721 contract for campus verification badges</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>Address: <span className="text-blue-600">0x...</span></div>
                    <div>Network: Polygon Mainnet</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">TextbookMarketplace.sol</h4>
                  <p className="text-gray-600 mb-2">Main marketplace contract for textbook trading</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>Address: <span className="text-blue-600">0x...</span></div>
                    <div>Platform Fee: 2.5%</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">OpenBookToken.sol</h4>
                  <p className="text-gray-600 mb-2">ERC20 token for governance and rewards</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>Address: <span className="text-blue-600">0x...</span></div>
                    <div>Max Supply: 100,000,000 OBT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Reference */}
            <div id="api" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 text-purple-600 mr-2" />
                API Reference
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">IPFS Upload</h4>
                  <p className="text-gray-600 mb-2">Upload files to IPFS storage</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>POST /api/ipfs/upload</div>
                    <div>Content-Type: multipart/form-data</div>
                    <div>Max Size: 50MB</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend Health Check</h4>
                  <p className="text-gray-600 mb-2">Check system status and configuration</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>GET /api/test</div>
                    <div>Returns: System status, contract addresses, config</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Guide */}
            <div id="integration" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="h-6 w-6 text-indigo-600 mr-2" />
                Integration Guide
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Connect to Polygon Network</h4>
                  <p className="text-gray-600 mb-2">Ensure your application is connected to Polygon mainnet (Chain ID: 137)</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>RPC URL: https://polygon-rpc.com</div>
                    <div>Chain ID: 137</div>
                    <div>Currency: MATIC</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Deploy Smart Contracts</h4>
                  <p className="text-gray-600 mb-2">Use our deployment scripts to deploy contracts to your environment</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>npm run contracts:deploy:polygon</div>
                    <div>npm run contracts:verify</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Configure Environment</h4>
                  <p className="text-gray-600 mb-2">Set up environment variables for contract addresses and API keys</p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700">
                    <div>POLYGON_RPC_URL=...</div>
                    <div>CONTRACT_ADDRESSES=...</div>
                    <div>IPFS_API_URL=...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div id="security" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-red-600 mr-2" />
                Security Considerations
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Contract Security</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• All contracts use OpenZeppelin libraries for security</li>
                    <li>• ReentrancyGuard protection on marketplace contract</li>
                    <li>• Ownable access control for admin functions</li>
                    <li>• Comprehensive testing and auditing recommended</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Wallet Security</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Never share private keys or seed phrases</li>
                    <li>• Use hardware wallets for large transactions</li>
                    <li>• Verify contract addresses before interactions</li>
                    <li>• Test on testnet before mainnet deployment</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">IPFS Security</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Files are publicly accessible via IPFS hash</li>
                    <li>• Consider encryption for sensitive content</li>
                    <li>• Implement content validation and filtering</li>
                    <li>• Monitor for inappropriate content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Integrate?</h3>
          <p className="text-blue-800 mb-6">
            Start building with OpenBook's decentralized textbook trading platform.
          </p>
          <div className="space-x-4">
            <Link
              href="/support"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Support
            </Link>
            <a
              href="https://github.com/manav-aggarwal4/OpenBook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
