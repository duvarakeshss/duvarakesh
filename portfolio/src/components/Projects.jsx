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
    <section id="projects" className="py-12 sm:py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold lg:text-4xl">
            <span className="text-white">My</span>{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 px-4">
            Here are some of my recent works
          </p>
        </div>

        <div className="mt-8 sm:mt-16">
          {/* Projects Grid - Optimized for Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 active:scale-95 sm:active:scale-100">
                  {/* Image Container - Responsive Height */}
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://picsum.photos/400/300?random=' + index;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>

                    {/* Overlay Content - Mobile Optimized */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 transition-all duration-300 bg-slate-950/80 backdrop-blur-sm p-4">
                      <div className="text-center px-2 sm:px-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex justify-center space-x-3 sm:space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-purple-500/20 rounded-full text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 active:scale-90"
                          >
                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 sm:p-3 bg-purple-500/20 rounded-full text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 active:scale-90"
                            >
                              <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Mobile Optimized */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags - Mobile Optimized */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-slate-700 text-purple-300 rounded-full border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-slate-700 text-gray-400 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links - Mobile Optimized */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start active:scale-95"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start active:scale-95"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </a>
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