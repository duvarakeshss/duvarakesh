import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background matching hero theme */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #111827, #0c0c1d)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#A855F7]/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[280px] aspect-square mx-auto">
              {/* Simple gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl opacity-75 blur-sm" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl" />
              <div className="relative bg-[#0c0c1d] rounded-xl p-1">
                <img 
                  src="/Duvarakesh S S.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                Passionate Developer
              </span>
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                I'm a passionate developer and a current M.Sc. Theoretical Computer Science student at PSG College of Technology. I've gained hands-on experience in building scalable, efficient, and user-centric applications.
              </p>
              <p className="text-lg text-white leading-relaxed">
                I enjoy transforming ideas into practical solutions, with a focus on performance, clarity, and user experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="/Duvarakesh S S.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-purple-400 rounded-md text-purple-400 bg-transparent hover:bg-purple-400/10 text-sm font-medium py-3 px-8 transition-all duration-300 transform hover:scale-105 shadow-sm relative overflow-hidden group text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="inline-block border border-purple-400 rounded-md text-purple-400 bg-transparent hover:bg-purple-400/10 text-sm font-medium py-3 px-8 transition-all duration-300 transform hover:scale-105 shadow-sm relative overflow-hidden group text-center backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 