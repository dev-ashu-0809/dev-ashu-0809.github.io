import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMicrophone, FaMobileAlt, FaRobot, FaComments, FaHospital, FaServer, FaBrain } from 'react-icons/fa'

const projects = [
  {
    icon: <FaHospital className="text-3xl" />,
    title: 'Healthcare Financial Platform',
    description:
      'Enterprise healthcare financial tool supporting claims processing with AI-assisted features for clinics and hospitals to streamline EHR data entry.',
    tech: ['ASP.Net Core', 'Angular', 'PostgreSQL', 'Redis', 'Terraform', 'GCP'],
    color: 'from-blue-500 to-cyan-500',
    highlights: ['Cell Architecture', 'Dual Auth (Custom/Okta)', 'Automated Testing'],
  },
  {
    icon: <FaServer className="text-3xl" />,
    title: 'Cloud Infrastructure (IaC)',
    description:
      'Designed and maintained Terraform-based cell architecture for 20+ microservices across multi-environment GCP deployments with full observability stack.',
    tech: ['Terraform', 'GCP', 'Cloud SQL', 'Pub/Sub', 'Kafka', 'IAM', 'BigQuery', 'New Relic'],
    color: 'from-emerald-500 to-teal-500',
    highlights: ['20+ Modules', 'Multi-Environment', 'Workload Identity'],
  },
  {
    icon: <FaBrain className="text-3xl" />,
    title: 'Agentic AI Workflows',
    description:
      'Built custom AI agents and sub-agents for development workflows -- from code generation and architecture design to automated debugging, testing, and task orchestration across projects.',
    tech: ['Claude Code', 'GitHub Copilot Premium', 'ChatGPT', 'AI Agents', 'Sub-Agents'],
    color: 'from-violet-500 to-fuchsia-500',
    highlights: ['Custom Agent Pipelines', 'AI-Assisted Dev', 'Productivity Multiplier'],
  },
  {
    icon: <FaMicrophone className="text-3xl" />,
    title: 'Speech-To-Text (STT)',
    description:
      'Real-time speech-to-text server using WebSocket and SignalR, enabling audio transcription with GCP STT V1 & V2 integration.',
    tech: ['ASP.NET', '.NET 6', 'Angular', 'SignalR', 'AWS', 'GCP STT'],
    color: 'from-purple-500 to-pink-500',
    highlights: ['Real-time WebSocket', 'GCP STT Integration', 'ECS Fargate Deployment'],
  },
  {
    icon: <FaMobileAlt className="text-3xl" />,
    title: 'NXG Mobile D2D & Virtual Assistant',
    description:
      'Mobile-to-desktop connectivity app for streaming text and voice commands. Supports 42+ Windows shortcuts via voice control in EHR applications.',
    tech: ['C#', '.NET 4.6', 'SignalR', 'WPF', 'PowerShell', 'AWS S3'],
    color: 'from-cyan-500 to-blue-500',
    highlights: ['42+ Voice Commands', 'EHR Integration', 'Desktop Streaming'],
  },
  {
    icon: <FaRobot className="text-3xl" />,
    title: 'Boeing LTC Letter OCR',
    description:
      'Automated bot extracting data from PDFs and images using OCR, with ML-based validation and CSV report generation.',
    tech: ['ASP.NET', 'UiPath', 'OCR', 'Machine Learning', 'APIs'],
    color: 'from-amber-500 to-orange-500',
    highlights: ['OCR Data Extraction', 'ML Validation', 'Automated Reports'],
  },
  {
    icon: <FaComments className="text-3xl" />,
    title: 'HDFC Ergo DIA Chat Bot',
    description:
      'Amazon chatbot integrated with ASP.NET MVC for insurance policy management - access details, submit claims, get quotations, and purchase policies via chat.',
    tech: ['ASP.NET MVC 5', 'jQuery', 'Bootstrap', 'SQL Server', 'Amazon Bot'],
    color: 'from-green-500 to-emerald-500',
    highlights: ['Policy Management', 'Claims Processing', 'Chat Interface'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl bg-gray-900/80 border border-gray-800/50 hover:border-gray-700/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient line at top */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${proj.color} text-white mb-4 opacity-80`}>
                {proj.icon}
              </div>

              <h4 className="text-white font-bold text-lg mb-2">{proj.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.highlights.map((h) => (
                  <span key={h} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/50">
                {proj.tech.map((t) => (
                  <span key={t} className="text-xs text-blue-400 font-mono">
                    {t}
                    {proj.tech.indexOf(t) < proj.tech.length - 1 && <span className="text-gray-700 ml-1.5">·</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
