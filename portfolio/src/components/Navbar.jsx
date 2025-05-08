import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const handleNavigation = (path, sectionId) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const navLinks = [
    { path: '/', sectionId: 'home', label: 'Home' },
    { path: '/about', sectionId: 'about', label: 'About' },
    { path: '/skills', sectionId: 'skills', label: 'Skills' },
    { path: '/projects', sectionId: 'projects', label: 'Projects' },
    { path: '/contact', sectionId: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-[#1F1F1F]/90 backdrop-blur-sm z-50 border-b border-[#00FFC6]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-[#00FFC6] text-xl font-bold relative group">
              <span className="relative z-10">Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFC6]/20 via-[#39FF14]/20 to-[#00FFC6]/20 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className={`relative px-3 py-2 text-gray-300 hover:text-[#39FF14] transition-colors duration-300 ${
                  isActive(item.path) ? 'text-[#39FF14]' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00FFC6] via-[#39FF14] to-[#00FFC6]"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: isActive(item.path) ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                  whileHover={{ scaleX: 1 }}
                />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#00FFC6]/10 via-[#39FF14]/10 to-[#00FFC6]/10 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-[#39FF14] focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div className="md:hidden bg-[#1F1F1F]/95 border-t border-[#00FFC6]/10 px-4 py-4 space-y-4">
          {navLinks.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path, item.sectionId)}
              className={`block w-full text-left px-3 py-2 text-gray-300 hover:text-[#39FF14] transition-colors duration-300 ${
                isActive(item.path) ? 'text-[#39FF14]' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
