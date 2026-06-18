import React, { useState } from 'react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Placeholder blog data - this will be replaced with dynamic data from database
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding GST Compliance for Small Businesses',
      excerpt: 'A comprehensive guide to GST compliance requirements for small businesses in India. Learn about registration, filing, and best practices.',
      content: 'Goods and Services Tax (GST) has transformed the Indian tax landscape. For small businesses, understanding GST compliance is crucial for smooth operations...',
      author: 'Rajesh Kumar',
      authorRole: 'Tax Consultant',
      date: '2024-06-10',
      category: 'Taxation',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Income Tax Filing: Common Mistakes to Avoid',
      excerpt: 'Discover the most common mistakes taxpayers make when filing income tax returns and how to avoid them to ensure smooth processing.',
      content: 'Filing income tax returns can be complex, and even small mistakes can lead to notices or delays. Here are the common errors to watch out for...',
      author: 'Priya Sharma',
      authorRole: 'Senior Accountant',
      date: '2024-06-08',
      category: 'Taxation',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Company Registration: A Step-by-Step Guide',
      excerpt: 'Complete guide to registering your company in India, from choosing the right structure to obtaining necessary licenses.',
      content: 'Starting a business requires proper registration. This guide walks you through the entire process of company registration in India...',
      author: 'Amit Verma',
      authorRole: 'Legal Consultant',
      date: '2024-06-05',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 4,
      title: 'MCA Compliance Requirements for Private Limited Companies',
      excerpt: 'Essential information about MCA compliance that every private limited company must follow to avoid penalties.',
      content: 'Ministry of Corporate Affairs (MCA) compliance is mandatory for all registered companies. Here\'s what you need to know...',
      author: 'Sneha Gupta',
      authorRole: 'Company Secretary',
      date: '2024-06-01',
      category: 'Compliance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 5,
      title: 'Digital Signature Certificate: Everything You Need to Know',
      excerpt: 'Learn about Digital Signature Certificates, their importance, types, and how to obtain one for your business needs.',
      content: 'Digital Signature Certificates (DSC) are essential for various online transactions and filings. Here\'s a complete overview...',
      author: 'Vikram Singh',
      authorRole: 'IT Consultant',
      date: '2024-05-28',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Legal Drafting Best Practices for Business Agreements',
      excerpt: 'Expert tips on drafting legally sound business agreements that protect your interests and ensure clarity.',
      content: 'Well-drafted agreements are the foundation of successful business relationships. Learn the best practices for legal drafting...',
      author: 'Neha Kapoor',
      authorRole: 'Legal Associate',
      date: '2024-05-25',
      category: 'Legal',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
      readTime: '7 min read',
      featured: false
    }
  ]

  const categories = ['All', 'Taxation', 'Business', 'Compliance', 'Technology', 'Legal']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#053131] via-[#0a4a4a] to-[#053131] text-white py-4 overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto ">
            Stay updated with the latest insights on taxation, business compliance, legal matters, and financial management.
          </p>
         
        </div>
      </div>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <div className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Articles</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {featuredPosts.map(post => (
                <div key={post.id} className="group cursor-pointer flex-shrink-0 w-80 md:w-96 snap-start">
                  <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#2F6A9E] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium">Read More →</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2F6A9E] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#2F6A9E] flex items-center justify-center text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent transition-all shadow-sm"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-sm text-gray-500 mr-2 hidden md:block">Filter:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#2F6A9E] text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Posts Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-sm text-gray-500">{regularPosts.length} articles</span>
          </div>
          
          {regularPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSearchQuery('')}}
                className="mt-4 text-[#2F6A9E] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#2F6A9E] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <svg className="w-5 h-5 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2F6A9E] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F6A9E] to-[#1a4a6e] flex items-center justify-center text-white text-xs font-bold shadow-md">
                          {post.author.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-gray-900">{post.author}</span>
                          <span className="text-xs text-gray-500">{post.authorRole}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-br from-[#2F6A9E] via-[#3a7a9e] to-[#2F6A9E] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Weekly Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tax updates, and business insights delivered straight to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-xl text-gray-900 focus:ring-4 focus:ring-white/30 focus:outline-none shadow-lg"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <button className="bg-white text-[#2F6A9E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Subscribe Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe anytime. Read our <a href="#" className="underline hover:text-white">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
