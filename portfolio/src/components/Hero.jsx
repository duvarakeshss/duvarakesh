import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="pt-20 relative overflow-hidden">
      {/* Rich dark background with subtle gradients */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[#0A0A0F]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/50 via-[#0A0A0F] to-[#16213E]/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFC6]/5 via-transparent to-[#FF3CAC]/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(0,255,198,0.03)_50%,_transparent_75%)] bg-[length:250%_250%] animate-gradient"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            <motion.span 
              className="block bg-gradient-to-r from-[#00FFC6] via-[#FF3CAC] to-[#00FFC6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x"
              variants={itemVariants}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-[#00FFC6] via-[#FF3CAC] to-[#00FFC6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x"
              variants={itemVariants}
            >
              Duvarakesh S S
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'Machine Learning Developer',
                1000,
                'Problem Solver',
                1000,
                'Creative Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-[#00FFC6] via-[#00E676] to-[#00FFC6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x font-mono tracking-wider text-xl sm:text-2xl md:text-3xl font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            Passionate about creating beautiful and functional web applications.
          </motion.p>

          <motion.div 
            className="mt-5 flex justify-center md:mt-8"
            variants={itemVariants}
          >
            <motion.div 
              className="rounded-md inline-block w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a 
                href="#contact" 
                className="flex items-center justify-center w-full px-5 py-3 border border-[#00FFC6] text-base font-medium rounded-md text-[#00FFC6] hover:bg-[#00FFC6]/10 transition-all duration-300 sm:px-8 md:py-4 md:text-lg md:px-10 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 255, 198, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC6]/0 via-[#00FFC6]/10 to-[#00FFC6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 