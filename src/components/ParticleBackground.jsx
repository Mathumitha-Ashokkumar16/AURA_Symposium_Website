import { useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 55
const COLORS = ['#0d9488', '#06b6d4', '#22d3ee', '#5eead4']

/**
 * Dynamic particle system: floating particles with varied motion, occasional burst.
 */
export default function ParticleBackground() {
  const [burst, setBurst] = useState(0)
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 5,
      color: COLORS[i % COLORS.length],
      duration: 3 + Math.random() * 8,
      delay: Math.random() * 3,
      drift: (Math.random() - 0.5) * 40,
      opacityBase: 0.2 + Math.random() * 0.5,
    }))
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBurst((b) => b + 1), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
          }}
          animate={{
            y: [0, -40 - p.drift, 0],
            x: [0, 15, -5, 0],
            opacity: [p.opacityBase * 0.5, p.opacityBase, p.opacityBase * 0.6, p.opacityBase * 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay + (burst % 2) * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
