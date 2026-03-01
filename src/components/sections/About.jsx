import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { HiAcademicCap, HiBadgeCheck, HiCurrencyRupee, HiLightBulb } from 'react-icons/hi'

const CARDS = [
  {
    icon: HiAcademicCap,
    title: 'About the Institution',
    desc: 'Adithya Institute of Technology is a premier engineering college committed to excellence in technical education and innovation.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Accreditations',
    items: [
      'Approved by AICTE',
      'Affiliated to Anna University',
      'Autonomous Institution',
      'NAAC A+ Accredited',
    ],
  },
  {
    icon: HiCurrencyRupee,
    title: 'Registration Fee',
    highlight: '₹150',
    desc: 'Includes kit, certificate, refreshments & lunch.',
  },
  {
    icon: HiLightBulb,
    title: 'Why Attend',
    desc: 'Network with peers, present your research, compete in technical events, and win exciting prizes.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <SectionTitle subtitle="About" title="AURA '26 & the Institution" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CARDS.map((card, i) => (
            <motion.div key={card.title} variants={item}>
              <TiltCard
                className="glass rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 hover:shadow-glow transition-all duration-300 group h-full"
                maxTilt={8}
              >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:shadow-glow transition-shadow">
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  {card.highlight && (
                    <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{card.highlight}</p>
                  )}
                  {card.desc && <p className="text-slate-600 dark:text-slate-400">{card.desc}</p>}
                  {card.items && (
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                      {card.items.map((line) => (
                        <li key={line} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
