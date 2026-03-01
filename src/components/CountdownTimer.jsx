import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET = new Date('2026-03-14T09:00:00')

function pad(n) {
  return String(Math.max(0, Math.floor(n))).padStart(2, '0')
}

export default function CountdownTimer() {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const now = new Date()
      const ms = TARGET - now
      if (ms <= 0) {
        setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const s = Math.floor((ms / 1000) % 60)
      const m = Math.floor((ms / 60000) % 60)
      const h = Math.floor((ms / 3600000) % 24)
      const d = Math.floor(ms / 86400000)
      setDiff({ days: d, hours: h, minutes: m, seconds: s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  const units = [
    { value: diff.days, label: 'Days' },
    { value: diff.hours, label: 'Hours' },
    { value: diff.minutes, label: 'Minutes' },
    { value: diff.seconds, label: 'Seconds' },
  ]

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {units.map(({ value, label }, i) => (
        <motion.div
          key={label}
          className="glass rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[80px] text-center border border-cyan-400/20 dark:border-cyan-400/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + i * 0.08 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="block text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 font-space tabular-nums">
            {pad(value)}
          </span>
          <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
