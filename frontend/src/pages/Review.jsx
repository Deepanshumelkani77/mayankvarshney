import React, { useState } from 'react'

const Review = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)

  // Placeholder review data - this will be replaced with dynamic data from database
  const reviews = [
    {
      id: 1,
      name: 'Rahul Sharma',
      company: 'Tech Solutions Pvt Ltd',
      rating: 5,
      title: 'Excellent Tax Consultation Services',
      review: 'Mayank Varshney & Co. has been instrumental in handling our company\'s taxation needs. Their team is highly professional, knowledgeable, and always available to answer our queries. Highly recommended for businesses looking for reliable tax consultants.',
      date: '2024-06-10',
      service: 'Taxation',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Gupta',
      company: 'Global Exports Ltd',
      rating: 5,
      title: 'Outstanding Legal Support',
      review: 'The legal team at Mayank Varshney & Co. provided exceptional support during our company registration process. They handled everything efficiently and kept us informed at every step. Their expertise in corporate law is truly impressive.',
      date: '2024-06-08',
      service: 'Legal',
      verified: true
    },
    {
      id: 3,
      name: 'Amit Verma',
      company: 'StartUp Hub',
      rating: 4,
      title: 'Professional and Reliable',
      review: 'We have been working with Mayank Varshney & Co. for over a year now. Their accounting services are top-notch and they always deliver on time. The only reason for 4 stars is that sometimes response time could be faster during peak season.',
      date: '2024-06-05',
      service: 'Accounting',
      verified: true
    },
    {
      id: 4,
      name: 'Sneha Kapoor',
      company: 'Digital Marketing Agency',
      rating: 5,
      title: 'Best Financial Advisors',
      review: 'The financial advisory services provided by Mayank Varshney & Co. have helped us streamline our business finances significantly. Their insights and recommendations have been invaluable for our growth. Truly professional team!',
      date: '2024-06-01',
      service: 'Financial Advisory',
      verified: true
    },
    {
      id: 5,
      name: 'Vikram Singh',
      company: 'E-Commerce Ventures',
      rating: 5,
      title: 'Exceptional GST Compliance Support',
      review: 'GST compliance was a nightmare for us until we partnered with Mayank Varshney & Co. Their team made the entire process seamless and error-free. We now have complete peace of mind knowing our compliance is in expert hands.',
      date: '2024-05-28',
      service: 'GST Compliance',
      verified: false
    },
    {
      id: 6,
      name: 'Neha Reddy',
      company: 'Healthcare Solutions',
      rating: 4,
      title: 'Reliable and Trustworthy',
      review: 'Mayank Varshney & Co. has been handling our payroll and taxation for the past 2 years. They are reliable, trustworthy, and always professional. The team is responsive and addresses our concerns promptly.',
      date: '2024-05-25',
      service: 'Payroll',
      verified: true
    }
  ]

  const filters = ['All', 'Taxation', 'Legal', 'Accounting', 'Financial Advisory', 'GST Compliance', 'Payroll']

  const filteredReviews = selectedFilter === 'All' 
    ? reviews 
    : reviews.filter(review => review.service === selectedFilter)

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0

  const ratingDistribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length,
    percentage: reviews.length > 0 ? (reviews.filter(r => r.rating === star).length / reviews.length) * 100 : 0
  }))

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#053131] via-[#0a4a4a] to-[#053131] text-white py-4 overflow-hidden">
       
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto ">
            See what our clients say about our professional financial, taxation, and legal services.
          </p>
         
        </div>
      </div>

      {/* Rating Overview Section */}
      <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F6A9E] to-[#1a4a6e] rounded-full blur-2xl opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-[#2F6A9E] to-[#1a4a6e] rounded-full w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center shadow-2xl">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">{averageRating}</div>
                    <div className="flex gap-1">
                      {renderStars(Math.round(averageRating))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-6 text-lg font-medium">Based on {reviews.length} reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Rating Distribution</h3>
                {ratingDistribution.map(({ star, count, percentage }) => (
                  <div key={star} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm font-medium text-gray-700">{star}</span>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600 text-right font-medium">{count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-sm text-gray-500 mr-2">Filter by Service:</span>
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-[#2F6A9E] text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-[#2F6A9E] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#245a80] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {selectedFilter === 'All' ? 'All Reviews' : `${selectedFilter} Reviews`}
            </h2>
            <span className="text-sm text-gray-500">{filteredReviews.length} reviews</span>
          </div>

          {filteredReviews.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl text-gray-600">No reviews found for this category.</p>
              <button 
                onClick={() => setSelectedFilter('All')}
                className="mt-4 text-[#2F6A9E] hover:underline"
              >
                View all reviews
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredReviews.map(review => (
                <div key={review.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2F6A9E] to-[#1a4a6e] flex items-center justify-center text-white text-lg font-bold shadow-md">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.company}</p>
                      </div>
                    </div>
                    {review.verified && (
                      <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-green-700 font-medium">Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{review.review}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                    <div className="flex gap-2">
                      <button className="text-gray-400 hover:text-[#2F6A9E] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-[#2F6A9E] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
            <div className="bg-gradient-to-r from-[#053131] to-[#0a4a4a] text-white px-6 py-4 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Write a Review</h2>
                <button 
                  onClick={() => {setShowReviewForm(false); setSelectedRating(0)}}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent" required>
                  <option value="">Select a service</option>
                  <option value="Taxation">Taxation</option>
                  <option value="Legal">Legal</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Financial Advisory">Financial Advisory</option>
                  <option value="GST Compliance">GST Compliance</option>
                  <option value="Payroll">Payroll</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setSelectedRating(star)}
                      className={`text-3xl transition-colors ${star <= selectedRating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Review Title *</label>
                <input
                  type="text"
                  placeholder="Summarize your experience"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review *</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your experience..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent resize-none"
                  required
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#2F6A9E] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#245a80] transition-colors"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={() => {setShowReviewForm(false); setSelectedRating(0)}}
                  className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Review
