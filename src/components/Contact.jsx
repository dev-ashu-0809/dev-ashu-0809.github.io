import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPen } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaEnvelope className="text-xl" />,
    label: 'Email',
    value: 'ashutosh_rajput@outlook.com',
    href: 'mailto:ashutosh_rajput@outlook.com',
  },
  {
    icon: <FaPhone className="text-xl" />,
    label: 'Phone',
    value: '+1 (913)-263-6430',
    href: 'tel:+19132636430',
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dev-ashu',
    href: 'https://www.linkedin.com/in/dev-ashu/',
  },
  {
    icon: <FaPen className="text-xl" />,
    label: 'C# Corner Blog',
    value: 'Tech Articles & Tutorials',
    href: 'https://www.c-sharpcorner.com/members/ashutosh-singh83',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or partnerships in healthcare technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center p-8 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 hover:bg-gray-800/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">{item.label}</div>
              <div className="text-white text-sm font-medium text-center">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.linkedin.com/in/dev-ashu/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            <FaLinkedin className="text-xl" />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
