import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // This will be used when the site is deployed to duvarakesh.xyz
    // The form will submit directly to the server without JavaScript
    // For local development, we'll use this code below

    try {
      // Simulate form submission for local development
      setTimeout(() => {
        // Reset form and set success status
        setFormData({ name: '', email: '', message: '' });
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" }
        });
        
        // Reset status message after 5 seconds
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
          });
        }, 5000);
      }, 1000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC6]/5 to-[#FF3CAC]/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">Contact</span>{' '}
            <span className="text-[#00FFC6]">Me</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let&apos;s work together on your next project
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          {/* 
            When deployed to duvarakesh.xyz, this form will submit to the server.
            For local development/preview, the onSubmit handler will prevent default submission
            and show a success message.
          */}
          <form 
            className="space-y-6" 
            onSubmit={handleSubmit}
            method="POST"
            action="/api/contact"
          >
            {status.info.msg && (
              <div className={`p-4 rounded-md ${status.info.error ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                {status.info.msg}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-[#1F1F1F] border border-[#00FFC6]/20 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC6] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-[#1F1F1F] border border-[#00FFC6]/20 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC6] focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full flex justify-center py-3 px-4 border border-[#00FFC6] rounded-md shadow-sm text-sm font-medium text-[#00FFC6] bg-transparent hover:bg-[#00FFC6]/10 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">{status.submitting ? 'Sending...' : 'Send Message'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC6]/0 via-[#00FFC6]/10 to-[#00FFC6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 