import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAws, FaAngular, FaBrain } from 'react-icons/fa'
import { SiDotnet, SiGooglecloud, SiTerraform } from 'react-icons/si'

const highlights = [
  { icon: <SiDotnet className="text-2xl" />, label: '.NET Core', desc: 'Microservices & APIs' },
  { icon: <FaAngular className="text-2xl" />, label: 'Angular', desc: 'Frontend Applications' },
  { icon: <SiTerraform className="text-2xl" />, label: 'Terraform', desc: 'Cell Architecture & IaC' },
  { icon: <FaAws className="text-2xl" />, label: 'AWS Certified', desc: 'Solutions Architect' },
  { icon: <SiGooglecloud className="text-2xl" />, label: 'GCP', desc: 'Cloud Infrastructure' },
  { icon: <FaBrain className="text-2xl" />, label: 'Agentic AI', desc: 'Copilot, Claude, ChatGPT' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Healthcare Technology Professional
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-gray-400 leading-relaxed"
          >
            <p>
              I'm a Technical Lead with <span className="text-white font-medium">10+ years of experience</span> in .NET technologies,
              cloud platforms, and infrastructure automation. Based in <span className="text-white font-medium">Overland Park, Kansas</span>.
            </p>
            <p>
              My expertise spans full-stack development with <span className="text-white font-medium">.NET Core</span> and{' '}
              <span className="text-white font-medium">Angular</span>, plus cloud infrastructure using{' '}
              <span className="text-white font-medium">Terraform</span> to build and manage scalable, secure{' '}
              <span className="text-white font-medium">cell architecture</span> across multi-environment deployments (dev, staging, prod).
            </p>
            <p>
              I manage infrastructure for <span className="text-white font-medium">20+ microservice modules</span> on GCP including
              Cloud SQL, Pub/Sub, IAM, Workload Identity, Okta integration, Kafka, BigQuery, and New Relic monitoring.
            </p>
            <p>
              I actively leverage <span className="text-white font-medium">Agentic AI</span> to supercharge development workflows --
              building custom agents and sub-agents using <span className="text-white font-medium">Claude Code, GitHub Copilot Premium,
              and ChatGPT</span> for code generation, architecture design, debugging, and automated task orchestration.
            </p>
            <p>
              I hold an <span className="text-white font-medium">AWS Certified Solutions Architect - Associate</span> certification and have been
              recognized as a <span className="text-white font-medium">C-Sharp Corner MVP</span> for contributions to the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-white text-sm font-medium">{item.label}</div>
                <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
