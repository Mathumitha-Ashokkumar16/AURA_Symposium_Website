/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        aura: {
          teal: '#0d9488',
          cyan: '#06b6d4',
          glow: '#22d3ee',
          dark: '#0f172a',
          darker: '#020617',
        },
      },
      backgroundImage: {
        'gradient-aura': 'linear-gradient(135deg, #0f172a 0%, #0d9488 40%, #06b6d4 70%, #0f172a 100%)',
        'gradient-glow': 'linear-gradient(135deg, #0d9488, #06b6d4, #22d3ee)',
        'gradient-card': 'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 60px rgba(6, 182, 212, 0.4)',
        'glow-teal': '0 0 30px rgba(13, 148, 136, 0.5)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
