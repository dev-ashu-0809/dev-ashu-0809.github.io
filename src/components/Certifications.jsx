import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAws, FaTrophy, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa'

const certifications = [
  {
    icon: <FaAws className="text-4xl" />,
    title: 'AWS Certified Solutions Architect',
    subtitle: 'Associate - C03',
    year: '2024',
    color: 'from-amber-500 to-orange-500',
    description: 'Validated expertise in designing distributed systems on AWS, including compute, networking, storage, and database services.',
    link: 'https://www.credly.com/badges/b1d742e8-404f-49af-b7dd-76e14fa2d239/linked_in_profile',
  },
  {
    icon: <FaTrophy className="text-4xl" />,
    title: 'C-Sharp Corner MVP',
    subtitle: 'Most Valuable Professional | Gold Badge',
    year: '2023',
    color: 'from-blue-500 to-purple-500',
    description: 'Recognized for outstanding contributions to the C# developer community through articles, tutorials, and helping fellow developers.',
    link: 'https://www.c-sharpcorner.com/members/ashutosh-singh83',
    stats: [
      { value: '1.6M+', label: 'Readers' },
      { value: 'Gold', label: 'Badge' },
      { value: 'Top 500', label: 'Worldwide' },
    ],
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Achievements
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Certifications & Awards
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden p-8 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all"
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.color} opacity-5 group-hover:opacity-10 rounded-full -translate-y-8 translate-x-8 transition-opacity`} />

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.color} text-white mb-5`}>
                  {cert.icon}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-bold text-lg">{cert.title}</h4>
                  <span className="text-blue-400 font-mono text-sm ml-2 whitespace-nowrap">{cert.year}</span>
                </div>

                <p className="text-blue-400 text-sm font-medium mb-3">{cert.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>

                {cert.stats && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-800/50">
                    {cert.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    View Profile <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h4 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-6 text-center">
            Education
          </h4>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 group relative overflow-hidden p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <h5 className="text-white font-bold">Bachelor's Degree in Computer Science</h5>
                  <p className="text-blue-400 text-sm font-medium mt-1">Mumbai University, India</p>
                  <p className="text-gray-500 text-sm font-mono mt-1">2012 - 2015</p>
                </div>
              </div>
            </div>
            <div className="flex-1 group relative overflow-hidden p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 text-white">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <h5 className="text-white font-bold">12th - Mathematics</h5>
                  <p className="text-blue-400 text-sm font-medium mt-1">UP State Board (UPMSP)</p>
                  <p className="text-gray-500 text-sm font-mono mt-1">2010 - 2012</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
