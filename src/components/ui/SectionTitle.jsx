import { motion } from 'framer-motion'

/**
 * Section heading with optional gradient subtitle and scroll-triggered animation.
 */
export default function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <motion.div
      className={`text-center mb-12 md:mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm md:text-base uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space gradient-text">
        {title}
      </h2>
    </motion.div>
  )
}
