import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Node.js',
      image: 'https://picsum.photos/400/300',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'An e-commerce platform with real-time inventory management',
      image: 'https://picsum.photos/400/300',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A social media dashboard with analytics and reporting',
      image: 'https://picsum.photos/400/300',
      tags: ['React', 'GraphQL', 'D3.js'],
      link: '#',
    },
  ]

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

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0D0D0D] rounded-lg overflow-hidden shadow-lg border border-[#00FFC6]/10 hover:border-[#00FFC6]/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl font-bold text-[#00FFC6] drop-shadow-lg">{project.title}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00FFC6] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#1F1F1F] text-[#00FFC6] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-[#00FFC6] hover:text-[#FF3CAC] transition-colors duration-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 