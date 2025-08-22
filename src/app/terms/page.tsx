import Link from 'next/link'
import { BookOpen, Shield, Users, Scale, AlertTriangle } from 'lucide-react'

export default function TermsOfService() {
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
            <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
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
              Welcome to OpenBook ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our 
              decentralized textbook trading platform, including our website, smart contracts, and related services 
              (collectively, the "Service").
            </p>
            <p className="text-gray-700">
              By accessing or using OpenBook, you agree to be bound by these Terms. If you disagree with any part 
              of these terms, you may not access the Service.
            </p>
          </div>

          {/* Definitions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Definitions</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>"Platform"</strong> refers to the OpenBook decentralized marketplace for textbook trading.</p>
              <p><strong>"Smart Contracts"</strong> refers to the blockchain-based contracts that facilitate transactions on the Platform.</p>
              <p><strong>"NFT"</strong> refers to non-fungible tokens used for campus verification badges.</p>
              <p><strong>"IPFS"</strong> refers to the InterPlanetary File System used for decentralized file storage.</p>
              <p><strong>"Polygon Network"</strong> refers to the blockchain network where our smart contracts are deployed.</p>
              <p><strong>"User"</strong> refers to any individual or entity using the Platform.</p>
              <p><strong>"Verified Student"</strong> refers to a user who has completed campus verification and received an NFT badge.</p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Eligibility and Registration</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>3.1 Age Requirement:</strong> You must be at least 18 years old to use the Service. By using 
                the Service, you represent and warrant that you are at least 18 years old.
              </p>
              <p>
                <strong>3.2 Campus Verification:</strong> To access certain features of the Platform, you must be a 
                verified student at a supported educational institution. Campus verification requires:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Valid college email address from a supported institution</li>
                <li>Successful completion of the verification process</li>
                <li>Receipt of a campus verification NFT badge</li>
              </ul>
              <p>
                <strong>3.3 Supported Institutions:</strong> Currently supported institutions include MIT, Stanford, 
                UC Berkeley, Harvard, Yale, Princeton, Columbia, and University of Pennsylvania. We reserve the 
                right to add or remove institutions at our discretion.
              </p>
            </div>
          </div>

          {/* Platform Services */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Platform Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>4.1 Textbook Trading:</strong> The Platform facilitates peer-to-peer trading of digital 
                textbooks through smart contract escrow. Users can list textbooks for sale and purchase textbooks 
                from other verified students.
              </p>
              <p>
                <strong>4.2 Escrow Services:</strong> All transactions are processed through smart contract escrow 
                to ensure secure and trustless trading. Funds are held in escrow until the transaction is completed 
                or resolved through our dispute system.
              </p>
              <p>
                <strong>4.3 IPFS Storage:</strong> Textbook files are stored on IPFS for decentralized, permanent, 
                and censorship-resistant storage. Users retain ownership of their uploaded content.
              </p>
              <p>
                <strong>4.4 Token Rewards:</strong> Users may earn OpenBook Tokens (OBT) for platform participation, 
                including successful transactions and community contributions.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>5.1 Accurate Information:</strong> You must provide accurate and complete information during registration and verification.</p>
              <p><strong>5.2 Legal Compliance:</strong> You must comply with all applicable laws and regulations when using the Platform.</p>
              <p><strong>5.3 Content Ownership:</strong> You must only upload content that you own or have the right to distribute.</p>
              <p><strong>5.4 Prohibited Activities:</strong> You agree not to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Upload copyrighted material without permission</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Attempt to manipulate the platform or smart contracts</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with the operation of the Platform</li>
                <li>Attempt to gain unauthorized access to the Platform</li>
              </ul>
            </div>
          </div>

          {/* Fees and Payments */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Fees and Payments</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>6.1 Platform Fees:</strong> A 2.5% platform fee is charged on all successful transactions. 
                This fee is automatically deducted from the transaction amount and paid to the platform.
              </p>
              <p>
                <strong>6.2 Gas Fees:</strong> Users are responsible for paying blockchain gas fees for all 
                transactions, including smart contract interactions and NFT minting.
              </p>
              <p>
                <strong>6.3 Payment Methods:</strong> All payments are processed through the Polygon blockchain 
                using MATIC or other supported cryptocurrencies.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>7.1 Dispute Process:</strong> If a dispute arises between buyers and sellers, both parties 
                may initiate a dispute through the Platform. Disputes are resolved by our platform administrators 
                based on evidence provided by both parties.
              </p>
              <p>
                <strong>7.2 Resolution Timeline:</strong> Disputes are typically resolved within 5-7 business days 
                of initiation, depending on the complexity of the case.
              </p>
              <p>
                <strong>7.3 Final Decision:</strong> Our platform administrators have the final authority to resolve 
                disputes and determine the distribution of escrowed funds.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>8.1 Platform IP:</strong> The OpenBook platform, including its design, code, and branding, 
                is owned by OpenBook and protected by intellectual property laws.
              </p>
              <p>
                <strong>8.2 User Content:</strong> Users retain ownership of content they upload to the Platform. 
                By uploading content, you grant OpenBook a license to store and display the content on the Platform.
              </p>
              <p>
                <strong>8.3 NFT Badges:</strong> Campus verification NFT badges are owned by verified students 
                and may be transferred or sold according to applicable laws and platform policies.
              </p>
            </div>
          </div>

          {/* Privacy and Data */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>9.1 Data Collection:</strong> We collect and process personal data as described in our 
                <Link href="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</Link>.
              </p>
              <p>
                <strong>9.2 Blockchain Transparency:</strong> Please note that blockchain transactions are public 
                and immutable. Information stored on the blockchain cannot be deleted or modified.
              </p>
              <p>
                <strong>9.3 Data Security:</strong> We implement appropriate security measures to protect your 
                personal data, but cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>10.1 Platform Liability:</strong> OpenBook is provided "as is" without warranties of any 
                kind. We are not liable for any damages arising from your use of the Platform.
              </p>
              <p>
                <strong>10.2 Smart Contract Risk:</strong> Smart contracts are experimental technology. Users 
                acknowledge the inherent risks of using blockchain-based systems.
              </p>
              <p>
                <strong>10.3 Maximum Liability:</strong> Our total liability to you shall not exceed the amount 
                of fees paid by you to OpenBook in the 12 months preceding the claim.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>11.1 User Termination:</strong> You may terminate your account at any time by contacting 
                our support team.
              </p>
              <p>
                <strong>11.2 Platform Termination:</strong> We may terminate or suspend your access to the 
                Platform for violations of these Terms or for any other reason at our discretion.
              </p>
              <p>
                <strong>11.3 Effect of Termination:</strong> Upon termination, your right to use the Platform 
                ceases immediately, but your obligations under these Terms survive termination.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>12.1 Governing Law:</strong> These Terms are governed by the laws of the State of Delaware, 
                United States, without regard to conflict of law principles.
              </p>
              <p>
                <strong>12.2 Jurisdiction:</strong> Any disputes arising from these Terms shall be resolved in the 
                courts of Delaware, United States.
              </p>
              <p>
                <strong>12.3 Arbitration:</strong> For disputes involving amounts less than $10,000, parties agree 
                to resolve disputes through binding arbitration.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>13.1 Modification:</strong> We reserve the right to modify these Terms at any time. 
                Changes will be effective immediately upon posting on the Platform.
              </p>
              <p>
                <strong>13.2 Notification:</strong> We will notify users of material changes to these Terms 
                through the Platform or by email.
              </p>
              <p>
                <strong>13.3 Continued Use:</strong> Your continued use of the Platform after changes become 
                effective constitutes acceptance of the modified Terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>14.1 General Inquiries:</strong> For questions about these Terms, please contact us at:
              </p>
              <div className="ml-4 space-y-2">
                <p>Email: legal@openbook.com</p>
                <p>Support: support@openbook.com</p>
                <p>Discord: discord.gg/openbook</p>
              </div>
              <p>
                <strong>14.2 Legal Notices:</strong> Legal notices should be sent to:
              </p>
              <div className="ml-4">
                <p>OpenBook Legal Department</p>
                <p>123 Blockchain Street</p>
                <p>Delaware, DE 19901</p>
                <p>United States</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">OpenBook Terms of Service</span>
              </div>
              <Link 
                href="/privacy" 
                className="text-sm text-blue-600 hover:underline"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
