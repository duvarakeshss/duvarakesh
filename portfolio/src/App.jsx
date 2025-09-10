import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0F]">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}

// Separate component to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition key={`home-${Date.now()}`}>
              <Helmet>
                <title>Duvarakesh</title>
                <meta
                  name="description"
                  content="Portfolio of Duvarakesh S S, a passionate full-stack developer and M.Sc. Theoretical Computer Science student."
                />
                <link rel="canonical" href="https://duvarakesh.xyz/" />
                <link rel="alternate" href="https://duvarakesh.tech/" hreflang="en" />
                <link rel="alternate" href="https://dktech.app/" hreflang="en" />
                <link rel="alternate" href="https://dk05.me/" hreflang="en" />
              </Helmet>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition key={`about-${Date.now()}`}>
              <Helmet>
                <title>About | Duvarakesh</title>
                <meta name="description" content="Learn more about Duvarakesh's background and journey in computer science." />
                <link rel="canonical" href="https://duvarakesh.xyz/about" />
                <link rel="alternate" href="https://duvarakesh.tech/about" hreflang="en" />
                <link rel="alternate" href="https://dktech.app/about" hreflang="en" />
                <link rel="alternate" href="https://dk05.me/about" hreflang="en" />
              </Helmet>
              <div className="pt-20">
                <About />
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition key={`experience-${Date.now()}`}>
              <Helmet>
                <title>Experience | Duvarakesh</title>
                <meta name="description" content="Professional experience and academic background of Duvarakesh." />
                <link rel="canonical" href="https://duvarakesh.xyz/experience" />
                <link rel="alternate" href="https://duvarakesh.tech/experience" hreflang="en" />
                <link rel="alternate" href="https://dktech.app/experience" hreflang="en" />
                <link rel="alternate" href="https://dk05.me/experience" hreflang="en" />
              </Helmet>
              <div className="pt-20">
                <Experience />
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition key={`skills-${Date.now()}`}>
              <Helmet>
                <title>Skills | Duvarakesh</title>
                <meta name="description" content="Technical skills of Duvarakesh including web development, algorithms, and more." />
                <link rel="canonical" href="https://duvarakesh.xyz/skills" />
                <link rel="alternate" href="https://duvarakesh.tech/skills" hreflang="en" />
                <link rel="alternate" href="https://dktech.app/skills" hreflang="en" />
                <link rel="alternate" href="https://dk05.me/skills" hreflang="en" />
              </Helmet>
              <div className="pt-20">
                <Skills />
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition key={`projects-${Date.now()}`}>
              <Helmet>
                <title>Projects | Duvarakesh</title>
                <meta name="description" content="Explore software development projects by Duvarakesh, including full-stack apps and academic tools." />
                <link rel="canonical" href="https://duvarakesh.xyz/projects" />
                <link rel="alternate" href="https://duvarakesh.tech/projects" hreflang="en" />
                <link rel="alternate" href="https://dktech.app/projects" hreflang="en" />
                <link rel="alternate" href="https://dk05.me/projects" hreflang="en" />
              </Helmet>
              <div className="pt-20">
                <Projects />
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition key={`contact-${Date.now()}`}>
              <Helmet>
                <title>Contact | Duvarakesh</title>
                <meta name="description" content="Get in touch with Duvarakesh for collaboration, opportunities, or networking." />
                <link rel="canonical" href="https://duvarakesh.xyz/contact" />
                <link rel="alternate" href="https://duvarakesh.tech/contact" hreflang="en" />
                <link rel="alternate" href="https://dktech.app/contact" hreflang="en" />
                <link rel="alternate" href="https://dk05.me/contact" hreflang="en" />
              </Helmet>
              <div className="pt-20">
                <Contact />
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
