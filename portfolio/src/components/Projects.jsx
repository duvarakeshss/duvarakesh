import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
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
      demo: 'https://nimora.duvarakesh.xyz/',
    },
    {
      title: 'Chess 3D',
      description: 'An immersive 3D chess game with realistic graphics and animations. Features include multiplayer support, various difficulty levels, and game analytics.',
      image: '/chess.png',
      tags: ['JavaScript', 'Three.js', 'WebGL', 'Game Development'],
      github: 'https://github.com/duvarakeshss/Chess',
      demo: 'https://chess-3d.duvarakesh.xyz/',
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

  const nextSlide = () => {
    if (currentIndex === projects.length - 1) {
      // Smoothly animate to first slide
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      // Smoothly animate to last slide
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="projects" className="py-20 bg-[#1F1F1F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3CAC]/5 to-[#00FFC6]/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#00FFC6] sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Here are some of my recent works
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Carousel Navigation */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#0D0D0D]/80 text-[#00FFC6] hover:bg-[#00FFC6]/20 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#0D0D0D]/80 text-[#00FFC6] hover:bg-[#00FFC6]/20 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Container */}
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ 
                x: `calc(-${currentIndex * 100}%)`,
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.5
              }}
            >
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="min-w-full px-4"
                >
                  <div className="bg-[#0D0D0D] rounded-lg overflow-hidden shadow-lg border border-[#00FFC6]/10 hover:border-[#00FFC6]/30 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative overflow-hidden md:w-1/2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = 'https://picsum.photos/400/300?random=' + index;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-70"></div>
                      </div>
                      <div className="p-6 md:w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-[#00FFC6] mb-4">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-sm bg-[#1F1F1F] text-[#00FFC6] rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#00FFC6] hover:text-[#00FFC6] transition-all duration-300"
                          >
                            <motion.span 
                              className="relative z-10 flex items-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub className="w-5 h-5 mr-2" />
                              GitHub
                            </motion.span>
                          </a>
                          
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#00FFC6] hover:text-[#00FFC6] transition-all duration-300"
                            >
                              <motion.span 
                                className="relative z-10 flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                                View Site
                              </motion.span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#00FFC6]' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 