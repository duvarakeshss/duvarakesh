import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

    const formUrl = `https://formsubmit.co/${encodeURIComponent("duvarakesh05@gmail.com")}`;

    try {
      // Create a hidden form element to submit the data
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = '_blank';
      form.style.display = 'none';

      // Add each field to the form
      const nameField = document.createElement('input');
      nameField.name = 'name';
      nameField.value = formData.name;
      form.appendChild(nameField);

      const emailField = document.createElement('input');
      emailField.name = 'email';
      emailField.value = formData.email;
      form.appendChild(emailField);

      const messageField = document.createElement('input');
      messageField.name = 'message';
      messageField.value = formData.message;
      form.appendChild(messageField);

      // Add a redirect URL to come back to the site
      const redirectField = document.createElement('input');
      redirectField.name = '_next';
      redirectField.value = window.location.href;
      form.appendChild(redirectField);

      // Append form to body, submit it, and remove it
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

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

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
        className="absolute top-20 left-1/4 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 12,
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
            Get in <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Touch</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          className="mt-0 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Card wrapper with gradient glow */}
          <div className="relative group">
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f1419]/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#6366F1]/20 hover:border-[#8B5CF6]/50 transition-all duration-500">
              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-bl-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            {status.info.msg && (
              <motion.div
                className={`p-4 rounded-xl border ${
                  status.info.error
                    ? 'bg-red-500/10 border-red-500/30 text-red-300'
                    : 'bg-green-500/10 border-green-500/30 text-green-300'
                } backdrop-blur-sm`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status.info.msg}
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full bg-[#0c0c1d]/50 border border-[#6366F1]/20 rounded-xl shadow-sm py-3 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all duration-300 hover:border-[#8B5CF6]/40"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full bg-[#0c0c1d]/50 border border-[#6366F1]/20 rounded-xl shadow-sm py-3 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all duration-300 hover:border-[#8B5CF6]/40"
                placeholder="your.email@example.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full bg-[#0c0c1d]/50 border border-[#6366F1]/20 rounded-xl shadow-sm py-3 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all duration-300 hover:border-[#8B5CF6]/40 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                disabled={status.submitting}
                className="w-full flex justify-center items-center py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#A855F7] hover:to-[#8B5CF6] shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                whileHover={{ scale: status.submitting ? 1 : 1.02, y: -2 }}
                whileTap={{ scale: status.submitting ? 1 : 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status.submitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>
            </motion.div>
          </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 