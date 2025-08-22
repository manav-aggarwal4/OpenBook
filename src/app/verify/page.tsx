'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Shield, CheckCircle, AlertCircle, ArrowRight, BookOpen, GraduationCap, Badge } from 'lucide-react'

export default function CampusVerification() {
  const [email, setEmail] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState('')
  const [campus, setCampus] = useState('')

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setError('')
    
    try {
      // Simulate email verification
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Extract campus from email domain
      const domain = email.split('@')[1]
      const campusMap: { [key: string]: string } = {
        'mit.edu': 'MIT',
        'stanford.edu': 'Stanford',
        'berkeley.edu': 'UC Berkeley',
        'harvard.edu': 'Harvard',
        'yale.edu': 'Yale',
        'princeton.edu': 'Princeton',
        'columbia.edu': 'Columbia',
        'upenn.edu': 'University of Pennsylvania'
      }
      
      const detectedCampus = campusMap[domain] || 'Unknown Campus'
      setCampus(detectedCampus)
      setIsVerified(true)
    } catch (err) {
      setError('Verification failed. Please check your email and try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  const supportedCampuses = [
    'MIT', 'Stanford', 'UC Berkeley', 'Harvard', 'Yale', 
    'Princeton', 'Columbia', 'University of Pennsylvania'
  ]

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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Campus Verification</h1>
          <p className="text-lg text-gray-600">
            Verify your college email to get your campus NFT badge and access the marketplace
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          {!isVerified ? (
            <div>
              <div className="text-center mb-8">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Verify Your Campus</h2>
                <p className="text-gray-600">
                  Enter your college email address to receive your campus verification NFT
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

              <form onSubmit={handleVerification} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    College Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@university.edu"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    We'll send a verification link to your college email address
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isVerifying || !email}
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5 mr-2" />
                      Verify Email
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Campuses</h3>
                <div className="grid grid-cols-2 gap-2">
                  {supportedCampuses.map((campus) => (
                    <div key={campus} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {campus}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Don't see your campus?{' '}
                  <a href="mailto:support@openbook.com" className="text-purple-600 hover:underline">
                    Contact us
                  </a>
                  {' '}to add your university.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Badge className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Verification Complete!</h2>
              <p className="text-gray-600 mb-4">
                Your campus email has been verified successfully
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="font-medium text-purple-900">{campus} Student</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/marketplace"
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  Access Marketplace
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                
                <Link
                  href="/marketplace/list"
                  className="w-full border-2 border-purple-600 text-purple-600 py-4 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  List Your First Textbook
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mr-3 mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Browse the Marketplace</h4>
                      <p className="text-sm text-gray-600">Find textbooks from verified students at your campus</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mr-3 mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">List Your Textbooks</h4>
                      <p className="text-sm text-gray-600">Upload your textbooks to IPFS and set your price</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mr-3 mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Trade Securely</h4>
                      <p className="text-sm text-gray-600">Complete transactions through smart contract escrow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your campus verification NFT will be minted on the Polygon network.{' '}
            <Link href="/docs/verification" className="text-purple-600 hover:underline">Learn more</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
