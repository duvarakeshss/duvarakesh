import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import Lottie from 'lottie-react'

// Lottie animation data (you can replace these with your preferred animations)
const codingAnimation = {
  v: "5.7.1",
  meta: { g: "LottieFiles AE 0.1.20" },
  fr: 30,
  ip: 0,
  op: 120,
  w: 500,
  h: 500,
  nm: "Coding Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Code Layer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [400, 300] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 10 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ],
      ip: 0,
      op: 120,
      st: 0
    }
  ]
}

const webDevAnimation = {
  v: "5.7.1",
  meta: { g: "LottieFiles AE 0.1.20" },
  fr: 30,
  ip: 0,
  op: 120,
  w: 500,
  h: 500,
  nm: "Web Dev Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Web Layer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [300, 300] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.8, 0.2, 0.4, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ],
      ip: 0,
      op: 120,
      st: 0
    }
  ]
}

const Experience = () => {
  const experiences = [
    {
        title: "Software Development Intern",
        company: "DOTWORLD TECHNOLOGIES PVT LTD",
        location: "Coimbatore, Tamil Nadu",
        period: "May 2025 - Dec 2025",
        description: [
            "Worked as a student intern specializing in software development, building a grader control system using Kotlin in an Android environment.",
            "Involved in designing the user interface and integrating machine controls to automate grader operations.",
            "Worked on a Machine Manager system for monitoring and control of machines, focusing on cloud deployment, real-time communication, and scalable architecture."
         ],
        current: true,
        icon: "💻",
        technologies: ["Kotlin", "Android", "React", "Express", "Azure", "Firebase", "Docker"]
    },
    {
      title: "Full Stack Development Intern",
      company: "Praxio",
      location: "Coimbatore, Tamil Nadu",
      period: "May 2024 - June 2024",
      description: [
        "Worked on a Machine Manager system for monitoring and control of machines, focusing on cloud deployment, real-time communication, and scalable architecture."
      ],
      current: false,
      icon: "🌐",
      technologies: ["React", "Express", "Azure", "Firebase", "Docker"]
    }
  ]

  return (
    <motion.section
      id="experience"
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #111827, #0c0c1d)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/8 via-transparent to-[#A855F7]/8" />

      {/* Floating particles - removed for professional look */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6366F1]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Experience <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Journey</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline line with animation */}
          <motion.div
            className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 bg-[#8B5CF6] h-full rounded-full shadow-lg"
            animate={{
              background: [
                "linear-gradient(to bottom, #8B5CF6, #A855F7)",
                "linear-gradient(to bottom, #A855F7, #8B5CF6)",
                "linear-gradient(to bottom, #8B5CF6, #A855F7)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
              >
                {/* Enhanced Timeline dot with Lottie */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-[#8B5CF6] rounded-full border-2 md:border-4 border-[#0c0c1d] z-10 shadow-lg flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0.4)",
                      "0 0 0 10px rgba(139, 92, 246, 0)",
                      "0 0 0 0 rgba(139, 92, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 bg-[#8B5CF6] rounded-full opacity-80"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-xs z-10">
                    {exp.icon}
                  </div>
                </motion.div>

                {/* Enhanced Content card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-5/12 w-full max-w-md mx-auto md:mx-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } bg-[#0c0c1d]/60 backdrop-blur-md border border-[#6366F1]/30 rounded-2xl p-4 md:p-8 hover:border-[#6366F1]/60 transition-all duration-300 shadow-2xl relative overflow-hidden`}
                >
                  {/* Subtle Lottie Animation Background */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 md:w-16 md:h-16 opacity-10 pointer-events-none">
                    <Lottie
                      animationData={codingAnimation}
                      loop={true}
                      autoplay={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>

                  {/* Header with icon */}
                  <div className="flex items-start justify-start mb-4 md:mb-6">
                    <div className="flex items-center space-x-3 md:space-x-4 w-full">
                      <motion.div
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center text-lg md:text-xl shadow-lg flex-shrink-0"
                      >
                        {exp.icon}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1 truncate">
                          {exp.title}
                        </h3>
                        <div className="text-white text-sm md:text-base font-bold mb-1 truncate">
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-400 text-xs md:text-sm">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Period display - responsive layout */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-[#8B5CF6] bg-[#8B5CF6]/10 rounded-full border border-[#8B5CF6]/20 self-start sm:self-center">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-4 md:mb-6">
                    <ul className="space-y-2 md:space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-[#8B5CF6] mr-2 md:mr-3 mt-1 flex-shrink-0 text-base md:text-lg">▹</span>
                          <span className="flex-1">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies - responsive layout */}
                  <motion.div
                    className="mt-4 text-sm text-gray-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      <span className="text-[#8B5CF6] font-medium mr-1">Tech:</span>
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-gray-300 hover:text-[#8B5CF6] transition-colors duration-200 cursor-pointer"
                          whileHover={{
                            color: "#A855F7",
                            textShadow: "0 0 8px rgba(139, 92, 246, 0.5)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                          {techIndex < exp.technologies.length - 1 && (
                            <span className="mx-1 text-gray-500">·</span>
                          )}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
