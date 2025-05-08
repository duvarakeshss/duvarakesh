import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0F]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/about" element={
            <div className="pt-20">
              <About />
            </div>
          } />
          <Route path="/skills" element={
            <div className="pt-20">
              <Skills />
            </div>
          } />
          <Route path="/projects" element={
            <div className="pt-20">
              <Projects />
            </div>
          } />
          <Route path="/contact" element={
            <div className="pt-20">
              <Contact />
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App