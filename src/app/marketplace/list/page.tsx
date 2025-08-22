'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Upload, BookOpen, DollarSign, MapPin, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'

interface TextbookForm {
  title: string
  author: string
  isbn: string
  price: number
  condition: 'new' | 'like-new' | 'good' | 'fair'
  description: string
  campus: string
  file: File | null
}

export default function ListTextbook() {
  const [form, setForm] = useState<TextbookForm>({
    title: '',
    author: '',
    isbn: '',
    price: 0,
    condition: 'good',
    description: '',
    campus: '',
    file: null
  })
  const [isUploading, setIsUploading] = useState(false)
  const [isListed, setIsListed] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setForm(prev => ({ ...prev, file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    setError('')
    
    try {
      // Simulate IPFS upload and smart contract interaction
      await new Promise(resolve => setTimeout(resolve, 4000))
      setIsListed(true)
    } catch (err) {
      setError('Failed to list textbook. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const campuses = [
    'MIT', 'Stanford', 'UC Berkeley', 'Harvard', 'Yale', 
    'Princeton', 'Columbia', 'University of Pennsylvania'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link href="/marketplace" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Marketplace
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">List Your Textbook</h1>
              <p className="mt-2 text-gray-600">Upload your textbook to IPFS and list it for sale</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isListed ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Textbook Information</h2>
              <p className="text-gray-600">
                Provide details about your textbook. The file will be uploaded to IPFS for secure, decentralized storage.
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Textbook File (PDF)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    required
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      {form.file ? form.file.name : 'Click to upload your textbook'}
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF files only, max 50MB
                    </p>
                  </label>
                </div>
                {form.file && (
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    File selected: {form.file.name}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Textbook Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={form.title}
                    onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Calculus: Early Transcendentals"
                  />
                </div>

                {/* Author */}
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={form.author}
                    onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., James Stewart"
                  />
                </div>

                {/* ISBN */}
                <div>
                  <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 mb-2">
                    ISBN
                  </label>
                  <input
                    type="text"
                    id="isbn"
                    value={form.isbn}
                    onChange={(e) => setForm(prev => ({ ...prev, isbn: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 978-1305272378"
                  />
                </div>

                {/* Price */}
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                    Price (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="number"
                      id="price"
                      value={form.price}
                      onChange={(e) => setForm(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                      required
                      min="0"
                      step="0.01"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                    Condition
                  </label>
                  <select
                    id="condition"
                    value={form.condition}
                    onChange={(e) => setForm(prev => ({ ...prev, condition: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>

                {/* Campus */}
                <div>
                  <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-2">
                    Campus
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      id="campus"
                      value={form.campus}
                      onChange={(e) => setForm(prev => ({ ...prev, campus: e.target.value }))}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your campus</option>
                      {campuses.map((campus) => (
                        <option key={campus} value={campus}>{campus}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={form.description}
                  onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the condition, edition, any notes, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Uploading to IPFS & Creating Listing...
                    </>
                  ) : (
                    <>
                      <BookOpen className="h-5 w-5 mr-2" />
                      List Textbook
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Textbook Listed Successfully!</h2>
            <p className="text-gray-600 mb-8">
              Your textbook has been uploaded to IPFS and listed on the marketplace
            </p>
            
            <div className="space-y-4">
              <Link
                href="/marketplace"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Your Listing
              </Link>
              
              <div className="text-sm text-gray-500">
                <p>Your textbook is now available for purchase by verified students</p>
                <p className="mt-1">You'll receive payment automatically when a buyer completes the transaction</p>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">1. IPFS Upload</h4>
              <p className="text-blue-700">Your textbook file is uploaded to IPFS for secure, decentralized storage</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">2. Smart Contract</h4>
              <p className="text-blue-700">A smart contract is created to handle the escrow and payment process</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">3. Marketplace Listing</h4>
              <p className="text-blue-700">Your textbook appears in the marketplace for verified students to browse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
