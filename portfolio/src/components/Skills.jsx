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
    <section id="skills" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
              variants={categoryVariants}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center p-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    variants={skillVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Skill Icon and Name */}
                    <div className="flex items-center space-x-3">
                      <motion.div className="text-purple-400" whileHover={{ scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}>
                        {skill.icon}
                      </motion.div>
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
