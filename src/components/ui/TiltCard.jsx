import { motion } from 'framer-motion'
import { useTilt3D } from '../../hooks/useTilt3D'

/**
 * Wrapper that applies 3D tilt on mouse move. Use for cards.
 */
export default function TiltCard({ children, className = '', maxTilt = 10, ...props }) {
  const { ref, style, onMouseMove, onMouseLeave, onMouseEnter } = useTilt3D(maxTilt)
  return (
    <motion.div
      ref={ref}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
