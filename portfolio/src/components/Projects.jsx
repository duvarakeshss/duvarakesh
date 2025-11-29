import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Academia',
      description: 'Built a platform for student-faculty communication. Enabled assignment uploads, resource sharing, and submission tracking.',
      image: '/academia.png',
      tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/duvarakeshss/Academia',
      demo: 'https://academia.duvarakesh.xyz/',
    },
    {
      title: 'Nimora',
      description: 'A modern web application designed to help students track their attendance, view exam schedules, and monitor academic performance.',
      image: '/nimora.png',
      tags: ['JavaScript', 'React', 'FastAPI'],
      github: 'https://github.com/duvarakeshss/Nimora',
      demo: 'https://nimora.dktech.app/',
    },
    {
      title: 'ChessMaster',
      description: 'An immersive 3D chess game with realistic graphics and animations. Features include multiplayer support, various difficulty levels, and game analytics.',
      image: '/chess.png',
      tags: ['JavaScript', 'Three.js', 'WebGL'],
      github: 'https://github.com/duvarakeshss/Chess',
      demo: 'https://chessmaster.dktech.app/',
    },
    {
      title: 'Multi Agent Seo Generator',
      description: 'AI-powered SEO Blog Generator utilizing Google search for research, Mistral-7B for outline creation, and LLaMA-3 via Groq API for content generation.',
      image: '/multiagent.png',
      tags: ['Python', 'AI' , 'ML'],
      github: 'https://github.com/duvarakeshss/Multi-Agent-Seo-Generator',
      demo: null,
    },
    {
      title: 'CapitalGuard',
      description: 'Finance management and stock analysis platform designed to help users make informed financial decisions based on market trends and personal investment goals.',
      image: '/capitalguard.png',
      tags: ['Java' , 'Data Analysis'],
      github: 'https://github.com/duvarakeshss/CapitalGuard',
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 relative overflow-hidden">
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
        className="absolute top-40 right-20 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-72 h-72 bg-[#A855F7]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="mt-4 text-base sm:text-lg text-gray-400 px-4 max-w-2xl mx-auto">
            A showcase of my latest work combining innovation, design, and technology
          </p>
        </motion.div>

        <div className="mt-0">
          {/* Projects Grid - Optimized for Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f1419]/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-[#6366F1]/20 hover:border-[#8B5CF6]/50 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container - Responsive Height */}
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'https://picsum.photos/400/300?random=' + index;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] via-[#0c0c1d]/50 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Overlay Content - Mobile Optimized */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0c0c1d]/95 backdrop-blur-md p-4">
                      <div className="text-center px-2 sm:px-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <motion.h3
                          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="flex justify-center space-x-4">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-br from-[#8B5CF6]/30 to-[#6366F1]/30 rounded-xl text-white hover:from-[#8B5CF6]/50 hover:to-[#6366F1]/50 transition-all duration-300 shadow-lg hover:shadow-[#8B5CF6]/50"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="w-5 h-5" />
                          </motion.a>
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gradient-to-br from-[#8B5CF6]/30 to-[#6366F1]/30 rounded-xl text-white hover:from-[#8B5CF6]/50 hover:to-[#6366F1]/50 transition-all duration-300 shadow-lg hover:shadow-[#8B5CF6]/50"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Mobile Optimized */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    {/* Divider */}
                    <motion.div
                      className="h-px bg-gradient-to-r from-[#6366F1]/50 via-[#8B5CF6]/50 to-transparent mb-3"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                    
                    <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Tags - Mobile Optimized */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium bg-[#8B5CF6]/10 text-gray-300 rounded-lg border border-[#8B5CF6]/20 hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 hover:text-white transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1.5 text-xs font-medium bg-[#8B5CF6]/5 text-gray-400 rounded-lg border border-[#8B5CF6]/10">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links - Mobile Optimized */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-[#8B5CF6]/20">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-gray-300 hover:text-white text-sm font-medium rounded-lg border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="w-4 h-4" />
                        View Code
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#A855F7] hover:to-[#8B5CF6] text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300"
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 