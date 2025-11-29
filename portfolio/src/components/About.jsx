import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #111827, #0c0c1d)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/8 via-transparent to-[#A855F7]/8" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            About <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center group"
          >
            <div className="relative w-full max-w-[320px] aspect-square mx-auto">
              {/* Animated gradient glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-75 blur-2xl transition-opacity duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f1419]/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-[#6366F1]/30 group-hover:border-[#8B5CF6]/60 transition-all duration-500">
                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8B5CF6]/30 to-transparent rounded-tr-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img 
                  src="/Duvarakesh S S.jpg" 
                  alt="Profile" 
                  className="relative w-full h-full object-cover rounded-xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Content card with gradient border */}
            <div className="relative group">
              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f1419]/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#6366F1]/20 hover:border-[#8B5CF6]/50 transition-all duration-500">
                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-tr-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="space-y-6 relative z-10">
                  <motion.h3
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                      Passionate Developer
                    </span>
                  </motion.h3>
                  
                  {/* Divider */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-[#6366F1]/50 via-[#8B5CF6]/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                  
                  <div className="space-y-4">
                    <motion.p
                      className="text-base text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      I'm a passionate developer and a current M.Sc. Theoretical Computer Science student at PSG College of Technology. I've gained hands-on experience in building scalable, efficient, and user-centric applications.
                    </motion.p>
                    <motion.p
                      className="text-base text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      I enjoy transforming ideas into practical solutions, with a focus on performance, clarity, and user experience.
                    </motion.p>
                  </div>
                  
                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="/Duvarakesh S S.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-gray-300 hover:text-white text-sm font-medium rounded-xl border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </motion.a>
                    
                    <motion.a
                      href="#contact"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#A855F7] hover:to-[#8B5CF6] text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Me
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 