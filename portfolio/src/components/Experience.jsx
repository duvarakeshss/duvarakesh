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
        period: "May 2025 - NOV 2025",
        description: [
            "Worked as a student intern specializing in software development, building a grader control system using Kotlin in an Android environment.",
            "Involved in designing the user interface and integrating machine controls to automate grader operations.",
            "Worked on a Machine Manager system for monitoring and control of machines, focusing on cloud deployment, real-time communication, and scalable architecture."
         ],
        current: false,
        icon: "💼",
        technologies: ["Kotlin", "Android", "React", "Express", "Azure", "Firebase", "Docker"]
    },
    {
      title: "Full Stack Development Intern",
      company: "Praxio",
      location: "Coimbatore, Tamil Nadu",
      period: "May 2024 - June 2024",
      description: [
        "Worked on a Ecommerce system, focusing on real-time updates, and scalable architecture."
      ],
      current: false,
      icon: "💼",
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
                  } group`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f1419]/90 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden hover:border-[#8B5CF6]/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#A855F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-bl-full opacity-50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Subtle Lottie Animation Background */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 w-16 h-16 md:w-20 md:h-20 opacity-5 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
                      <Lottie
                        animationData={codingAnimation}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>

                    {/* Content wrapper with relative positioning */}
                    <div className="relative z-10">
                      {/* Header with icon */}
                      <div className="flex items-start gap-4 mb-5">
                        <motion.div
                          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-[#8B5CF6]/30 flex-shrink-0 group-hover:shadow-[#8B5CF6]/50 transition-shadow duration-300"
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300">
                            {exp.title}
                          </h3>
                          <div className="text-[#A855F7] text-base md:text-lg font-semibold mb-2 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm md:text-base">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-[#8B5CF6]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent mb-5"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />

                      {/* Period display */}
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <div className="flex items-center gap-2 bg-[#8B5CF6]/10 px-3 py-2 rounded-lg border border-[#8B5CF6]/20">
                          <Calendar className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                          <span className="text-gray-300 text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        {exp.current && (
                          <motion.span
                            className="inline-flex items-center px-3 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-lg shadow-lg shadow-[#8B5CF6]/30"
                            animate={{
                              boxShadow: [
                                "0 4px 14px 0 rgba(139, 92, 246, 0.3)",
                                "0 4px 20px 0 rgba(139, 92, 246, 0.6)",
                                "0 4px 14px 0 rgba(139, 92, 246, 0.3)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            ● Current Position
                          </motion.span>
                        )}
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.description.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <motion.span
                                className="text-[#8B5CF6] mr-3 mt-1 flex-shrink-0 text-lg font-bold"
                                whileHover={{ scale: 1.3, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                              >
                                ◆
                              </motion.span>
                              <span className="flex-1 group-hover/item:text-gray-200 transition-colors duration-200">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies - improved layout */}
                      <motion.div
                        className="pt-4 border-t border-[#8B5CF6]/20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1.5 bg-[#8B5CF6]/10 text-gray-300 text-xs md:text-sm font-medium rounded-lg border border-[#8B5CF6]/20 hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 hover:text-white hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05, y: -2 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
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
