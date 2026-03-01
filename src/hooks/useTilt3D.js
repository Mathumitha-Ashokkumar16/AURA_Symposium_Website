import { useRef, useState, useCallback } from 'react'
import { useMotionValue, useTransform, useSpring } from 'framer-motion'

/**
 * Returns motion values and ref for 3D tilt effect based on mouse position over the element.
 * Use with motion.div: ref={ref} style={{ rotateX, rotateY, transformPerspective: 800 }}
 */
export function useTilt3D(maxTilt = 12) {
  const ref = useRef(null)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt])

  const springConfig = { damping: 25, stiffness: 300 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMove = useCallback(
    (e) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const relX = (e.clientX - centerX) / (rect.width / 2)
      const relY = (e.clientY - centerY) / (rect.height / 2)
      x.set(Math.max(-1, Math.min(1, relX)))
      y.set(Math.max(-1, Math.min(1, relY)))
    },
    [x, y]
  )

  const handleLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setHovering(false)
  }, [x, y])

  const handleEnter = useCallback(() => setHovering(true), [])

  return {
    ref,
    style: {
      rotateX: rotateXSpring,
      rotateY: rotateYSpring,
      transformPerspective: 800,
    },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onMouseEnter: handleEnter,
    hovering,
  }
}
