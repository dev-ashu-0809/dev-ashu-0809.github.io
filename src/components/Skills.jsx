import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Microsoft Technologies',
    skills: ['ASP.NET', '.NET Core', 'MVC 5', 'Web API', 'Microservices', 'SignalR', 'C#', 'TypeScript', 'PowerShell', 'Terraform', 'ETL Packages'],
    color: 'blue',
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'JavaScript', 'TypeScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'AJAX', 'XML/XSLT'],
    color: 'cyan',
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'GCP', 'Terraform', 'Docker', 'ECS Fargate', 'Cloud SQL', 'Pub/Sub', 'Kafka', 'IAM', 'Workload Identity', 'Secret Manager', 'BigQuery', 'Datastream', 'S3', 'CloudWatch', 'CloudFront'],
    color: 'purple',
  },
  {
    title: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'DynamoDB', 'Redis', 'Oracle'],
    color: 'green',
  },
  {
    title: 'AI & Agentic Development',
    skills: ['Claude Code Agents', 'GitHub Copilot Premium', 'ChatGPT', 'AI Sub-Agents', 'Prompt Engineering', 'AI-Assisted Development', 'Agentic Workflows'],
    color: 'rose',
  },
  {
    title: 'Healthcare',
    skills: ['HL7 V2.X', 'HL7 CDA', 'EHR Integration', 'Medical Imaging Workflows', 'Provider Workflows'],
    color: 'amber',
  },
  {
    title: 'Tools & Testing',
    skills: ['Git', 'Bitbucket', 'Jira', 'Azure Boards', 'Visual Studio', 'SonarQube', 'Playwright', 'Postman', 'Swagger', 'New Relic', 'UiPath', 'Alteryx'],
    color: 'blue',
  },
]

const colorMap = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

const dotColorMap = {
  blue: 'bg-blue-400',
  cyan: 'bg-cyan-400',
  purple: 'bg-purple-400',
  green: 'bg-green-400',
  rose: 'bg-rose-400',
  amber: 'bg-amber-400',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Tech Stack
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Technologies
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${dotColorMap[cat.color]}`} />
                <h4 className="text-white font-semibold text-sm">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border ${colorMap[cat.color]} font-medium`}
                  >
                    {skill}
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
