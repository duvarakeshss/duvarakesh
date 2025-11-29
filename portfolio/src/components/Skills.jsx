import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitAlt, FaLinux, FaWindows } from 'react-icons/fa'
import { SiCplusplus, SiPostgresql, SiMongodb, SiMysql, SiExpress, SiFastapi, SiPostman, SiTypescript, SiNodedotjs, SiDocker, SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si'
import { FaCloud } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { icon: <FaPython size={28} />, name: 'Python', level: 90 },
      { icon: <SiCplusplus size={28} />, name: 'C++', level: 85 },
      { icon: <FaJs size={28} />, name: 'JavaScript', level: 95 },
      { icon: <SiTypescript size={28} />, name: 'TypeScript', level: 88 },
      { icon: <FaJava size={28} />, name: 'Java', level: 82 },
      { icon: <SiKotlin size={28} />, name: 'Kotlin', level: 80 },
      { icon: <FaDatabase size={28} />, name: 'SQL', level: 87 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { icon: <FaReact size={28} />, name: 'React', level: 92 },
      { icon: <SiNodedotjs size={28} />, name: 'Node.js', level: 88 },
      { icon: <SiExpress size={28} />, name: 'Express.js', level: 85 },
      { icon: <SiFastapi size={28} />, name: 'FastAPI', level: 83 },
      { icon: <SiJetpackcompose size={28} />, name: 'Jetpack Compose', level: 78 },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { icon: <SiPostgresql size={28} />, name: 'PostgreSQL', level: 86 },
      { icon: <SiMongodb size={28} />, name: 'MongoDB', level: 84 },
      { icon: <SiMysql size={28} />, name: 'MySQL', level: 80 },
      { icon: <SiDocker size={28} />, name: 'Docker', level: 82 },
      { icon: <FaGitAlt size={28} />, name: 'Git', level: 90 },
      { icon: <SiPostman size={28} />, name: 'Postman', level: 88 },
  { icon: <FaCloud size={28} />, name: 'Azure', level: 75 },
      { icon: <SiFirebase size={28} />, name: 'Firebase', level: 85 },
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
        className="absolute top-20 left-10 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-[#A855F7]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative"
              variants={categoryVariants}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f1419]/90 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-[#6366F1]/20 hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl h-full">
                {/* Subtle corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent rounded-bl-full"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Category Title */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Skills List */}
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative group/skill"
                      variants={skillVariants}
                    >
                      <motion.div
                        className="flex items-center gap-3 p-3 lg:p-4 rounded-xl bg-[#8B5CF6]/5 hover:bg-[#8B5CF6]/10 border border-transparent hover:border-[#8B5CF6]/30 transition-all duration-300 cursor-pointer"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        {/* Skill Icon */}
                        <motion.div
                          className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-[#6366F1]/20 text-[#A855F7] group-hover/skill:from-[#8B5CF6]/30 group-hover/skill:to-[#6366F1]/30 group-hover/skill:shadow-lg group-hover/skill:shadow-[#8B5CF6]/30 transition-all duration-300"
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>

                        {/* Skill Name */}
                        <span className="text-gray-300 font-medium text-sm lg:text-base group-hover/skill:text-white transition-colors duration-200 flex-1">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
