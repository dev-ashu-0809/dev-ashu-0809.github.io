import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaPhone, FaPen } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Animated particles */}
      <ParticleBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            Tech Lead | 10+ Years in Healthcare Technology | Overland Park, KS, USA.          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ashutosh Singh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Technical Lead specializing in{' '}
          <span className="text-gray-200">.NET Core, Angular, Terraform, AWS & GCP</span>
          {' '}with deep expertise in healthcare technology, cloud infrastructure, and{' '}
          <span className="text-gray-200">AI-powered development</span> using agentic AI workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-medium transition-all"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a href="https://www.linkedin.com/in/dev-ashu/" target="_blank" rel="noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="mailto:ashutosh_rajput@outlook.com"
            className="text-gray-500 hover:text-blue-400 transition-colors text-xl">
            <FaEnvelope />
          </a>
          <a href="tel:+19132636430"
            className="text-gray-500 hover:text-blue-400 transition-colors text-xl">
            <FaPhone />
          </a>
          <a href="https://www.c-sharpcorner.com/members/ashutosh-singh83" target="_blank" rel="noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors text-xl" title="C# Corner Blog">
            <FaPen />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
