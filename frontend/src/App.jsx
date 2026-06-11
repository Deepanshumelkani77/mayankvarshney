import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/Signup'
import Appointment from './pages/Appointment'


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Signup />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/appointment" element={<Appointment/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
