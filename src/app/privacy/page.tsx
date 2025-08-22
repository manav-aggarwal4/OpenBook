import Link from 'next/link'
import { BookOpen, Shield, Lock, Eye, Database, Globe, AlertTriangle } from 'lucide-react'

export default function PrivacyPolicy() {
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
            <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> August 22, 2024
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              OpenBook ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our decentralized textbook 
              trading platform.
            </p>
            <p className="text-gray-700">
              By using OpenBook, you consent to the data practices described in this policy. This policy applies to 
              all users of our platform, including verified students and visitors.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Account Information:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Wallet addresses (public blockchain addresses)</li>
                    <li>College email addresses for verification</li>
                    <li>Campus/institution affiliation</li>
                    <li>Username or display name (optional)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Transaction Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Blockchain Data:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Transaction hashes and details</li>
                    <li>Smart contract interactions</li>
                    <li>NFT badge ownership and transfers</li>
                    <li>Platform fee payments</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 Content Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>User-Generated Content:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Textbook files uploaded to IPFS</li>
                    <li>Listing descriptions and metadata</li>
                    <li>User reviews and ratings</li>
                    <li>Communication with other users</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.4 Technical Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Usage Data:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>IP addresses and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage patterns and preferences</li>
                    <li>Error logs and performance data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>3.1 Platform Operations:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide and maintain the OpenBook platform</li>
                <li>Process transactions and manage escrow</li>
                <li>Verify student status and issue NFT badges</li>
                <li>Facilitate peer-to-peer textbook trading</li>
                <li>Distribute token rewards and incentives</li>
              </ul>

              <p><strong>3.2 Security and Compliance:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Prevent fraud and abuse</li>
                <li>Ensure platform security</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and conflicts</li>
              </ul>

              <p><strong>3.3 Communication:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Send important platform updates</li>
                <li>Provide customer support</li>
                <li>Notify about transactions and disputes</li>
                <li>Share educational content and announcements</li>
              </ul>

              <p><strong>3.4 Analytics and Improvement:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Analyze platform usage and performance</li>
                <li>Improve user experience and features</li>
                <li>Develop new services and functionality</li>
                <li>Conduct research and analysis</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>4.1 Public Blockchain Data:</strong></p>
              <p className="ml-4">
                Information stored on the blockchain (transactions, NFT ownership, smart contract interactions) 
                is publicly visible and immutable. This includes wallet addresses, transaction amounts, and 
                contract interactions.
              </p>

              <p><strong>4.2 IPFS Content:</strong></p>
              <p className="ml-4">
                Textbook files and metadata uploaded to IPFS are publicly accessible through the IPFS network. 
                While we do not directly share this content, it is available to anyone with the IPFS hash.
              </p>

              <p><strong>4.3 Service Providers:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Blockchain network providers (Polygon)</li>
                <li>IPFS storage and gateway services</li>
                <li>Analytics and monitoring services</li>
                <li>Customer support and communication tools</li>
              </ul>

              <p><strong>4.4 Legal Requirements:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Comply with applicable laws and regulations</li>
                <li>Respond to legal requests and court orders</li>
                <li>Protect our rights and property</li>
                <li>Prevent fraud and security threats</li>
              </ul>

              <p><strong>4.5 Business Transfers:</strong></p>
              <p className="ml-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                to the new entity, subject to the same privacy protections.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>5.1 Security Measures:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security audits and assessments</li>
                <li>Monitoring for suspicious activities</li>
                <li>Employee training on data protection</li>
              </ul>

              <p><strong>5.2 Blockchain Security:</strong></p>
              <p className="ml-4">
                While blockchain technology provides inherent security through cryptography and decentralization, 
                users are responsible for securing their private keys and wallet access.
              </p>

              <p><strong>5.3 Data Breach Response:</strong></p>
              <p className="ml-4">
                In the event of a data breach, we will notify affected users and relevant authorities as required 
                by law, and take appropriate measures to mitigate the impact.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>6.1 Account Data:</strong> We retain your account information for as long as your account 
              is active or as needed to provide services.</p>

              <p><strong>6.2 Transaction Data:</strong> Blockchain transaction data is permanently stored on the 
              blockchain and cannot be deleted.</p>

              <p><strong>6.3 IPFS Content:</strong> Content uploaded to IPFS may persist indefinitely unless 
              actively removed by the user or through IPFS garbage collection.</p>

              <p><strong>6.4 Analytics Data:</strong> We retain analytics and usage data for up to 3 years for 
              business analysis and improvement purposes.</p>

              <p><strong>6.5 Legal Requirements:</strong> We may retain certain information longer if required 
              by law or for legitimate business purposes.</p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>7.1 Access and Portability:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access your personal information</li>
                <li>Request a copy of your data</li>
                <li>Export your transaction history</li>
                <li>Download your uploaded content</li>
              </ul>

              <p><strong>7.2 Correction and Updates:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Update your account information</li>
                <li>Correct inaccurate data</li>
                <li>Modify your privacy preferences</li>
              </ul>

              <p><strong>7.3 Deletion and Withdrawal:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Delete your account (subject to blockchain limitations)</li>
                <li>Remove uploaded content from IPFS</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <p><strong>7.4 Communication Preferences:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Opt out of marketing communications</li>
                <li>Control notification settings</li>
                <li>Manage email preferences</li>
              </ul>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>8.1 Essential Cookies:</strong> We use essential cookies to provide core platform 
              functionality, including authentication and session management.</p>

              <p><strong>8.2 Analytics Cookies:</strong> We use analytics cookies to understand platform usage 
              and improve user experience. You can opt out of analytics tracking.</p>

              <p><strong>8.3 Third-Party Services:</strong> Some third-party services (analytics, support tools) 
              may use their own cookies and tracking technologies.</p>

              <p><strong>8.4 Cookie Management:</strong> You can control cookie settings through your browser 
              preferences or our cookie consent manager.</p>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>9.1 Global Operations:</strong> OpenBook operates globally, and your information may 
              be processed in countries other than your own.</p>

              <p><strong>9.2 Adequate Protection:</strong> We ensure appropriate safeguards are in place for 
              international data transfers, including:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions</li>
                <li>Other appropriate safeguards</li>
              </ul>

              <p><strong>9.3 Blockchain Networks:</strong> Blockchain data is distributed globally across 
              network nodes and may be stored in various jurisdictions.</p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>10.1 Age Requirement:</strong> OpenBook is not intended for children under 18 years old. 
              We do not knowingly collect personal information from children under 18.</p>

              <p><strong>10.2 Verification:</strong> Our campus verification process helps ensure users are 
              legitimate college students, but we cannot guarantee the accuracy of all information provided.</p>

              <p><strong>10.3 Parental Rights:</strong> If you believe we have collected information from a 
              child under 18, please contact us immediately.</p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Third-Party Services</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>11.1 External Links:</strong> Our platform may contain links to third-party websites 
              and services. We are not responsible for their privacy practices.</p>

              <p><strong>11.2 Integrated Services:</strong> We integrate with various third-party services:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Blockchain networks (Polygon)</li>
                <li>IPFS storage providers</li>
                <li>Wallet providers (MetaMask, etc.)</li>
                <li>Analytics and monitoring tools</li>
                <li>Customer support platforms</li>
              </ul>

              <p><strong>11.3 Third-Party Policies:</strong> Please review the privacy policies of third-party 
              services you use in connection with OpenBook.</p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>12.1 Updates:</strong> We may update this Privacy Policy from time to time to reflect 
              changes in our practices or applicable laws.</p>

              <p><strong>12.2 Notification:</strong> We will notify you of material changes through:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Email notifications</li>
                <li>Platform announcements</li>
                <li>Updated policy posting</li>
              </ul>

              <p><strong>12.3 Continued Use:</strong> Your continued use of OpenBook after changes become 
              effective constitutes acceptance of the updated policy.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>13.1 Privacy Inquiries:</strong> For questions about this Privacy Policy or your 
              privacy rights, please contact us at:</p>
              
              <div className="ml-4 space-y-2">
                <p>Email: privacy@openbook.com</p>
                <p>Support: support@openbook.com</p>
                <p>Discord: discord.gg/openbook</p>
              </div>

              <p><strong>13.2 Data Protection Officer:</strong></p>
              <div className="ml-4">
                <p>OpenBook Data Protection Officer</p>
                <p>123 Blockchain Street</p>
                <p>Delaware, DE 19901</p>
                <p>United States</p>
                <p>Email: dpo@openbook.com</p>
              </div>

              <p><strong>13.3 Regulatory Authority:</strong> If you have concerns about our data practices, 
              you may contact your local data protection authority.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">OpenBook Privacy Policy</span>
              </div>
              <Link 
                href="/terms" 
                className="text-sm text-blue-600 hover:underline"
              >
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
