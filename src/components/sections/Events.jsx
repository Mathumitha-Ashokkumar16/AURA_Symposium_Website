import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { DEPARTMENTS } from '../../data/departments'
import DepartmentModal from './DepartmentModal'
import { HiChip } from 'react-icons/hi'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Events() {
  const [selectedDept, setSelectedDept] = useState(null)

  return (
    <section id="events" className="py-20 md:py-28 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.08),transparent)] pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <SectionTitle subtitle="Departments & Events" title="Explore by Department" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {DEPARTMENTS.map((dept) => (
            <motion.div key={dept.id} variants={cardItem}>
              <TiltCard
                className="glass rounded-2xl p-6 text-left group border border-white/10 hover:border-cyan-400/40 hover:shadow-glow transition-all duration-300 h-full"
                maxTilt={10}
              >
                <button
                  type="button"
                  className="w-full h-full flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 rounded-xl"
                  onClick={() => setSelectedDept(dept)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 group-hover:shadow-glow transition-shadow">
                      <HiChip className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{dept.shortName}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{dept.events.length} events</p>
                  <span className="text-cyan-600 dark:text-cyan-400 text-sm font-medium group-hover:underline mt-auto">
                    View events →
                  </span>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DepartmentModal
        department={selectedDept}
        onClose={() => setSelectedDept(null)}
      />
    </section>
  )
}
