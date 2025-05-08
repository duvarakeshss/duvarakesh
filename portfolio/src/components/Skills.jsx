import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaPython, FaCuttlefish, FaJs, FaJava, FaDatabase, FaReact, FaGitAlt, FaLinux, FaWindows } from 'react-icons/fa'
import { SiCplusplus, SiPostgresql, SiMongodb, SiMysql, SiExpress, SiFastapi, SiPostman, SiSwagger } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { icon: <FaPython size={38} />, name: 'Python' },
      { icon: <SiCplusplus size={38} />, name: 'C++' },
      { icon: <FaCuttlefish size={38} />, name: 'C' },
      { icon: <FaJs size={38} />, name: 'JavaScript' },
      { icon: <FaDatabase size={38} />, name: 'SQL' },
      { icon: <FaJava size={38} />, name: 'Java' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { icon: <FaReact size={38} />, name: 'React' },
      { icon: <SiExpress size={38} />, name: 'Express.js' },
      { icon: <SiFastapi size={38} />, name: 'FastAPI' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { icon: <SiPostgresql size={38} />, name: 'PostgreSQL' },
      { icon: <SiMongodb size={38} />, name: 'MongoDB' },
      { icon: <SiMysql size={38} />, name: 'MySQL' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { icon: <FaGitAlt size={38} />, name: 'Git' },
      { icon: <SiPostman size={38} />, name: 'Postman' },
      { icon: <SiSwagger size={38} />, name: 'Swagger' },
      { icon: <FaLinux size={38} />, name: 'Linux' },
      { icon: <FaWindows size={38} />, name: 'Windows' },
    ],
  },
]

const allSkills = skillCategories.flatMap(cat => cat.skills)

const Skills = () => {
  const cardsRef = useRef([])
  const categoryRefs = useRef([])
  const floatingTweens = useRef([])
  const cardSkillMap = useRef([])
  const scrollTimeout = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    categoryRefs.current.forEach((cat, i) => {
      gsap.fromTo(cat,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.2
        }
      )
    })

    floatingTweens.current = []
    cardSkillMap.current = []
    let skillIdx = 0
    skillCategories.forEach((cat, catIdx) => {
      const indices = []
      cat.skills.forEach((_, i) => {
        const card = cardsRef.current[skillIdx]
        gsap.set(card, {
          y: 0,
          opacity: 0,
          scale: 0.8
        })
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: skillIdx * 0.07
        })
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.15,
            boxShadow: `0 0 32px #00FFC6, 0 0 64px #FF3CAC33`,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          })
        })
        indices.push(skillIdx)
        skillIdx++
      })
      cardSkillMap.current[catIdx] = indices
    })

    const pauseFloating = () => {
      floatingTweens.current.forEach(tween => tween.timeScale(0))
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        floatingTweens.current.forEach(tween => tween.timeScale(1))
      }, 250)
    }
    window.addEventListener('scroll', pauseFloating, { passive: true })

    categoryRefs.current.forEach((cat, catIdx) => {
      const indices = cardSkillMap.current[catIdx]
      if (!cat) return
      cat.addEventListener('mouseenter', () => {
        indices.forEach(idx => floatingTweens.current[idx]?.timeScale(0))
      })
      cat.addEventListener('mouseleave', () => {
        indices.forEach(idx => floatingTweens.current[idx]?.timeScale(1))
      })
    })

    return () => {
      cardsRef.current.forEach(card => {
        card?.removeEventListener('mouseenter', () => {})
        card?.removeEventListener('mouseleave', () => {})
      })
      window.removeEventListener('scroll', pauseFloating)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      categoryRefs.current.forEach((cat, catIdx) => {
        if (!cat) return
        cat.removeEventListener('mouseenter', () => {})
        cat.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  let flatIndex = 0

  return (
    <section id="skills" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC6]/5 to-[#FF3CAC]/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#00FFC6] sm:text-4xl">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              ref={el => categoryRefs.current[catIdx] = el}
              className="bg-[#18181c] rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-[#00FFC6]/10 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_32px_#00FFC6,0_0_64px_#FF3CAC33] hover:border-[#00FFC6]/60"
            >
              <h3 className="text-lg font-bold mb-6 text-center tracking-wide uppercase letter-spacing-wide bg-gradient-to-r from-cyan-400 via-green-400 to-lime-400 text-transparent bg-clip-text">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full justify-items-center">
                {category.skills.map((skill) => {
                  const refIndex = flatIndex++
                  return (
                    <div
                      key={skill.name}
                      ref={el => cardsRef.current[refIndex] = el}
                      className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 cursor-pointer relative group bg-[#1F1F1F]"
                    >
                      <span className="text-white">{skill.icon}</span>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none">
                        <span className="text-sm font-semibold text-[#00FFC6] drop-shadow-lg text-center px-2">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
