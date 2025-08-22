'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Plus, BookOpen, Star, MapPin, DollarSign, Clock } from 'lucide-react'

interface Textbook {
  id: string
  title: string
  author: string
  isbn: string
  price: number
  condition: 'new' | 'like-new' | 'good' | 'fair'
  campus: string
  seller: string
  image: string
  rating: number
  listedAt: string
}

const mockTextbooks: Textbook[] = [
  {
    id: '1',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    isbn: '978-1305272378',
    price: 45.00,
    condition: 'good',
    campus: 'MIT',
    seller: '0x1234...5678',
    image: '/api/placeholder/300/400',
    rating: 4.8,
    listedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '978-0262033848',
    price: 65.00,
    condition: 'like-new',
    campus: 'Stanford',
    seller: '0x8765...4321',
    image: '/api/placeholder/300/400',
    rating: 4.9,
    listedAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Organic Chemistry',
    author: 'Paula Yurkanis Bruice',
    isbn: '978-0134042282',
    price: 35.00,
    condition: 'fair',
    campus: 'UC Berkeley',
    seller: '0x9876...5432',
    image: '/api/placeholder/300/400',
    rating: 4.5,
    listedAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Physics for Scientists and Engineers',
    author: 'Raymond A. Serway',
    isbn: '978-1133947271',
    price: 55.00,
    condition: 'new',
    campus: 'Harvard',
    seller: '0x5432...1098',
    image: '/api/placeholder/300/400',
    rating: 4.7,
    listedAt: '2024-01-12'
  }
]

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCampus, setSelectedCampus] = useState('all')
  const [selectedCondition, setSelectedCondition] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTextbooks = mockTextbooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.isbn.includes(searchTerm)
    const matchesCampus = selectedCampus === 'all' || book.campus === selectedCampus
    const matchesCondition = selectedCondition === 'all' || book.condition === selectedCondition
    
    return matchesSearch && matchesCampus && matchesCondition
  })

  const sortedTextbooks = [...filteredTextbooks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'recent':
      default:
        return new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime()
    }
  })

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'text-green-600 bg-green-100'
      case 'like-new': return 'text-blue-600 bg-blue-100'
      case 'good': return 'text-yellow-600 bg-yellow-100'
      case 'fair': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Textbook Marketplace</h1>
              <p className="mt-2 text-gray-600">Find and trade textbooks with verified college students</p>
            </div>
            <Link href="/marketplace/list" className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              List Textbook
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search textbooks, authors, or ISBN..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="recent">Most Recent</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campus</label>
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Campuses</option>
                  <option value="MIT">MIT</option>
                  <option value="Stanford">Stanford</option>
                  <option value="UC Berkeley">UC Berkeley</option>
                  <option value="Harvard">Harvard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Conditions</option>
                  <option value="new">New</option>
                  <option value="like-new">Like New</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedTextbooks.length} of {mockTextbooks.length} textbooks
          </p>
        </div>

        {/* Textbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTextbooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-gray-400" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <p className="text-xs text-gray-500 mb-3">ISBN: {book.isbn}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getConditionColor(book.condition)}`}>
                    {book.condition.replace('-', ' ')}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {book.campus}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(book.listedAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-lg font-bold text-gray-900">{book.price.toFixed(2)}</span>
                  </div>
                  <Link
                    href={`/marketplace/${book.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedTextbooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No textbooks found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
