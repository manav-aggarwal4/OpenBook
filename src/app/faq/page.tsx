import Link from 'next/link'
import { BookOpen, ChevronDown, ChevronUp, HelpCircle, Shield, Wallet, Coins, Users, Globe, FileText } from 'lucide-react'

export default function FAQPage() {
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
            <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How can we help you?</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about OpenBook's decentralized textbook trading platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                <a href="#getting-started" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <HelpCircle className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Getting Started</span>
                </a>
                <a href="#campus-verification" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Shield className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Campus Verification</span>
                </a>
                <a href="#wallet-connection" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Wallet className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Wallet Connection</span>
                </a>
                <a href="#trading" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Coins className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Trading & Transactions</span>
                </a>
                <a href="#technical" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Technical Issues</span>
                </a>
                <a href="#account" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-700">Account & Security</span>
                </a>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Still need help?</p>
                <Link
                  href="/support"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Getting Started */}
            <div id="getting-started" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
                Getting Started
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What is OpenBook?</h4>
                  <p className="text-gray-600">
                    OpenBook is a decentralized marketplace for college students to buy, sell, and trade textbooks 
                    using blockchain technology. We use smart contracts for secure escrow and IPFS for decentralized 
                    file storage.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do I get started?</h4>
                  <p className="text-gray-600">
                    To get started, you need to: 1) Connect your Web3 wallet (like MetaMask), 2) Verify your 
                    college email address, 3) Receive your campus verification NFT badge, and 4) Start browsing 
                    or listing textbooks.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What wallets are supported?</h4>
                  <p className="text-gray-600">
                    We support all major Web3 wallets including MetaMask, WalletConnect, Coinbase Wallet, 
                    Trust Wallet, and others. Make sure your wallet is connected to the Polygon network.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Is OpenBook free to use?</h4>
                  <p className="text-gray-600">
                    Creating an account and browsing textbooks is free. There's a 2.5% platform fee on successful 
                    transactions, and users pay blockchain gas fees for transactions and NFT minting.
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Verification */}
            <div id="campus-verification" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                Campus Verification
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Why do I need campus verification?</h4>
                  <p className="text-gray-600">
                    Campus verification ensures that only legitimate college students can participate in the 
                    marketplace, creating a trusted environment for textbook trading.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How does verification work?</h4>
                  <p className="text-gray-600">
                    You provide your college email address, we send a verification link, and upon confirmation, 
                    you receive a unique NFT badge that proves your student status.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Which colleges are supported?</h4>
                  <p className="text-gray-600">
                    Currently supported institutions include MIT, Stanford, UC Berkeley, Harvard, Yale, 
                    Princeton, Columbia, and University of Pennsylvania. We're adding more schools regularly.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Can I transfer my verification badge?</h4>
                  <p className="text-gray-600">
                    Campus verification NFT badges are non-transferable and tied to your wallet address. 
                    They cannot be sold or transferred to other users.
                  </p>
                </div>
              </div>
            </div>

            {/* Wallet Connection */}
            <div id="wallet-connection" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Wallet className="h-6 w-6 text-purple-600 mr-2" />
                Wallet Connection
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do I connect my wallet?</h4>
                  <p className="text-gray-600">
                    Click the "Connect Wallet" button on our platform. If you have MetaMask installed, it will 
                    automatically prompt you to connect. For other wallets, follow the connection instructions.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Which network should I use?</h4>
                  <p className="text-gray-600">
                    OpenBook operates on the Polygon network. Make sure your wallet is connected to Polygon 
                    (Chain ID: 137) for the best experience and lowest transaction fees.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What if I don't have MATIC tokens?</h4>
                  <p className="text-gray-600">
                    You'll need MATIC tokens to pay for gas fees on the Polygon network. You can purchase MATIC 
                    from exchanges like Coinbase, Binance, or through your wallet's built-in exchange.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Is my wallet secure?</h4>
                  <p className="text-gray-600">
                    Your wallet security is your responsibility. Never share your private keys or seed phrase. 
                    We recommend using hardware wallets for additional security.
                  </p>
                </div>
              </div>
            </div>

            {/* Trading & Transactions */}
            <div id="trading" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Coins className="h-6 w-6 text-yellow-600 mr-2" />
                Trading & Transactions
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do I list a textbook?</h4>
                  <p className="text-gray-600">
                    Upload your textbook file (PDF), fill in the details (title, author, ISBN, price, condition), 
                    and submit. The file is stored on IPFS and the listing is created on the blockchain.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How does the escrow system work?</h4>
                  <p className="text-gray-600">
                    When you purchase a textbook, funds are held in a smart contract escrow. Once you confirm 
                    receipt, the funds are automatically released to the seller minus the platform fee.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What if there's a dispute?</h4>
                  <p className="text-gray-600">
                    Both buyers and sellers can initiate disputes. Our support team reviews evidence and resolves 
                    disputes within 5-7 business days, determining the final distribution of escrowed funds.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do I earn token rewards?</h4>
                  <p className="text-gray-600">
                    You earn OpenBook Tokens (OBT) for successful transactions, listing textbooks, and 
                    participating in the community. These tokens can be used for governance and future features.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Issues */}
            <div id="technical" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="h-6 w-6 text-indigo-600 mr-2" />
                Technical Issues
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What if my transaction fails?</h4>
                  <p className="text-gray-600">
                    Failed transactions usually occur due to insufficient gas fees or network congestion. 
                    Check your MATIC balance and try again. Gas fees are not refunded for failed transactions.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do I check my transaction status?</h4>
                  <p className="text-gray-600">
                    You can check transaction status on PolygonScan using your transaction hash. Links to 
                    transaction details are provided in your account history.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What file formats are supported?</h4>
                  <p className="text-gray-600">
                    We support PDF files for textbooks. Files must be under 50MB. For other content, we support 
                    common image formats (PNG, JPG, GIF) and text files (TXT, LOG).
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do I access my purchased textbooks?</h4>
                  <p className="text-gray-600">
                    Once a transaction is completed, you'll receive the IPFS hash of your textbook. You can 
                    download it directly from IPFS or through our platform's download interface.
                  </p>
                </div>
              </div>
            </div>

            {/* Account & Security */}
            <div id="account" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-red-600 mr-2" />
                Account & Security
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">How do I keep my account secure?</h4>
                  <p className="text-gray-600">
                    Use a strong wallet password, enable two-factor authentication if available, never share 
                    private keys, and consider using a hardware wallet for large transactions.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Can I delete my account?</h4>
                  <p className="text-gray-600">
                    You can deactivate your account, but blockchain data (transactions, NFT badges) cannot be 
                    deleted due to the immutable nature of blockchain technology.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What happens if I lose my wallet?</h4>
                  <p className="text-gray-600">
                    If you lose access to your wallet, you'll lose access to your account, funds, and NFT badges. 
                    Always backup your seed phrase and keep it in a secure location.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How is my data protected?</h4>
                  <p className="text-gray-600">
                    We implement industry-standard security measures. However, blockchain transactions are public 
                    and immutable. Please review our Privacy Policy for detailed information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h3>
          <p className="text-blue-800 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <Link
            href="/support"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
