import React, { Suspense, useRef, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text, Sphere, Box, Torus, Ring, Octahedron, Icosahedron, Stars } from '@react-three/drei'
import * as THREE from 'three'

const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  // Ensure component is mounted on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Matrix Rain Effect
  const MatrixRain = ({ position }) => {
    const meshRef = useRef()
    const [codeLines] = useState([
      'const dev = new Developer()',
      'function solve(problem) {',
      'class Portfolio extends React.Component {',
      'npm install creativity',
      'git commit -m "innovation"',
      'while(coding) { create() }',
      'if(success) { celebrate() }',
      'console.log("Hello World")',
      'return awesome;',
      'deploy && scale'
    ])
    
    useFrame((state) => {
      meshRef.current.position.y -= 0.02
      if (meshRef.current.position.y < -5) {
        meshRef.current.position.y = 5
        meshRef.current.position.x = (Math.random() - 0.5) * 8
      }
    })

    return (
      <Text
        ref={meshRef}
        position={position}
        fontSize={0.08}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
        opacity={0.7}
      >
        {codeLines[Math.floor(Math.random() * codeLines.length)]}
      </Text>
    )
  }

  // Typing Code Animation
  const TypingCode = ({ position }) => {
    const meshRef = useRef()
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const codeSnippet = 'function createMagic() {\n  const innovation = true;\n  return innovation;\n}'

    useFrame((state) => {
      if (currentIndex < codeSnippet.length) {
        setCurrentIndex(prev => prev + 1)
        setCurrentText(codeSnippet.slice(0, currentIndex + 1))
      } else if (Math.random() < 0.01) {
        setCurrentIndex(0)
        setCurrentText('')
      }
    })

    return (
      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.5}>
        <Text
          ref={meshRef}
          position={position}
          fontSize={0.06}
          color="#3b82f6"
          anchorX="left"
          anchorY="top"
          maxWidth={2}
        >
          {currentText}
        </Text>
      </Float>
    )
  }

  // Data Flow Animation
  const DataFlow = ({ startPosition, endPosition }) => {
    const meshRef = useRef()
    
    useFrame((state) => {
      const time = state.clock.elapsedTime
      const progress = (Math.sin(time * 2) + 1) / 2
      meshRef.current.position.lerpVectors(
        new THREE.Vector3(...startPosition),
        new THREE.Vector3(...endPosition),
        progress
      )
    })

    return (
      <Sphere ref={meshRef} args={[0.03]}>
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </Sphere>
    )
  }

  // Git Branch Visualization
  const GitBranch = ({ position }) => {
    const groupRef = useRef()
    
    useFrame((state) => {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    })

    return (
      <Float speed={0.6} rotationIntensity={0.3} floatIntensity={0.8}>
        <group ref={groupRef} position={position}>
          {/* Main branch */}
          <Box args={[0.05, 1, 0.05]}>
            <meshStandardMaterial color="#1d4ed8" emissive="#2563eb" emissiveIntensity={0.1} />
          </Box>
          {/* Branch commits */}
          {Array.from({ length: 3 }, (_, i) => (
            <Sphere key={i} position={[0.1, 0.3 - i * 0.3, 0]} args={[0.08]}>
              <meshStandardMaterial color="#3b82f6" emissive="#60a5fa" emissiveIntensity={0.2} />
            </Sphere>
          ))}
          {/* Branch label */}
          <Text
            position={[0.3, 0.5, 0]}
            fontSize={0.08}
            color="#60a5fa"
            anchorX="left"
            anchorY="middle"
          >
            main
          </Text>
        </group>
      </Float>
    )
  }

  // Algorithm Visualization
  const AlgorithmViz = ({ position }) => {
    const groupRef = useRef()
    const [step, setStep] = useState(0)
    
    useFrame((state) => {
      if (Math.floor(state.clock.elapsedTime * 2) % 4 !== step) {
        setStep(Math.floor(state.clock.elapsedTime * 2) % 4)
      }
    })

    const nodes = [
      { pos: [-0.5, 0.5, 0], active: step === 0 },
      { pos: [0.5, 0.5, 0], active: step === 1 },
      { pos: [-0.5, -0.5, 0], active: step === 2 },
      { pos: [0.5, -0.5, 0], active: step === 3 }
    ]

    return (
      <Float speed={0.4} rotationIntensity={0.2} floatIntensity={0.6}>
        <group ref={groupRef} position={position}>
          {nodes.map((node, i) => (
            <Sphere key={i} position={node.pos} args={[0.06]}>
              <meshStandardMaterial
                color={node.active ? "#60a5fa" : "#1d4ed8"}
                emissive={node.active ? "#3b82f6" : "#2563eb"}
                emissiveIntensity={node.active ? 0.4 : 0.1}
              />
            </Sphere>
          ))}
          {/* Connections */}
          <Box args={[0.8, 0.02, 0.02]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#2563eb" opacity={0.3} transparent />
          </Box>
          <Box args={[0.02, 0.8, 0.02]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#2563eb" opacity={0.3} transparent />
          </Box>
        </group>
      </Float>
    )
  }

  // Circuit Ring Component
  const CircuitRing = ({ position, radius = 1, speed = 1 }) => {
    const meshRef = useRef()
    
    useFrame((state) => {
      meshRef.current.rotation.z = state.clock.elapsedTime * speed
    })

    return (
      <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Ring
          ref={meshRef}
          position={position}
          args={[radius * 0.8, radius, 32]}
        >
          <meshStandardMaterial
            color="#3b82f6"
            wireframe
            emissive="#1d4ed8"
            emissiveIntensity={0.1}
          />
        </Ring>
      </Float>
    )
  }

  // Code Structure Component
  const CodeStructure = ({ position }) => {
    const groupRef = useRef()
    
    useFrame((state) => {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    })

    return (
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1.2}>
        <group ref={groupRef} position={position}>
          {/* Main structure */}
          <Box args={[0.3, 1.5, 0.1]}>
            <meshStandardMaterial color="#2563eb" wireframe />
          </Box>
          {/* Side elements */}
          <Box position={[-0.2, 0.5, 0]} args={[0.1, 0.3, 0.1]}>
            <meshStandardMaterial color="#1d4ed8" wireframe />
          </Box>
          <Box position={[0.2, -0.3, 0]} args={[0.1, 0.3, 0.1]}>
            <meshStandardMaterial color="#1d4ed8" wireframe />
          </Box>
        </group>
      </Float>
    )
  }

  // 3D Scene Component
  const Scene3D = () => {
    return (
      <>
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 0, 10]} intensity={0.6} color="#1d4ed8" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#60a5fa" />

        {/* Stars background */}
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Professional Geometric Shapes */}
        <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
          <Octahedron position={[-4, 2, -5]} args={[0.8]}>
            <meshStandardMaterial
              color="#3b82f6"
              wireframe
              emissive="#1d4ed8"
              emissiveIntensity={0.05}
            />
          </Octahedron>
        </Float>

        <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
          <Icosahedron position={[4, -1, -3]} args={[0.6]}>
            <meshStandardMaterial
              color="#1d4ed8"
              wireframe
              emissive="#2563eb"
              emissiveIntensity={0.03}
            />
          </Icosahedron>
        </Float>

        <Float speed={1.6} rotationIntensity={2} floatIntensity={1}>
          <Torus position={[0, 3, -6]} args={[0.5, 0.15, 16, 32]}>
            <meshStandardMaterial
              color="#60a5fa"
              wireframe
              emissive="#3b82f6"
              emissiveIntensity={0.08}
            />
          </Torus>
        </Float>

        {/* Circuit Rings */}
        <CircuitRing position={[-3, -2, -4]} radius={0.8} speed={0.5} />
        <CircuitRing position={[3, 1, -7]} radius={0.6} speed={0.7} />
        <CircuitRing position={[1, -3, -3]} radius={0.4} speed={0.9} />

        {/* Code Structures */}
        <CodeStructure position={[-2, 0, -6]} />
        <CodeStructure position={[2, -1, -5]} />

        {/* Matrix Rain Elements */}
        <MatrixRain position={[-5, 1, -2]} />
        <MatrixRain position={[5, -2, -3]} />
        <MatrixRain position={[0, 2, -4]} />

        {/* Developer Symbols */}
        <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.8}>
          <Text
            position={[2, -3, -2]}
            fontSize={0.3}
            color="#60a5fa"
            anchorX="center"
            anchorY="middle"
          >
            {'</>'}
          </Text>
        </Float>

        <Float speed={1.1} rotationIntensity={0.7} floatIntensity={1.3}>
          <Text
            position={[-3, 0, -3]}
            fontSize={0.25}
            color="#3b82f6"
            anchorX="center"
            anchorY="middle"
          >
            {'{ }'}
          </Text>
        </Float>

        <Float speed={0.9} rotationIntensity={0.6} floatIntensity={1.1}>
          <Text
            position={[4, 2, -4]}
            fontSize={0.2}
            color="#1d4ed8"
            anchorX="center"
            anchorY="middle"
          >
            {'< />'}
          </Text>
        </Float>

        <Float speed={1.3} rotationIntensity={0.8} floatIntensity={0.9}>
          <Text
            position={[-1, -4, -2]}
            fontSize={0.18}
            color="#2563eb"
            anchorX="center"
            anchorY="middle"
          >
            {'function()'}
          </Text>
        </Float>

        {/* Matrix Rain Effects */}
        {Array.from({ length: 6 }, (_, i) => (
          <MatrixRain key={i} position={[(Math.random() - 0.5) * 12, 4 + Math.random() * 2, -2 - Math.random() * 3]} />
        ))}

        {/* Typing Code Animations */}
        <TypingCode position={[-4, -1, -3]} />
        <TypingCode position={[3, 1, -4]} />

        {/* Data Flow Animations */}
        <DataFlow startPosition={[-3, 2, -2]} endPosition={[3, 2, -2]} />
        <DataFlow startPosition={[3, -2, -2]} endPosition={[-3, -2, -2]} />
        <DataFlow startPosition={[0, 3, -2]} endPosition={[0, -3, -2]} />

        {/* Git Branch Visualizations */}
        <GitBranch position={[-5, -3, -4]} />
        <GitBranch position={[5, 3, -4]} />

        {/* Algorithm Visualizations */}
        <AlgorithmViz position={[0, 0, -5]} />
        <AlgorithmViz position={[-2, 2, -6]} />
        <AlgorithmViz position={[2, -2, -6]} />
      </>
    )
  }

  return (
    <section id="home" className="pt-0 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        {isClient && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        )}
      </div>

      {/* Updated background with new color scheme */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #111827, #0c0c1d)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-[#0c0c1d] to-[#A855F7]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6366F1]/5 via-transparent to-[#A855F7]/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(99,102,241,0.03)_50%,_transparent_75%)] bg-[length:250%_250%] animate-gradient"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 relative flex-grow flex items-center justify-center z-10">
        <motion.div 
          className="text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            <motion.span 
              className="block text-white mb-2"
              variants={itemVariants}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x"
              variants={itemVariants}
            >
              Duvarakesh S S
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            {isClient && (
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Machine Learning Engineer',
                  1000,
                  'Problem Solver',
                  1000, 
                  'AI Developer',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                className="text-white font-mono tracking-wider text-xl sm:text-2xl md:text-3xl font-semibold min-h-[1.5em]"
                repeat={Infinity}
                cursor={true}
              />
            )}
          </motion.div>

          <motion.p 
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            Passionate about creating beautiful and functional web applications.
          </motion.p>

          <motion.div 
            className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#A855F7] hover:to-[#8B5CF6] text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
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
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-gray-300 hover:text-white text-base font-semibold rounded-xl border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Projects
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 