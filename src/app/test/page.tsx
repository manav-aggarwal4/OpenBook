'use client'

import { useState } from 'react'
import { connectWallet, checkVerification, uploadToIPFS } from '@/lib/web3'

export default function TestPage() {
  const [testResults, setTestResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const runBackendTests = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setTestResults(data)
    } catch (error) {
      setTestResults({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const testWalletConnection = async () => {
    setLoading(true)
    try {
      const result = await connectWallet()
      if (result.success) {
        setWalletAddress(result.address)
        alert(`Wallet connected: ${result.address}`)
      } else {
        alert(`Connection failed: ${result.error}`)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testVerification = async () => {
    if (!walletAddress) {
      alert('Please connect wallet first')
      return
    }
    
    setLoading(true)
    try {
      const result = await checkVerification(walletAddress)
      alert(`Verification status: ${result.verified ? 'Verified' : 'Not verified'}\nCampus: ${result.campus || 'None'}`)
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testIPFSUpload = async () => {
    setLoading(true)
    try {
      // Create a mock file
      const mockFile = new File(['Test PDF content'], 'test.pdf', { type: 'application/pdf' })
      const ipfsHash = await uploadToIPFS(mockFile)
      alert(`IPFS Upload successful!\nHash: ${ipfsHash}`)
    } catch (error) {
      alert(`Upload failed: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">OpenBook Backend Test Suite</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Backend Tests */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Backend API Tests</h2>
            <button
              onClick={runBackendTests}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Running Tests...' : 'Run Backend Tests'}
            </button>
            
            {testResults && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Results:</h3>
                <div className="bg-gray-100 p-4 rounded text-sm">
                  <pre>{JSON.stringify(testResults, null, 2)}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Web3 Tests */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Web3 Integration Tests</h2>
            
            <div className="space-y-3">
              <button
                onClick={testWalletConnection}
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
              >
                Test Wallet Connection
              </button>
              
              <button
                onClick={testVerification}
                disabled={loading || !walletAddress}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
              >
                Test Campus Verification
              </button>
              
              <button
                onClick={testIPFSUpload}
                disabled={loading}
                className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 disabled:opacity-50"
              >
                Test IPFS Upload
              </button>
            </div>

            {walletAddress && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-green-800">
                  <strong>Connected:</strong> {walletAddress}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Test Results Summary */}
        {testResults && testResults.overallStatus && (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Test Summary</h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${
                  testResults.overallStatus === 'HEALTHY' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {testResults.overallStatus}
                </div>
                <div className="text-sm text-gray-600">Overall Status</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {testResults.summary?.totalTests || 0}
                </div>
                <div className="text-sm text-gray-600">Total Tests</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {testResults.summary?.passed || 0}
                </div>
                <div className="text-sm text-gray-600">Passed</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {testResults.summary?.failed || 0}
                </div>
                <div className="text-sm text-gray-600">Failed</div>
              </div>
            </div>

            {/* Detailed Test Results */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Detailed Results:</h3>
              <div className="space-y-2">
                {Object.entries(testResults.tests || {}).map(([testName, testData]: [string, any]) => (
                  <div key={testName} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium capitalize">{testName.replace(/([A-Z])/g, ' $1')}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      testData.status === 'PASS' ? 'bg-green-100 text-green-800' :
                      testData.status === 'FAIL' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {testData.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">How to Verify Backend Works</h2>
          
          <div className="space-y-3 text-blue-800">
            <div>
              <strong>1. Backend API Tests:</strong> Click "Run Backend Tests" to verify all API endpoints and configurations.
            </div>
            <div>
              <strong>2. Web3 Connection:</strong> Click "Test Wallet Connection" to verify MetaMask integration.
            </div>
            <div>
              <strong>3. Campus Verification:</strong> After connecting wallet, test verification status.
            </div>
            <div>
              <strong>4. IPFS Upload:</strong> Test file upload functionality to IPFS.
            </div>
            <div>
              <strong>5. Check Results:</strong> All tests should show "PASS" status for a healthy backend.
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-100 rounded">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> Some tests may show "INFO" status for contract addresses if contracts haven't been deployed yet. 
              This is normal for development/testing environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
