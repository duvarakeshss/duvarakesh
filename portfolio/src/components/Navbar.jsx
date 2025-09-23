import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Track scroll position to highlight the current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const isActive = (sectionId) => activeSection === sectionId

  const handleNavigation = (path, sectionId) => {
    setMenuOpen(false)

    // Add a subtle loading animation with enhanced feedback
    const button = document.activeElement
    if (button) {
      button.style.transform = 'scale(0.95)'
      button.style.transition = 'transform 0.15s ease'
      setTimeout(() => {
        button.style.transform = ''
      }, 150)
    }

    // Add a brief loading state
    const navElement = document.querySelector('.navbar-transition')
    if (navElement) {
      navElement.style.opacity = '0.7'
      setTimeout(() => {
        navElement.style.opacity = '1'
      }, 300)
    }

    // If we're already on the home page, just scroll to the section
    if (location.pathname === '/' && path === '/') {
      scrollToSection(sectionId)
    } else {
      // For all other cases, navigate to home page first, then scroll to section
      // This ensures we can always navigate between sections
      navigate('/')

      // Always scroll to section after navigation (since we navigate to home)
      setTimeout(() => scrollToSection(sectionId), 100)
      setTimeout(() => scrollToSection(sectionId), 300)
      setTimeout(() => scrollToSection(sectionId), 600)
    }
  }

  // Separate function for scrolling to handle timing issues
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for fixed navbar
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { path: '/', sectionId: 'home', label: 'Home' },
    { path: '/', sectionId: 'about', label: 'About' },
    { path: '/', sectionId: 'experience', label: 'Experience' },
    { path: '/', sectionId: 'skills', label: 'Skills' },
    { path: '/', sectionId: 'projects', label: 'Projects' },
    { path: '/', sectionId: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-[#0c0c1d]/90 backdrop-blur-sm z-50 navbar-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/dk-logo.svg"
                alt="DK Logo"
                className="w-10 h-10 mr-2"
              />
              <span className="text-cyan-400 text-xl font-bold relative group hidden sm:block">
                <span className="relative z-10">Duvarakesh</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-cyan-400/20 to-cyan-400/20 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.button
                key={item.sectionId}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="relative px-3 py-2 transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`relative z-10 ${isActive(item.sectionId) ? 'text-cyan-400 font-medium' : 'text-slate-300 hover:text-cyan-400 transition-colors'}`}>
                  {item.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: isActive(item.sectionId) ? 1 : 0,
                    opacity: isActive(item.sectionId) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    opacity: 0.7,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute inset-0 bg-cyan-400/5 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive(item.sectionId) ? 0.1 : 0
                  }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-300 hover:text-cyan-400 focus:outline-none p-2 rounded-md hover:bg-cyan-400/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0c0c1d]/95 backdrop-blur-sm px-4 py-4 space-y-2"
        >
          {navLinks.map((item) => (
            <motion.button
              key={item.sectionId}
              onClick={() => handleNavigation(item.path, item.sectionId)}
              className="block w-full text-left px-4 py-3 rounded-md relative overflow-hidden"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className={`relative z-10 ${isActive(item.sectionId) ? 'text-cyan-400' : 'text-slate-300'}`}>
                {item.label}
              </span>
              <motion.span 
                className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: isActive(item.sectionId) ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute inset-0 bg-cyan-400/5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive(item.sectionId) ? 0.1 : 0
                }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
