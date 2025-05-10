import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const imageRef = useRef(null)
  const borderRef = useRef(null)
  const glowRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Image entrance animation
    gsap.fromTo(imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -5
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Content animation
    gsap.fromTo(contentRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Border animation
    gsap.fromTo(borderRef.current,
      {
        width: 0,
        opacity: 0
      },
      {
        width: 4,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: borderRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Glow animation
    gsap.fromTo(glowRef.current,
      {
        opacity: 0,
        scale: 0.9
      },
      {
        opacity: 0.3,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: glowRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Hover animations
    const image = imageRef.current
    const border = borderRef.current
    const glow = glowRef.current

    image.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(border, {
        width: 8,
        boxShadow: "0 0 20px #39FF14",
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(glow, {
        opacity: 0.6,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      })
    })

    image.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(border, {
        width: 4,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(glow, {
        opacity: 0.3,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    })

    return () => {
      image.removeEventListener('mouseenter', () => {})
      image.removeEventListener('mouseleave', () => {})
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-[#00FFC6]">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative flex justify-center">
            <div 
              ref={imageRef}
              className="relative w-full max-w-[250px] aspect-square mx-auto"
            >
              <div 
                ref={glowRef}
                className="absolute -inset-1 bg-gradient-to-r from-[#FF3CAC] via-[#00FFC6] to-[#00FFC6] rounded-lg blur-md opacity-30"
              />
              <div 
                ref={borderRef}
                className="absolute -left-1 top-0 bottom-0 bg-gradient-to-b from-[#00FFC6] to-[#00FFC6] rounded-l-lg"
              />
              <div className="absolute inset-0 bg-[#00FFC6]/10 rounded-lg" />
              <img 
                src="/Duvarakesh S S.jpg" 
                alt="Profile" 
                className="relative w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 ref={titleRef} className="text-3xl font-bold">
              <span className="text-[#00FFC6]">
                Full Stack Developer
              </span>
            </h3>
            <div ref={contentRef} className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                I'm a passionate full-stack developer and a current M.Sc. Theoretical Computer Science student at PSG College of Technology. With a strong foundation in both front-end and back-end development, I've gained hands-on experience in building scalable, efficient, and user-centric applications.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                I enjoy transforming ideas into practical solutions, with a focus on performance, clarity, and user experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                className="rounded-md inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="/Duvarakesh S S.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 border border-[#00FFC6] text-base font-medium rounded-md text-[#00FFC6] hover:bg-[#00FFC6]/10 transition-all duration-300 sm:px-8 md:py-4 md:text-lg md:px-10 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 255, 198, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC6]/0 via-[#00FFC6]/10 to-[#00FFC6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.a>
              </motion.div>
              
              <motion.div
                className="rounded-md inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="#contact"
                  className="flex items-center justify-center px-6 py-3 border border-[#00FFC6] text-base font-medium rounded-md text-[#00FFC6] hover:bg-[#00FFC6]/10 transition-all duration-300 sm:px-8 md:py-4 md:text-lg md:px-10 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 255, 198, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC6]/0 via-[#00FFC6]/10 to-[#00FFC6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 