import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ITR = () => {
  const { t } = useTranslation()
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    panNumber: '',
    aadhaarNumber: '',
    dateOfBirth: '',
    mobileNumber: '',
    email: ''
  })
  const [assessmentYear, setAssessmentYear] = useState('')
  const [status, setStatus] = useState('')
  const [selectedITR, setSelectedITR] = useState('')
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [helpStep, setHelpStep] = useState(1)
  const [helpAnswers, setHelpAnswers] = useState({
    residentialStatus: '',
    hasLTCG112A: '',
    controlManagementOutside: '',
    hufManagerStayDays: '',
    hufManagerResidentYears: '',
    isDirector: '',
    holdsUnlistedShares: '',
    portugueseCivilCode: '',
    tds194N: '',
    esopDeferredTax: '',
    incomeExceeds50Lakh: '',
    hasBusinessIncome: '',
    hasSalaryIncome: '',
    hasHouseProperty: '',
    hasCapitalGains: '',
    hasOtherSources: ''
  })

  const assessmentYears = [
    { value: '2024-25', label: 'AY 2024-25 (FY 2023-24)' },
    { value: '2023-24', label: 'AY 2023-24 (FY 2022-23)' },
    { value: '2022-23', label: 'AY 2022-23 (FY 2021-22)' },
    { value: '2021-22', label: 'AY 2021-22 (FY 2020-21)' }
  ]

  const statusOptions = [
    { value: 'individual', label: 'Individual', icon: '👤' },
    { value: 'business', label: 'Business', icon: '🏢' },
    { value: 'other', label: 'Other', icon: '📋' }
  ]

  const itrForms = [
    { value: 'ITR-1', label: 'ITR-1 (Sahaj)', description: 'For individuals having income from salary, one house property, etc.' },
    { value: 'ITR-2', label: 'ITR-2', description: 'For individuals and HUFs not having income from business or profession' },
    { value: 'ITR-3', label: 'ITR-3', description: 'For individuals and HUFs having income from proprietary business or profession' },
    { value: 'ITR-4', label: 'ITR-4 (Sugam)', description: 'For individuals, HUFs and firms with presumptive income from business/profession' },
    { value: 'ITR-5', label: 'ITR-5', description: 'For persons other than individuals, HUFs, companies and firms' },
    { value: 'ITR-6', label: 'ITR-6', description: 'For companies other than companies claiming exemption under section 11' },
    { value: 'ITR-7', label: 'ITR-7', description: 'For persons including companies required to furnish return under sections 139(4A), 139(4B), 139(4C), 139(4D)' }
  ]

  const handleNext = () => {
    if (currentStep === 1 && personalDetails.firstName && personalDetails.lastName && personalDetails.panNumber && personalDetails.aadhaarNumber && personalDetails.dateOfBirth && personalDetails.mobileNumber && personalDetails.email) {
      setCurrentStep(2)
    } else if (currentStep === 2 && assessmentYear) {
      setCurrentStep(3)
    } else if (currentStep === 3 && status) {
      setCurrentStep(4)
    } else if (currentStep === 4 && selectedITR) {
      // Proceed to filing
      alert(`Proceeding to file ${selectedITR} for ${assessmentYear} as ${status}`)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getRecommendedITR = () => {
    const {
      residentialStatus,
      isDirector,
      holdsUnlistedShares,
      portugueseCivilCode,
      tds194N,
      esopDeferredTax,
      incomeExceeds50Lakh,
      hasBusinessIncome,
      hasSalaryIncome,
      hasHouseProperty,
      hasCapitalGains,
      hasOtherSources
    } = helpAnswers

    // Logic to determine ITR form based on answers
    if (status === 'individual') {
      if (hasBusinessIncome === 'yes') {
        return 'ITR-3 or ITR-4 - For individuals with business/professional income'
      }
      if (hasCapitalGains === 'yes' || holdsUnlistedShares === 'yes' || isDirector === 'yes') {
        return 'ITR-2 - For individuals with capital gains or directorship'
      }
      if (incomeExceeds50Lakh === 'yes') {
        return 'ITR-2 - For individuals with income exceeding ₹50 Lakh'
      }
      return 'ITR-1 (Sahaj) - For salaried individuals with simple income sources'
    } else if (status === 'business') {
      if (incomeExceeds50Lakh === 'yes') {
        return 'ITR-3 - For business income exceeding ₹50 Lakh'
      }
      return 'ITR-4 (Sugam) - For presumptive income taxpayers'
    } else {
      return 'ITR-5 or ITR-7 - For other categories'
    }
  }

  const handleHelpNext = () => {
    if (helpStep < 5) {
      setHelpStep(helpStep + 1)
    }
  }

  const handleHelpBack = () => {
    if (helpStep > 1) {
      if (helpStep === 1.1 || helpStep === 1.2 || helpStep === 1.3 || helpStep === 1.4 || helpStep === 1.5 || helpStep === 1.6) {
        setHelpStep(1)
      } else {
        setHelpStep(helpStep - 1)
      }
    }
  }

  const handleHelpAnswer = (field, value) => {
    setHelpAnswers({ ...helpAnswers, [field]: value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#2F6A9E] via-[#1a4a75] to-[#0d3a5c] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Income Tax Returns</h1>
                <p className="text-blue-100 text-lg">File your ITR quickly and securely with expert assistance</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                <div className="text-xs text-blue-200 uppercase tracking-wide mb-1">Assessment Year</div>
                <div className="text-lg font-semibold">{assessmentYear || 'Not Selected'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                <div className="text-xs text-blue-200 uppercase tracking-wide mb-1">Status</div>
                <div className="text-lg font-semibold capitalize">{status || 'Not Selected'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-6">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-300 ${
                      currentStep >= step
                        ? 'bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] text-white shadow-lg shadow-[#2F6A9E]/30'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {currentStep > step ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                  <div className="ml-3">
                    <span
                      className={`block text-sm font-semibold ${
                        currentStep >= step ? 'text-[#2F6A9E]' : 'text-gray-400'
                      }`}
                    >
                      {step === 1 ? 'Personal Details' : step === 2 ? 'Assessment Year' : step === 3 ? 'Status' : 'ITR Form'}
                    </span>
                    <span
                      className={`text-xs ${
                        currentStep >= step ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      {currentStep > step ? 'Completed' : currentStep === step ? 'In Progress' : 'Pending'}
                    </span>
                  </div>
                </div>
                {step < 4 && (
                  <div className="w-32 h-2 mx-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        currentStep > step ? 'bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75]' : 'bg-gray-100'
                      }`}
                      style={{ width: currentStep > step ? '100%' : '0%' }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Personal Details*</h2>
                  <p className="text-gray-500">Please provide your personal information to proceed</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                  
                    <input
                      type="text"
                      value={personalDetails.firstName}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, firstName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                      placeholder="Enter first name *"
                    />
                  </div>
                  <div>
               
                    <input
                      type="text"
                      value={personalDetails.middleName}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, middleName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                      placeholder="Enter middle name"
                    />
                  </div>
                  <div>
                   
                    <input
                      type="text"
                      value={personalDetails.lastName}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, lastName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                      placeholder="Enter last name *"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                 
                    <input
                      type="text"
                      value={personalDetails.panNumber}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, panNumber: e.target.value.toUpperCase() })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all uppercase"
                      placeholder="PAN Number*"
                      maxLength={10}
                    />
                  </div>
                  <div>
                   
                    <input
                      type="text"
                      value={personalDetails.aadhaarNumber}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, aadhaarNumber: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                      placeholder="Aadhaar Number*"
                      maxLength={12}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 

 <div>
                 
                  <input
                    type="email"
                    value={personalDetails.email}
                    onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                    placeholder="Email Address*"
                  />
                </div>
                  
                  <div>
                  
                    <input
                      type="tel"
                      value={personalDetails.mobileNumber}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, mobileNumber: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                      placeholder="Mobile Number*"
                      maxLength={10}
                    />
                  </div>
                </div>

              <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth*</label>
                    <input
                      type="date"
                      value={personalDetails.dateOfBirth}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, dateOfBirth: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2F6A9E] focus:ring-2 focus:ring-[#2F6A9E]/20 outline-none transition-all"
                    />
                  </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!personalDetails.firstName || !personalDetails.lastName || !personalDetails.panNumber || !personalDetails.aadhaarNumber || !personalDetails.dateOfBirth || !personalDetails.mobileNumber || !personalDetails.email}
                  className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white px-10 py-4 rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all duration-300 shadow-lg shadow-[#2F6A9E]/30 hover:shadow-xl hover:shadow-[#2F6A9E]/40 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Assessment Year */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Select Assessment Year*</h2>
                  <p className="text-gray-500">Choose the assessment year for which you want to file your Income Tax Return</p>
                </div>
              </div>

              <div className="space-y-4">
                {assessmentYears.map((year) => (
                  <label
                    key={year.value}
                    className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      assessmentYear === year.value
                        ? 'border-[#2F6A9E] bg-gradient-to-r from-[#2F6A9E]/5 to-[#1a4a75]/5 shadow-md'
                        : 'border-gray-200 hover:border-[#2F6A9E]/50 bg-white'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      assessmentYear === year.value
                        ? 'border-[#2F6A9E] bg-[#2F6A9E]'
                        : 'border-gray-300'
                    }`}>
                      {assessmentYear === year.value && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="radio"
                      name="assessmentYear"
                      value={year.value}
                      checked={assessmentYear === year.value}
                      onChange={(e) => setAssessmentYear(e.target.value)}
                      className="sr-only"
                    />
                    <span className="ml-4 font-semibold text-gray-800 text-lg">{year.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={handleBack}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!assessmentYear}
                  className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white px-10 py-4 rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all duration-300 shadow-lg shadow-[#2F6A9E]/30 hover:shadow-xl hover:shadow-[#2F6A9E]/40 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Status Selection */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Select Status Applicable to You*</h2>
                  <p className="text-gray-500">Please select the status applicable to you to proceed further</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statusOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`relative p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      status === option.value
                        ? 'border-[#2F6A9E] bg-gradient-to-br from-[#2F6A9E]/10 to-[#1a4a75]/10 shadow-lg'
                        : 'border-gray-200 hover:border-[#2F6A9E]/50 bg-white'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-4">{option.icon}</div>
                      <div className="font-semibold text-gray-800 text-lg">{option.label}</div>
                    </div>
                    {status === option.value && (
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#2F6A9E] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    <input
                      type="radio"
                      name="status"
                      value={option.value}
                      checked={status === option.value}
                      onChange={(e) => setStatus(e.target.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={handleBack}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!status}
                  className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white px-10 py-4 rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all duration-300 shadow-lg shadow-[#2F6A9E]/30 hover:shadow-xl hover:shadow-[#2F6A9E]/40 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: ITR Form Selection */}
          {currentStep === 4 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Select ITR Form*</h2>
                    <p className="text-gray-500">You need to choose an ITR Form to proceed</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowHelpModal(true)}
                  className="flex items-center gap-2 text-[#2F6A9E] hover:text-[#1a4a75] font-semibold bg-[#2F6A9E]/10 px-4 py-2 rounded-lg hover:bg-[#2F6A9E]/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help me decide
                </button>
              </div>

              <div className="space-y-4">
                {itrForms.map((form) => (
                  <label
                    key={form.value}
                    className={`block p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedITR === form.value
                        ? 'border-[#2F6A9E] bg-gradient-to-r from-[#2F6A9E]/5 to-[#1a4a75]/5 shadow-md'
                        : 'border-gray-200 hover:border-[#2F6A9E]/50 bg-white'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all mt-1 ${
                        selectedITR === form.value
                          ? 'border-[#2F6A9E] bg-[#2F6A9E]'
                          : 'border-gray-300'
                      }`}>
                        {selectedITR === form.value && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="radio"
                        name="itrForm"
                        value={form.value}
                        checked={selectedITR === form.value}
                        onChange={(e) => setSelectedITR(e.target.value)}
                        className="sr-only"
                      />
                      <div className="ml-4 flex-1">
                        <div className="font-bold text-gray-800 text-lg mb-1">{form.label}</div>
                        <div className="text-gray-600">{form.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={handleBack}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!selectedITR}
                  className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white px-10 py-4 rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all duration-300 shadow-lg shadow-[#2F6A9E]/30 hover:shadow-xl hover:shadow-[#2F6A9E]/40 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Proceed to File
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Help Modal - Multi-step Questionnaire */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Help me decide which ITR Form to file</h3>
                <button
                  onClick={() => {
                    setShowHelpModal(false)
                    setHelpStep(1)
                    setHelpAnswers({
                      residentialStatus: '',
                      hasLTCG112A: '',
                      controlManagementOutside: '',
                      hufManagerStayDays: '',
                      hufManagerResidentYears: '',
                      isDirector: '',
                      holdsUnlistedShares: '',
                      portugueseCivilCode: '',
                      tds194N: '',
                      esopDeferredTax: '',
                      incomeExceeds50Lakh: '',
                      hasBusinessIncome: '',
                      hasSalaryIncome: '',
                      hasHouseProperty: '',
                      hasCapitalGains: '',
                      hasOtherSources: ''
                    })
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((step) => (
                  <React.Fragment key={step}>
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          helpStep >= step
                            ? 'bg-[#2F6A9E] text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {helpStep > step ? '✓' : step}
                      </div>
                      <span className={`ml-2 text-xs font-medium ${
                        helpStep >= step ? 'text-[#2F6A9E]' : 'text-gray-500'
                      }`}>
                        {step === 1 ? 'Residential' : step === 2 ? 'General' : step === 3 ? 'Business' : step === 4 ? 'Income' : 'Other'}
                      </span>
                    </div>
                    {step < 5 && (
                      <div className="flex-1 h-1 mx-2 bg-gray-200 rounded">
                        <div
                          className={`h-full rounded transition-all ${
                            helpStep > step ? 'bg-[#2F6A9E]' : 'bg-gray-200'
                          }`}
                          style={{ width: helpStep > step ? '100%' : '0%' }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="p-6">
              {/* Step 1: Residential Status */}
              {helpStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Residential Status</h4>
                    <p className="text-gray-600 mb-4">Please provide your residential status in India during the Financial Year 2025-26</p>

                    <div className="space-y-3">
                      {[
                        { value: 'ror', label: 'Resident and Ordinarily Resident (ROR)' },
                        { value: 'nor', label: 'Not Ordinarily Resident (NOR)' },
                        { value: 'nr', label: 'Non-Resident (NR)' },
                        { value: 'dontknow', label: "Don't Know" }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            helpAnswers.residentialStatus === option.value
                              ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="residentialStatus"
                            value={option.value}
                            checked={helpAnswers.residentialStatus === option.value}
                            onChange={(e) => handleHelpAnswer('residentialStatus', e.target.value)}
                            className="w-5 h-5 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                          />
                          <span className="ml-3 font-medium text-gray-800">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        if (helpAnswers.residentialStatus === 'ror') {
                          setHelpStep(1.1)
                        } else if (helpAnswers.residentialStatus === 'nor' || helpAnswers.residentialStatus === 'nr') {
                          setHelpStep(1.2)
                        } else if (helpAnswers.residentialStatus === 'dontknow') {
                          setHelpStep(1.3)
                        }
                      }}
                      disabled={!helpAnswers.residentialStatus}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1.1: LTCG Question for ROR */}
              {helpStep === 1.1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Long Term Capital Gains</h4>
                    <p className="text-gray-600 mb-4">Do you have LTCG u/s 112A more than Rs 1,25,000?</p>

                    <div className="flex gap-4">
                      {['yes', 'no'].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center px-6 py-3 border-2 rounded-xl cursor-pointer transition-all ${
                            helpAnswers.hasLTCG112A === option
                              ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="hasLTCG112A"
                            value={option}
                            checked={helpAnswers.hasLTCG112A === option}
                            onChange={(e) => handleHelpAnswer('hasLTCG112A', e.target.value)}
                            className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                          />
                          <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setHelpStep(1)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setHelpStep(2)}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1.2: NOR/NR Status Display */}
              {helpStep === 1.2 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-blue-800">Residential Status Determined</h4>
                    </div>
                    <p className="text-lg text-blue-700 mb-2">Based on the responses, you are</p>
                    <p className="text-2xl font-bold text-blue-900 mb-4">
                      {helpAnswers.residentialStatus === 'nor' ? 'Not Ordinarily Resident' : 'Non Resident'}
                    </p>
                    <p className="text-sm text-blue-600">in India during the period 1 April 2025 to 31 March 2026</p>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setHelpStep(1)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setHelpStep(2)}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1.3: Control and Management Question for Don't Know */}
              {helpStep === 1.3 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Control and Management</h4>
                    <p className="text-gray-600 mb-4">Whether the control and management of affairs was situated wholly outside India during the period 01 April 2025 to 31 March 2026?</p>

                    <div className="flex gap-4">
                      {['yes', 'no'].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center px-6 py-3 border-2 rounded-xl cursor-pointer transition-all ${
                            helpAnswers.controlManagementOutside === option
                              ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="controlManagementOutside"
                            value={option}
                            checked={helpAnswers.controlManagementOutside === option}
                            onChange={(e) => handleHelpAnswer('controlManagementOutside', e.target.value)}
                            className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                          />
                          <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setHelpStep(1)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        if (helpAnswers.controlManagementOutside === 'yes') {
                          setHelpStep(1.4)
                        } else {
                          setHelpStep(1.5)
                        }
                      }}
                      disabled={!helpAnswers.controlManagementOutside}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1.4: NR Status Display (Control Outside = Yes) */}
              {helpStep === 1.4 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-blue-800">Residential Status Determined</h4>
                    </div>
                    <p className="text-lg text-blue-700 mb-2">Based on the responses, you are</p>
                    <p className="text-2xl font-bold text-blue-900 mb-4">Non Resident</p>
                    <p className="text-sm text-blue-600">in India during the period 1 April 2025 to 31 March 2026</p>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setHelpStep(1.3)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setHelpStep(2)}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1.5: HUF Manager Stay Days Question */}
              {helpStep === 1.5 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">HUF Manager Stay Days</h4>
                    <p className="text-gray-600 mb-4">How many days the Manager of HUF has stayed in India during the period 01 April 2018 to 31 March 2025?</p>

                    <div className="space-y-3">
                      {[
                        { value: 'less730', label: 'Less than 730 days' },
                        { value: 'more730', label: '730 days or more' }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            helpAnswers.hufManagerStayDays === option.value
                              ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="hufManagerStayDays"
                            value={option.value}
                            checked={helpAnswers.hufManagerStayDays === option.value}
                            onChange={(e) => handleHelpAnswer('hufManagerStayDays', e.target.value)}
                            className="w-5 h-5 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                          />
                          <span className="ml-3 font-medium text-gray-800">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setHelpStep(1.3)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        if (helpAnswers.hufManagerStayDays === 'more730') {
                          setHelpStep(1.6)
                        } else {
                          setHelpStep(2)
                        }
                      }}
                      disabled={!helpAnswers.hufManagerStayDays}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1.6: HUF Manager Resident Years Question */}
              {helpStep === 1.6 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">HUF Manager Resident Years</h4>
                    <p className="text-gray-600 mb-4">Whether the Manager of HUF was a 'Resident' in India for any 2 financial years out of the last 10 financial years starting from Financial Year 2015-16 to Financial Year 2024-25?</p>

                    <div className="flex gap-4">
                      {['yes', 'no'].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center px-6 py-3 border-2 rounded-xl cursor-pointer transition-all ${
                            helpAnswers.hufManagerResidentYears === option
                              ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="hufManagerResidentYears"
                            value={option}
                            checked={helpAnswers.hufManagerResidentYears === option}
                            onChange={(e) => handleHelpAnswer('hufManagerResidentYears', e.target.value)}
                            className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                          />
                          <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setHelpStep(1.5)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setHelpStep(2)}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: General Information */}
              {helpStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">General Information</h4>
                    <p className="text-gray-600 mb-4">Please answer the following questions for the period 01 April 2025 to 31 March 2026</p>

                    <div className="space-y-4">
                      {[
                        { field: 'isDirector', question: 'Whether you were a Director in a company in India or outside India at any time during the period?' },
                        { field: 'holdsUnlistedShares', question: 'Whether you held equity shares in a company which is not listed in India or outside India at any time during the period?' },
                        { field: 'portugueseCivilCode', question: 'Are you governed by Portuguese Civil Code under Section 5A?' },
                        { field: 'tds194N', question: 'Do you have Tax deducted at source u/s 194N?' },
                        { field: 'esopDeferredTax', question: 'Do you have deferred tax on ESOPs received from eligible start-ups?' },
                        { field: 'incomeExceeds50Lakh', question: 'Does your total income exceed Rs. 50 Lakh for the financial year 2025-26?' }
                      ].map((item) => (
                        <div key={item.field} className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700 mb-3">{item.question}</p>
                          <div className="flex gap-4">
                            {['yes', 'no'].map((option) => (
                              <label
                                key={option}
                                className={`flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                  helpAnswers[item.field] === option
                                    ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={item.field}
                                  value={option}
                                  checked={helpAnswers[item.field] === option}
                                  onChange={(e) => handleHelpAnswer(item.field, e.target.value)}
                                  className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                                />
                                <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleHelpBack}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleHelpNext}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Business Details */}
              {helpStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Details</h4>
                    <p className="text-gray-600 mb-4">Please provide information about your business income</p>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-3">Do you have income from business or profession?</p>
                      <div className="flex gap-4">
                        {['yes', 'no'].map((option) => (
                          <label
                            key={option}
                            className={`flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                              helpAnswers.hasBusinessIncome === option
                                ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="hasBusinessIncome"
                              value={option}
                              checked={helpAnswers.hasBusinessIncome === option}
                              onChange={(e) => handleHelpAnswer('hasBusinessIncome', e.target.value)}
                              className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                            />
                            <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleHelpBack}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleHelpNext}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Income Details */}
              {helpStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Income Details</h4>
                    <p className="text-gray-600 mb-4">Please select your income sources</p>

                    <div className="space-y-3">
                      {[
                        { field: 'hasSalaryIncome', label: 'Salary Income' },
                        { field: 'hasHouseProperty', label: 'Income from House Property' },
                        { field: 'hasCapitalGains', label: 'Capital Gains' }
                      ].map((item) => (
                        <div key={item.field} className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700 mb-3">Do you have {item.label}?</p>
                          <div className="flex gap-4">
                            {['yes', 'no'].map((option) => (
                              <label
                                key={option}
                                className={`flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                  helpAnswers[item.field] === option
                                    ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={item.field}
                                  value={option}
                                  checked={helpAnswers[item.field] === option}
                                  onChange={(e) => handleHelpAnswer(item.field, e.target.value)}
                                  className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                                />
                                <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleHelpBack}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleHelpNext}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Other Sources */}
              {helpStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Other Sources</h4>
                    <p className="text-gray-600 mb-4">Please provide information about other income sources</p>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-3">Do you have income from other sources (interest, dividend, etc.)?</p>
                      <div className="flex gap-4">
                        {['yes', 'no'].map((option) => (
                          <label
                            key={option}
                            className={`flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                              helpAnswers.hasOtherSources === option
                                ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="hasOtherSources"
                              value={option}
                              checked={helpAnswers.hasOtherSources === option}
                              onChange={(e) => handleHelpAnswer('hasOtherSources', e.target.value)}
                              className="w-4 h-4 text-[#2F6A9E] border-gray-300 focus:ring-[#2F6A9E]"
                            />
                            <span className="ml-2 font-medium text-gray-800 capitalize">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleHelpBack}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setHelpStep(6)
                      }}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Get Recommendation
                    </button>
                  </div>
                </div>
              )}

              {/* Step 6: Recommendation */}
              {helpStep === 6 && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-green-800">Recommended ITR Form</h4>
                    </div>
                    <div className="text-2xl font-bold text-green-700 mb-2">{getRecommendedITR()}</div>
                    <p className="text-sm text-green-600">Based on your answers, this is the most suitable ITR form for you.</p>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleHelpBack}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setShowHelpModal(false)
                        setHelpStep(1)
                        // Auto-select the recommended form
                        const recommendation = getRecommendedITR()
                        const recommendedForm = itrForms.find(form => recommendation.includes(form.value))
                        if (recommendedForm) {
                          setSelectedITR(recommendedForm.value)
                        }
                      }}
                      className="bg-[#2F6A9E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors"
                    >
                      Select This Form
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2F6A9E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Secure & Safe</h4>
                <p className="text-sm text-gray-600">Your data is encrypted and secure</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2F6A9E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Fast Processing</h4>
                <p className="text-sm text-gray-600">Quick ITR filing with expert support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2F6A9E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Expert Support</h4>
                <p className="text-sm text-gray-600">CA assistance throughout the process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ITR
