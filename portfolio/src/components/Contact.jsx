import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC6]/5 to-[#FF3CAC]/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#00FFC6] sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let&apos;s work together on your next project
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-[#1F1F1F] border border-[#00FFC6]/20 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC6] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-[#1F1F1F] border border-[#00FFC6]/20 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC6] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full bg-[#1F1F1F] border border-[#00FFC6]/20 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC6] focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-[#00FFC6] rounded-md shadow-sm text-sm font-medium text-[#00FFC6] bg-transparent hover:bg-[#00FFC6] hover:text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FFC6] transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 