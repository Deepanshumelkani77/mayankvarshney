import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [showSignup, setShowSignup] = useState(false)
  const [signupMode, setSignupMode] = useState('login') // 'login' | 'signup'

  const openSignup = (mode = 'login') => {
    setSignupMode(mode)
    setShowSignup(true)
  }
  const closeSignup = () => setShowSignup(false)

  const value = {
    showSignup,
    signupMode,
    openSignup,
    closeSignup,
    setSignupMode
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export default AppContextProvider
