import { ethers } from 'ethers'

// Contract ABIs (simplified for now - will be generated from actual contracts)
export const CAMPUS_VERIFICATION_ABI = [
  'function isVerified(address student) view returns (bool)',
  'function getStudentInfo(address student) view returns (bool verified, string campus)',
  'function verifyStudent(address student, string campus, string tokenURI)',
  'event StudentVerified(address indexed student, string campus, uint256 tokenId)'
]

export const TEXTBOOK_MARKETPLACE_ABI = [
  'function createListing(string title, string author, string isbn, uint256 price, string condition, string campus, string ipfsHash, string description, uint256 duration)',
  'function purchaseListing(uint256 listingId) payable',
  'function completePurchase(uint256 listingId)',
  'function getListing(uint256 listingId) view returns (tuple(uint256 listingId, address seller, string title, string author, string isbn, uint256 price, string condition, string campus, string ipfsHash, string description, uint256 createdAt, uint256 expiresAt, bool isActive, bool isSold))',
  'function getTotalListings() view returns (uint256)',
  'event ListingCreated(uint256 indexed listingId, address indexed seller, string title, uint256 price, string campus)',
  'event ListingSold(uint256 indexed listingId, address indexed buyer)'
]

export const OPENBOOK_TOKEN_ABI = [
  'function balanceOf(address account) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function getRewardBalance(address user) view returns (uint256)',
  'function isEligibleForRewards(address user) view returns (bool)'
]

// Contract addresses (will be set from environment variables)
export const CONTRACT_ADDRESSES = {
  campusVerification: process.env.NEXT_PUBLIC_CAMPUS_VERIFICATION_ADDRESS || '',
  textbookMarketplace: process.env.NEXT_PUBLIC_TEXTBOOK_MARKETPLACE_ADDRESS || '',
  openBookToken: process.env.NEXT_PUBLIC_OPENBOOK_TOKEN_ADDRESS || ''
}

// Network configuration
export const NETWORK_CONFIG = {
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '137'),
  chainName: process.env.NEXT_PUBLIC_CHAIN_NAME || 'Polygon',
  rpcUrl: process.env.NEXT_PUBLIC_POLYGON_RPC_URL || 'https://polygon-rpc.com'
}

// Web3 provider and signer
let provider: ethers.providers.Web3Provider | null = null
let signer: ethers.Signer | null = null

export const getProvider = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    if (!provider) {
      provider = new ethers.providers.Web3Provider(window.ethereum)
    }
    return provider
  }
  return null
}

export const getSigner = async () => {
  const provider = getProvider()
  if (provider && !signer) {
    await provider.send('eth_requestAccounts', [])
    signer = provider.getSigner()
  }
  return signer
}

// Contract instances
export const getCampusVerificationContract = async () => {
  const signer = await getSigner()
  if (!signer || !CONTRACT_ADDRESSES.campusVerification) return null
  
  return new ethers.Contract(
    CONTRACT_ADDRESSES.campusVerification,
    CAMPUS_VERIFICATION_ABI,
    signer
  )
}

export const getTextbookMarketplaceContract = async () => {
  const signer = await getSigner()
  if (!signer || !CONTRACT_ADDRESSES.textbookMarketplace) return null
  
  return new ethers.Contract(
    CONTRACT_ADDRESSES.textbookMarketplace,
    TEXTBOOK_MARKETPLACE_ABI,
    signer
  )
}

export const getOpenBookTokenContract = async () => {
  const signer = await getSigner()
  if (!signer || !CONTRACT_ADDRESSES.openBookToken) return null
  
  return new ethers.Contract(
    CONTRACT_ADDRESSES.openBookToken,
    OPENBOOK_TOKEN_ABI,
    signer
  )
}

// Web3 utility functions
export const connectWallet = async () => {
  try {
    const provider = getProvider()
    if (!provider) {
      throw new Error('No Web3 provider found')
    }
    
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    
    return { success: true, address }
  } catch (error) {
    console.error('Failed to connect wallet:', error)
    return { success: false, error: error.message }
  }
}

export const checkVerification = async (address: string) => {
  try {
    const contract = await getCampusVerificationContract()
    if (!contract) return { verified: false, campus: '' }
    
    const [verified, campus] = await contract.getStudentInfo(address)
    return { verified, campus }
  } catch (error) {
    console.error('Failed to check verification:', error)
    return { verified: false, campus: '' }
  }
}

export const createTextbookListing = async (listingData: {
  title: string
  author: string
  isbn: string
  price: string
  condition: string
  campus: string
  ipfsHash: string
  description: string
  duration: number
}) => {
  try {
    const contract = await getTextbookMarketplaceContract()
    if (!contract) throw new Error('Contract not available')
    
    const priceInWei = ethers.utils.parseEther(listingData.price)
    const durationInSeconds = listingData.duration * 24 * 60 * 60 // Convert days to seconds
    
    const tx = await contract.createListing(
      listingData.title,
      listingData.author,
      listingData.isbn,
      priceInWei,
      listingData.condition,
      listingData.campus,
      listingData.ipfsHash,
      listingData.description,
      durationInSeconds
    )
    
    const receipt = await tx.wait()
    return { success: true, txHash: receipt.transactionHash }
  } catch (error) {
    console.error('Failed to create listing:', error)
    return { success: false, error: error.message }
  }
}

export const purchaseTextbook = async (listingId: number, price: string) => {
  try {
    const contract = await getTextbookMarketplaceContract()
    if (!contract) throw new Error('Contract not available')
    
    const priceInWei = ethers.utils.parseEther(price)
    
    const tx = await contract.purchaseListing(listingId, { value: priceInWei })
    const receipt = await tx.wait()
    
    return { success: true, txHash: receipt.transactionHash }
  } catch (error) {
    console.error('Failed to purchase textbook:', error)
    return { success: false, error: error.message }
  }
}

export const getTokenBalance = async (address: string) => {
  try {
    const contract = await getOpenBookTokenContract()
    if (!contract) return '0'
    
    const balance = await contract.balanceOf(address)
    return ethers.utils.formatEther(balance)
  } catch (error) {
    console.error('Failed to get token balance:', error)
    return '0'
  }
}

// IPFS utilities
export const uploadToIPFS = async (file: File): Promise<string> => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    
    const response = await fetch('/api/ipfs/upload', {
      method: 'POST',
      body: formData
    })
    
    if (!response.ok) {
      throw new Error('Failed to upload to IPFS')
    }
    
    const data = await response.json()
    return data.ipfsHash
  } catch (error) {
    console.error('Failed to upload to IPFS:', error)
    throw error
  }
}

// Network switching
export const switchToPolygon = async () => {
  try {
    const provider = getProvider()
    if (!provider) throw new Error('No Web3 provider found')
    
    await provider.send('wallet_switchEthereumChain', [
      { chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}` }
    ])
    
    return { success: true }
  } catch (error) {
    console.error('Failed to switch network:', error)
    return { success: false, error: error.message }
  }
}

// Format utilities
export const formatEther = (wei: string) => {
  return ethers.utils.formatEther(wei)
}

export const parseEther = (ether: string) => {
  return ethers.utils.parseEther(ether)
}

export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
