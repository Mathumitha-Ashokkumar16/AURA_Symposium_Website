import { motion } from 'framer-motion'
import ParticleBackground from '../ParticleBackground'
import WaveBackground from '../WaveBackground'
import CountdownTimer from '../CountdownTimer'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient + particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 dark:from-aura-darker dark:via-slate-900/95 dark:to-aura-darker" />
      <ParticleBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.12),transparent)] dark:opacity-100 opacity-80" />
      {/* Animated SVG waves at bottom */}
      <WaveBackground className="bottom-0 h-48 sm:h-56 md:h-64" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          className="text-cyan-600 dark:text-cyan-400 font-medium text-sm md:text-base uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Adithya Institute of Technology
        </motion.p>

        <motion.h1
          className="font-space font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="gradient-text">AURA '26</span>
        </motion.h1>

        <motion.p
          className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A National Level Technical Symposium
        </motion.p>

        <motion.p
          className="text-cyan-600 dark:text-cyan-400/90 text-xl md:text-2xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          March 14, 2026
        </motion.p>

        <CountdownTimer />

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="primary" as="a" href="#contact">
            Register Now
          </Button>
          <Button variant="secondary" as="a" href="#timeline">
            Submit Paper
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          className="block w-6 h-10 border-2 border-slate-500 rounded-full mx-auto mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="block w-1.5 h-1.5 bg-cyan-500 rounded-full mx-auto mt-2" />
        </motion.span>
        <span className="text-xs uppercase tracking-wider">Scroll</span>
      </motion.div>
    </section>
  )
}
