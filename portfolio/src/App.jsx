import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0F]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Duvarakesh | Full-Stack Developer</title>
                  <meta
                    name="description"
                    content="Portfolio of Duvarakesh S S, a passionate full-stack developer and M.Sc. Theoretical Computer Science student."
                  />
                  <link rel="canonical" href="https://duvarakesh.xyz/" />
                </Helmet>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About | Duvarakesh</title>
                  <meta name="description" content="Learn more about Duvarakesh's background and journey in computer science." />
                </Helmet>
                <div className="pt-20">
                  <About />
                </div>
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <Helmet>
                  <title>Skills | Duvarakesh</title>
                  <meta name="description" content="Technical skills of Duvarakesh including web development, algorithms, and more." />
                </Helmet>
                <div className="pt-20">
                  <Skills />
                </div>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Helmet>
                  <title>Projects | Duvarakesh</title>
                  <meta name="description" content="Explore software development projects by Duvarakesh, including full-stack apps and academic tools." />
                </Helmet>
                <div className="pt-20">
                  <Projects />
                </div>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact | Duvarakesh</title>
                  <meta name="description" content="Get in touch with Duvarakesh for collaboration, opportunities, or networking." />
                </Helmet>
                <div className="pt-20">
                  <Contact />
                </div>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
