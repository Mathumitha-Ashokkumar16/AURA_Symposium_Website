import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

export default function DepartmentModal({ department, onClose }) {
  useEffect(() => {
    if (!department) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [department, onClose])

  return (
    <AnimatePresence>
      {department && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        <motion.div
          className="relative glass rounded-2xl max-w-md w-full p-6 md:p-8 shadow-glow-lg border border-cyan-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold gradient-text">{department.shortName}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <HiX size={24} />
            </button>
          </div>
          <p className="text-slate-400 text-sm mb-4">{department.name} Department</p>
          <ul className="space-y-3">
            {department.events.map((event, i) => (
              <motion.li
                key={event}
                className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/5 border border-white/5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-slate-200">{event}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}
