import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '1.6M+', label: 'Blog Readers' },
  { value: '20+', label: 'Microservice Modules' },
  { value: 'Top 500', label: 'C# Corner Worldwide' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 px-6 border-y border-gray-800/40 bg-gray-900/20">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
