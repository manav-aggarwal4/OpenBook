'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Wallet, Shield, CheckCircle, AlertCircle, ArrowRight, BookOpen } from 'lucide-react'

export default function ConnectWallet() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState('')

  const handleConnect = async () => {
    setIsConnecting(true)
    setError('')
    
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsConnected(true)
    } catch (err) {
      setError('Failed to connect wallet. Please try again.')
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">OpenBook</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Connect Your Wallet</h1>
          <p className="text-lg text-gray-600">
            Connect your Web3 wallet to access OpenBook's decentralized textbook marketplace
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          {!isConnected ? (
            <div>
              <div className="text-center mb-8">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Connect to OpenBook</h2>
                <p className="text-gray-600">
                  Choose your preferred wallet to connect to the Polygon network
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-red-800">{error}</span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <button
                  onClick={handleConnect}
                  disabled={isConnecting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isConnecting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Wallet className="h-5 w-5 mr-2" />
                      Connect Wallet
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Don't have a wallet?{' '}
                    <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Get MetaMask
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Connect Your Wallet?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Secure Transactions</h4>
                      <p className="text-sm text-gray-600">All transactions are secured by blockchain technology</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Campus Verification</h4>
                      <p className="text-sm text-gray-600">Verify your college email to get your campus NFT badge</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Wallet className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Digital Ownership</h4>
                      <p className="text-sm text-gray-600">Own your textbooks as NFTs with verifiable authenticity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Wallet Connected!</h2>
              <p className="text-gray-600 mb-8">
                Your wallet has been successfully connected to OpenBook
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/verify"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Verify Campus Email
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                
                <Link
                  href="/marketplace"
                  className="w-full border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Browse Marketplace
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By connecting your wallet, you agree to our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
