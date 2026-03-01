import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LOGO_DURATION_MS = 2200
const FADE_OUT_MS = 600
const MIN_SHOW_MS = 2800

/**
 * Full-screen loading with AURA '26 logo reveal, then fade out.
 */
export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const [logoRevealed, setLogoRevealed] = useState(false)

  useEffect(() => {
    const timerReveal = setTimeout(() => setLogoRevealed(true), 200)
    const timerDone = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onComplete?.(), FADE_OUT_MS)
    }, MIN_SHOW_MS)
    return () => {
      clearTimeout(timerReveal)
      clearTimeout(timerDone)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: 'var(--page-bg)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_MS / 1000 }}
        >
          {/* Subtle gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.12),transparent)]" />

          {/* Logo container */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={
              logoRevealed
                ? { scale: 1, opacity: 1 }
                : { scale: 0.3, opacity: 0 }
            }
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 120,
              delay: 0.1,
            }}
          >
            <h1 className="font-space font-extrabold text-6xl sm:text-7xl md:text-8xl gradient-text">
              AURA '26
            </h1>
            <motion.p
              className="mt-3 text-cyan-400/90 text-sm md:text-base uppercase tracking-[0.3em]"
              initial={{ opacity: 0, y: 10 }}
              animate={logoRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              National Level Technical Symposium
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 h-0.5 w-48 bg-slate-700 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: LOGO_DURATION_MS / 1000, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
