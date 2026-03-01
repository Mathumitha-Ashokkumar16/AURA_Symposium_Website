import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const SOCIAL = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/adithya_institute_technology/' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/school/adithya-institute-of-technology/' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-cyan-950/20 to-transparent" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-3 rounded-full glass text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-glow transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Adithya Institute of Technology. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-1">
            Designed with <HiHeart className="text-rose-500 inline" /> for AURA '26
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
