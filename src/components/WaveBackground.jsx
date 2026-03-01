/**
 * Animated SVG wave layers for section backgrounds.
 * Use as full-width block at bottom of hero or between sections.
 */
export default function WaveBackground({ className = '', invert = false }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none ${invert ? 'rotate-180' : ''} ${className}`}
      aria-hidden
    >
      <svg
        className="relative w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Wave 1 */}
        <path
          fill="url(#wave-gradient)"
          fillOpacity="0.6"
          d="M0,160 C360,80 720,240 1080,160 C1260,120 1380,80 1440,80 L1440,320 L0,320 Z"
          className="motion-path-wave1"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,160 C360,80 720,240 1080,160 C1260,120 1380,80 1440,80 L1440,320 L0,320 Z;
              M0,80 C360,160 720,80 1080,160 C1260,200 1380,240 1440,240 L1440,320 L0,320 Z;
              M0,160 C360,80 720,240 1080,160 C1260,120 1380,80 1440,80 L1440,320 L0,320 Z
            "
          />
        </path>
        {/* Wave 2 */}
        <path
          fill="url(#wave-gradient)"
          fillOpacity="0.35"
          d="M0,200 C360,120 720,200 1080,140 C1260,100 1380,180 1440,140 L1440,320 L0,320 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,200 C360,120 720,200 1080,140 C1260,100 1380,180 1440,140 L1440,320 L0,320 Z;
              M0,140 C360,220 720,140 1080,200 C1260,240 1380,160 1440,200 L1440,320 L0,320 Z;
              M0,200 C360,120 720,200 1080,140 C1260,100 1380,180 1440,140 L1440,320 L0,320 Z
            "
          />
        </path>
        {/* Wave 3 - subtle */}
        <path
          fill="url(#wave-gradient)"
          fillOpacity="0.2"
          d="M0,240 C480,200 960,280 1440,240 L1440,320 L0,320 Z"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,240 C480,200 960,280 1440,240 L1440,320 L0,320 Z;
              M0,200 C480,260 960,220 1440,260 L1440,320 L0,320 Z;
              M0,240 C480,200 960,280 1440,240 L1440,320 L0,320 Z
            "
          />
        </path>
      </svg>
    </div>
  )
}
