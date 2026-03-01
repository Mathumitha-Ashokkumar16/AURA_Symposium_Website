import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiCurrencyRupee } from 'react-icons/hi'

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(6,182,212,0.12),transparent)] pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative">
        <SectionTitle subtitle="Rewards" title="Exciting Cash Prizes" />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-3 glass rounded-3xl px-8 py-6 md:px-12 md:py-8 border border-cyan-400/30 shadow-glow"
            animate={{
              boxShadow: [
                '0 0 40px rgba(6, 182, 212, 0.3)',
                '0 0 60px rgba(6, 182, 212, 0.5)',
                '0 0 40px rgba(6, 182, 212, 0.3)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <HiCurrencyRupee className="w-10 h-10 md:w-12 md:h-12 text-cyan-600 dark:text-cyan-400" />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              Win Cash Prizes
            </span>
          </motion.div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-xl mx-auto">
            Compete across departments and events to win attractive cash prizes. Details will be shared at the venue.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
