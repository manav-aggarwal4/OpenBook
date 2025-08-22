import Link from 'next/link'
import { BookOpen, Shield, Coins, Users, ArrowRight, GraduationCap, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">OpenBook</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How it Works
              </Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/connect" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Trade Textbooks with
            <span className="text-blue-600 block">Web3 Security</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The first decentralized marketplace for college students to buy, sell, and trade textbooks 
            using NFT-based campus verification and trustless escrow on Polygon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              Explore Marketplace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/connect" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Connect Wallet
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose OpenBook?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Campus Verification</h3>
              <p className="text-gray-600">
                NFT-based verification ensures only verified college students can participate in the marketplace.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
              <Coins className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trustless Escrow</h3>
              <p className="text-gray-600">
                Smart contracts handle payments securely, eliminating the need for third-party intermediaries.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IPFS Storage</h3>
              <p className="text-gray-600">
                Decentralized storage ensures your textbook data is secure, permanent, and censorship-resistant.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
              <GraduationCap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student-Focused</h3>
              <p className="text-gray-600">
                Built specifically for college students with campus-specific features and verification.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Connect with fellow students, build reputation, and create a trusted trading network.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Ownership</h3>
              <p className="text-gray-600">
                True ownership of digital textbooks through NFTs with verifiable authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect & Verify</h3>
              <p className="text-gray-600">
                Connect your wallet and verify your college email to get your campus NFT badge.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">List or Browse</h3>
              <p className="text-gray-600">
                Upload your textbooks to IPFS and list them for sale, or browse available textbooks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trade Securely</h3>
              <p className="text-gray-600">
                Complete transactions through smart contract escrow with automatic payment release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already using OpenBook to trade textbooks securely.
          </p>
          <Link href="/connect" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">OpenBook</span>
              </div>
              <p className="text-gray-400">
                The decentralized marketplace for college textbook trading.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link href="/connect" className="hover:text-white transition-colors">Connect Wallet</Link></li>
                <li><Link href="/verify" className="hover:text-white transition-colors">Campus Verification</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="https://docs.openbook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://polygon.technology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Polygon Network</a></li>
                <li><a href="https://ipfs.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IPFS Storage</a></li>
                <li><a href="https://ethereum.org/en/developers/docs/smart-contracts" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Smart Contracts</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OpenBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
