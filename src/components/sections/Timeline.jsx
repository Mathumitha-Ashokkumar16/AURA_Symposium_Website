import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiCalendar, HiCheckCircle, HiStar } from 'react-icons/hi'

const MILESTONES = [
  {
    icon: HiCalendar,
    title: 'Paper Submission Deadline',
    date: 'March 10, 2026',
    desc: 'Submit your research papers before the deadline.',
  },
  {
    icon: HiCheckCircle,
    title: 'Paper Acceptance Intimation',
    date: 'March 12, 2026',
    desc: 'Selected participants will be notified.',
  },
  {
    icon: HiStar,
    title: 'Event Date',
    date: 'March 14, 2026',
    desc: 'AURA \'26 – National Level Technical Symposium.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl relative">
        <SectionTitle subtitle="Schedule" title="Important Dates" />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-400 to-cyan-500/50 -translate-x-px" />

          {MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              className={`relative flex gap-6 md:gap-8 mb-12 last:mb-0 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0 w-12 h-12 md:mx-auto md:w-14 md:h-14 rounded-full glass border-2 border-cyan-400/50 flex items-center justify-center text-cyan-500 dark:text-cyan-400 z-10">
                <milestone.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div
                className={`flex-1 pt-1 ${
                  i % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                <div className="glass rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-glow transition-all">
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-1">
                    {milestone.date}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{milestone.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
