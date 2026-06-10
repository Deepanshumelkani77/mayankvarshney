import React, { useState } from 'react'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors('')
    if (formData.password !== formData.confirmPassword) {
      setErrors('Passwords do not match')
      return
    }
    // Submit to API here
    console.log('Signup data:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Image/Info */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] rounded-2xl p-10 text-white">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-2">Join Mayank Varshney & Co.</h2>
            <p className="text-sm text-blue-100">Create your account to access professional financial and legal services tailored to your business needs.</p>
          </div>
          <div className="space-y-4">
            <Feature icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/></svg>} title="Expert Guidance" desc="Professional support for all your needs" />
            <Feature icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>} title="Secure Platform" desc="Your data is protected with us" />
            <Feature icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>} title="Quick Setup" desc="Get started in minutes" />
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] flex items-center justify-center text-white text-2xl font-bold">MV</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Create your account</h2>
            <p className="text-sm text-gray-600">Sign up to access expert services and support</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" placeholder="+91 99999 99999" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" placeholder="you@company.com" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" placeholder="Create password" />
                  <button type="button" onClick={() => setShowPassword(s => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">{showPassword ? 'Hide' : 'Show'}</button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Confirm</label>
                <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" placeholder="Confirm password" />
              </div>
            </div>

            {errors && <div className="text-sm text-red-600">{errors}</div>}

            <div className="flex items-start gap-2">
              <input id="terms" type="checkbox" required className="w-4 h-4 text-[#2F6A9E] border-gray-300 rounded" />
              <label htmlFor="terms" className="text-sm text-gray-600">I agree to the <a href="#" className="text-[#2F6A9E] hover:underline">Terms</a> & <a href="#" className="text-[#2F6A9E] hover:underline">Privacy</a></label>
            </div>

            <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white font-semibold shadow-lg hover:scale-[1.01] transition-transform">Create Account</button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Or continue with</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
              <svg className="w-5 h-5" viewBox="0 0 24 24"> <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/></svg>
              <span className="text-sm text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span className="text-sm text-gray-700">Facebook</span>
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="#" className="text-[#2F6A9E] font-semibold hover:underline">Sign In</a></p>
        </div>
      </div>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-blue-100">{desc}</div>
      </div>
    </div>
  )
}

export default Signup
