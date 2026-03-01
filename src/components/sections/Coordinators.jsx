import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { FACULTY_COORDINATORS, STUDENT_COORDINATORS } from '../../data/coordinators'
import { HiUser, HiAcademicCap } from 'react-icons/hi'

const EVENT_CONVENOR = {
  name: 'Dr. Mishmala Sushith',
  role: 'Professor & Head, Department of IT',
}

const Card = ({ name, department, phone, icon: Icon, index }) => (
  <motion.div
    className="glass rounded-xl p-4 hover:border-cyan-400/30 hover:shadow-glow transition-all duration-300 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -2 }}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 group-hover:shadow-glow transition-shadow">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-sm text-cyan-600 dark:text-cyan-400/90">{department}</p>
        {phone && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            +91 {phone}
          </p>
        )}
      </div>
    </div>
  </motion.div>
)

export default function Coordinators() {
  return (
    <section id="coordinators" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        <SectionTitle subtitle="Team" title="Coordinators" />

        {/* Event convenor centered above coordinator lists */}
        <motion.div
          className="max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass rounded-2xl p-6 md:p-7 text-center hover:border-cyan-400/30 hover:shadow-glow transition-all">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-500 dark:text-cyan-400 mb-2">
              Event Convenor
            </p>
            <p className="text-xl md:text-2xl font-bold gradient-text mb-1">
              {EVENT_CONVENOR.name}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {EVENT_CONVENOR.role}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <HiAcademicCap className="w-6 h-6" />
              Faculty Coordinators
            </h3>
            <div className="space-y-3">
              {FACULTY_COORDINATORS.map((c, i) => (
                <Card
                  key={c.name}
                  name={c.name}
                  department={c.department}
                  phone={c.phone}
                  icon={HiAcademicCap}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
              <HiUser className="w-6 h-6" />
              Student Coordinators
            </h3>
            <div className="space-y-3">
              {STUDENT_COORDINATORS.map((c, i) => (
                <Card
                  key={c.name}
                  name={c.name}
                  department={c.department}
                  phone={c.phone}
                  icon={HiUser}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
