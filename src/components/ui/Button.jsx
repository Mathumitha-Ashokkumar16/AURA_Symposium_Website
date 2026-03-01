import { motion } from 'framer-motion'
import { forwardRef, useCallback, useState } from 'react'

/**
 * Primary / Secondary button with ripple effect and hover glow.
 * Supports: primary (glowing), secondary (outline), ghost
 */
const Button = forwardRef(function Button(
  { children, variant = 'primary', className = '', onClick, href, as, ...props },
  ref
) {
  const [ripples, setRipples] = useState([])
  const isLink = href != null || as === 'a'

  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { id, x, y }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)
  }, [])

  const handleClick = (e) => {
    addRipple(e)
    onClick?.(e)
  }

  const base =
    'relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'

  const variants = {
    primary:
      'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-glow-teal hover:shadow-glow hover:scale-105 active:scale-100',
    secondary:
      'border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-glow',
    ghost:
      'text-cyan-300 hover:bg-white/5 hover:text-white',
  }

  const Comp = isLink ? motion.a : motion.button
  const compProps = isLink ? { href } : { type: 'button' }

  return (
    <Comp
      ref={ref}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...compProps}
      {...props}
    >
      {ripples.map(({ id, x, y }) => (
        <motion.span
          key={id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
          initial={{ width: 0, height: 0 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </Comp>
  )
})

export default Button
