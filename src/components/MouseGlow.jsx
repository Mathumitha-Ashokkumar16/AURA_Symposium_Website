import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Large soft glow that follows the mouse. Desktop only; hidden on touch devices.
 */
export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = null
    const handleMove = (e) => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY })
        setVisible(true)
        raf = null
      })
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-0 hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        width: 400,
        height: 400,
        marginLeft: -200,
        marginTop: -200,
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(13, 148, 136, 0.08) 30%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden
    />
  )
}
