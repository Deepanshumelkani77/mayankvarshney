
import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Signup = () => {
  const { showSignup, signupMode, closeSignup, setSignupMode } = useContext(AppContext)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [signupData, setSignupData] = useState({ fullName: '', email: '', phone: '', password: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!showSignup) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [showSignup])

  if (!showSignup) return null

  const close = () => closeSignup()

  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })
  const handleSignupChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value })

  const submitLogin = (e) => {
    e.preventDefault()
    setError('')
    // TODO: call API
    console.log('login', loginData)
  }

  const submitSignup = (e) => {
    e.preventDefault()
    setError('')
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    // TODO: call API
    console.log('signup', signupData)
  }

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop with blur */}
			<div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={close}></div>

			{/* Modal */}
			<div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
				{/* Left - marketing / toggle */}
				<div className="hidden md:flex flex-col bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] text-white p-8 gap-6">
					<div className="flex-1">
						<h2 className="text-2xl font-semibold mb-2">Welcome to Mayank Varshney & Co.</h2>
						<p className="text-sm text-blue-100">Professional accounting, taxation and legal services tailored for you.</p>
					</div>
					<div className="space-y-3">
						<Feature icon="✓" title="Expert Team" />
						<Feature icon="✓" title="Secure & Reliable" />
						<Feature icon="✓" title="Fast Onboarding" />
					</div>
				</div>

				{/* Right - forms */}
				<div className="p-6 md:p-8">
					<div className="flex items-start justify-between mb-6">
						<div>
							<h2 className="text-2xl font-semibold text-gray-800">{signupMode === 'login' ? 'Sign in to your account' : 'Create your account'}</h2>
							<p className="text-sm text-gray-500 mt-1">{signupMode === 'login' ? 'Enter credentials to access your account securely.' : 'Fill the details below to create your account.'}</p>
						</div>
						<button onClick={close} aria-label="Close" className="text-gray-400 hover:text-gray-600">✕</button>
					</div>

					  {signupMode === 'login' ? (
						<form onSubmit={submitLogin} className="space-y-4">
							<div>
								<label className="block text-sm text-gray-600 mb-1">Email</label>
								<input name="email" value={loginData.email} onChange={handleLoginChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-600 mb-1">Password</label>
								<div className="relative">
									<input name="password" type={showPassword ? 'text' : 'password'} value={loginData.password} onChange={handleLoginChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
									<button type="button" onClick={() => setShowPassword(s => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">{showPassword ? 'Hide' : 'Show'}</button>
								</div>
							</div>
							{error && <div className="text-sm text-red-600">{error}</div>}
							<button type="submit" className="w-full py-2 rounded-md bg-[#2F6A9E] text-white font-semibold">Login</button>
							  <div className="text-center text-sm text-gray-600">Don't have an account? <button type="button" onClick={() => setSignupMode('signup')} className="text-[#2F6A9E] font-semibold">Sign up</button></div>
						</form>
					) : (
						<form onSubmit={submitSignup} className="space-y-4">
							<div>
								<label className="block text-sm text-gray-600 mb-1">Full name</label>
								<input name="fullName" value={signupData.fullName} onChange={handleSignupChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-600 mb-1">Email</label>
								<input name="email" type="email" value={signupData.email} onChange={handleSignupChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-600 mb-1">Phone</label>
								<input name="phone" value={signupData.phone} onChange={handleSignupChange} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-600 mb-1">Password</label>
								<input name="password" type={showPassword ? 'text' : 'password'} value={signupData.password} onChange={handleSignupChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-600 mb-1">Confirm password</label>
								<input name="confirmPassword" type={showPassword ? 'text' : 'password'} value={signupData.confirmPassword} onChange={handleSignupChange} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#2F6A9E] outline-none" />
								<div className="text-right mt-1">
									<button type="button" onClick={() => setShowPassword(s => !s)} className="text-sm text-gray-500">{showPassword ? 'Hide' : 'Show'}</button>
								</div>
							</div>
							{error && <div className="text-sm text-red-600">{error}</div>}
							<button type="submit" className="w-full py-2 rounded-md bg-[#2F6A9E] text-white font-semibold">Create account</button>
							  <div className="text-center text-sm text-gray-600">Already have an account? <button type="button" onClick={() => setSignupMode('login')} className="text-[#2F6A9E] font-semibold">Sign in</button></div>
						</form>
					)}
				</div>
			</div>
		</div>
	)
}

function Feature({ icon, title }) {
	return (
		<div className="flex items-center gap-3">
			<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white text-sm">{icon}</div>
			<div className="text-sm text-white">{title}</div>
		</div>
	)
}

export default Signup
