'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, HelpCircle, MessageCircle, AlertTriangle, CheckCircle, Mail, Phone, MessageSquare, FileText, Bug, User, Settings, Shield } from 'lucide-react'

interface SupportForm {
  name: string
  email: string
  walletAddress: string
  category: string
  subject: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  attachments: File[]
}

export default function SupportPage() {
  const [form, setForm] = useState<SupportForm>({
    name: '',
    email: '',
    walletAddress: '',
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
    attachments: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const categories = [
    { value: 'general', label: 'General Inquiry', icon: HelpCircle },
    { value: 'technical', label: 'Technical Issue', icon: Settings },
    { value: 'bug', label: 'Bug Report', icon: Bug },
    { value: 'verification', label: 'Campus Verification', icon: Shield },
    { value: 'transaction', label: 'Transaction Issue', icon: MessageCircle },
    { value: 'account', label: 'Account Problem', icon: User },
    { value: 'feature', label: 'Feature Request', icon: FileText }
  ]

  const priorities = [
    { value: 'low', label: 'Low', color: 'text-green-600 bg-green-100' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-600 bg-yellow-100' },
    { value: 'high', label: 'High', color: 'text-orange-600 bg-orange-100' },
    { value: 'urgent', label: 'Urgent', color: 'text-red-600 bg-red-100' }
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setForm(prev => ({ ...prev, attachments: [...prev.attachments, ...files] }))
  }

  const removeFile = (index: number) => {
    setForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, this would send to your support system
      console.log('Support request submitted:', form)
      
      setIsSubmitted(true)
    } catch (err) {
      setError('Failed to submit support request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Support Request Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting OpenBook Support. We've received your request and will get back to you within 24-48 hours.
            </p>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Request Received</h3>
                    <p className="text-sm text-gray-600">Your support ticket has been created and assigned a unique ID.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Team Review</h3>
                    <p className="text-sm text-gray-600">Our support team will review your request and prioritize accordingly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Response</h3>
                    <p className="text-sm text-gray-600">You'll receive a detailed response via email within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to Homepage
              </Link>
              <button
                onClick={() => setIsSubmitted(false)}
                className="block mx-auto text-blue-600 hover:text-blue-700 font-medium"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
            <h1 className="text-2xl font-bold text-gray-900">Help Center & Support</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit a Support Request</h2>
                <p className="text-gray-600">
                  Need help with OpenBook? Fill out the form below and our support team will get back to you within 24-48 hours.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-red-800">{error}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Wallet Address (Optional)
                  </label>
                  <input
                    type="text"
                    id="walletAddress"
                    value={form.walletAddress}
                    onChange={(e) => setForm(prev => ({ ...prev, walletAddress: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0x..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Providing your wallet address helps us investigate transaction-related issues faster.
                  </p>
                </div>

                {/* Category and Priority */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      value={form.category}
                      onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level *
                    </label>
                    <select
                      id="priority"
                      value={form.priority}
                      onChange={(e) => setForm(prev => ({ ...prev, priority: e.target.value as any }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {priorities.map((priority) => (
                        <option key={priority.value} value={priority.value}>
                          {priority.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your issue"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    id="description"
                    value={form.description}
                    onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide detailed information about your issue, including steps to reproduce if applicable..."
                  />
                </div>

                {/* File Attachments */}
                <div>
                  <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
                    Attachments (Optional)
                  </label>
                  <input
                    type="file"
                    id="attachments"
                    multiple
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    accept=".pdf,.png,.jpg,.jpeg,.gif,.txt,.log"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: PDF, PNG, JPG, GIF, TXT, LOG (Max 5 files, 10MB each)
                  </p>

                  {/* File List */}
                  {form.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {form.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Submit Support Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Help */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Help</h3>
              <div className="space-y-3">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={category.value}
                      href={`#${category.value}`}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-700">{category.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Support</p>
                    <p className="text-sm text-gray-600">support@openbook.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Discord Community</p>
                    <p className="text-sm text-gray-600">discord.gg/openbook</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Documentation</p>
                    <p className="text-sm text-gray-600">docs.openbook.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-800">Urgent Issues</span>
                  <span className="text-sm font-medium text-blue-900">2-4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-800">High Priority</span>
                  <span className="text-sm font-medium text-blue-900">4-8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-800">Medium Priority</span>
                  <span className="text-sm font-medium text-blue-900">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-800">Low Priority</span>
                  <span className="text-sm font-medium text-blue-900">48 hours</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Quick Answers?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Check our frequently asked questions for common issues and solutions.
              </p>
              <Link
                href="/faq"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
