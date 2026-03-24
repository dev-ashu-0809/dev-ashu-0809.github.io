import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    company: 'CitiusTech Healthcare Technologies',
    role: 'Technical Lead',
    duration: 'Apr 2022 - Present',
    description:
      'Leading IT consulting and development services provider in the healthcare technology space, working with several leading global companies.',
    projects: [
      {
        name: 'HHH.Financials',
        duration: 'Jul 2025 - Present',
        tech: ['ASP.Net Core', 'Angular', 'PostgreSQL', 'Redis', 'Terraform', 'GCP', 'Playwright', 'Kafka', 'Pub/Sub'],
        highlights: [
          'Maintain cell architecture infrastructure with Terraform managing 20+ microservice modules',
          'Manage multi-environment deployments (dev, staging, prod, prod-training) on GCP',
          'Provision Cloud SQL, Pub/Sub, IAM, Workload Identity, Okta, Secret Manager, Kafka, and BigQuery',
          'Built NuGet package for dual authentication (Custom/Okta)',
          'Implemented security policies with IAM roles and Workload Identity federation',
          'Set up New Relic monitoring and Datastream pipelines for observability',
          'Automated backend testing with Flux and frontend testing with Playwright',
        ],
      },
      {
        name: 'Speech-To-Text (STT)',
        duration: 'Jan 2023 - Jan 2025',
        tech: ['ASP.NET', 'C#', '.NET 6', 'Angular', 'AWS', 'SignalR', 'GCP STT'],
        highlights: [
          'Built real-time WebSocket communication using SignalR',
          'Integrated GCP Speech-to-Text V1 & V2 services',
          'Developed Terraform scripts for ECS Fargate containers',
          'Created HLD documents and architecture diagrams',
          'Integrated SonarQube for code quality analysis',
        ],
      },
      {
        name: 'NXG Mobile D2D & Virtual Assistant',
        duration: 'Jun 2022 - Jan 2023',
        tech: ['C#', '.NET 4.6', 'SignalR', 'WPF', 'PowerShell', 'AWS S3'],
        highlights: [
          'Built mobile-to-desktop connectivity for streaming text & point-click',
          'Implemented audio-to-text transcription in EHR applications',
          'Handled 42+ Windows shortcut commands via voice control',
          'Designed HLD, architecture and class diagrams',
        ],
      },
    ],
  },
  {
    company: 'Wipro Limited',
    role: 'Developer Analyst-I',
    duration: 'May 2020 - Apr 2022',
    description:
      'Indian multinational corporation providing IT, consulting and business process services.',
    projects: [
      {
        name: 'Boeing LTC Letter OCR',
        duration: 'Feb 2021 - Dec 2021',
        tech: ['ASP.NET', 'UiPath', 'OCR', 'Alteryx Designer', 'APIs', 'Machine Learning'],
        highlights: [
          'Built bot to extract data from PDF/images using OCR technology',
          'Integrated ML-based validation APIs for extracted data',
          'Automated CSV report generation for ML system',
          'Created bot flow diagrams and managed Jira stories',
        ],
      },
    ],
  },
  {
    company: 'Datamatics Global Services Limited',
    role: 'Senior Software Engineer',
    duration: 'May 2018 - May 2020',
    description:
      'Worked at client location (HDFC ERGO General Insurance) developing robust, scalable solutions using ASP.NET MVC 5, Entity Framework 6, and SQL Server.',
    projects: [
      {
        name: 'HDFC Ergo DIA Chat Bot',
        duration: 'May 2018 - Jan 2019',
        tech: ['ASP.NET MVC 5', 'HTML5', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server'],
        highlights: [
          'Integrated Amazon chatbot with ASP.NET MVC application',
          'Enabled policy details access and claim submission via chat',
          'Implemented policy quotation and purchase features',
        ],
      },
    ],
  },
  {
    company: 'Webstream Communications Group',
    role: 'ASP.NET Software Developer',
    duration: 'Apr 2017 - May 2018',
    description:
      'Live streaming platform company specializing in Physical, Hybrid & Virtual Event Management Services.',
    projects: [
      {
        name: 'Live Streaming Platform',
        duration: 'Apr 2017 - May 2018',
        tech: ['ASP.NET', 'C#', 'HTML5', 'JavaScript', 'SQL Server'],
        highlights: [
          'Ensured seamless synchronization between live video and audio streams',
          'Implemented live polls and Q&A sessions during live events',
          'Enhanced audience engagement and interaction features',
        ],
      },
    ],
  },
  {
    company: 'sCoolMeal FoodVentures Pvt Ltd',
    role: 'Software Engineer',
    duration: 'Dec 2015 - Mar 2017',
    description:
      'Built scalable web applications using ASP.NET MVC 5, Entity Framework 6, HTML5, jQuery, and SQL Server. Requirements gathering, HLD/LLD design, and cross-functional collaboration.',
    projects: [],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Career Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Professional Experience
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 z-10" />

                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-white font-bold text-lg">{exp.company}</h4>
                      <p className="text-blue-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-gray-500 text-sm font-mono whitespace-nowrap">{exp.duration}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-4">{exp.description}</p>

                  {exp.projects.map((proj) => (
                    <div key={proj.name} className="mt-4 p-4 rounded-lg bg-gray-800/30 border border-gray-800/30">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                        <h5 className="text-white font-semibold text-sm flex items-center gap-2">
                          <HiBriefcase className="text-blue-400" />
                          {proj.name}
                        </h5>
                        <span className="text-gray-500 text-xs font-mono">{proj.duration}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {t}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-1.5">
                        {proj.highlights.map((h, j) => (
                          <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
