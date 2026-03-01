import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiLocationMarker, HiMail } from 'react-icons/hi'

const ADDRESS = 'Sathy Main Road, Kurumbapalayam, Coimbatore – 641107'
const EMAIL = 'symposium_ait@adithyatech.com'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        <SectionTitle subtitle="Get in Touch" title="Contact & Venue" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={`https://www.google.com/maps/place/Adithya+Institute+Of+Technology/@11.113562,77.0338161,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8f9b7785334fb:0xde4c119d4cddb18c!8m2!3d11.113562!4d77.036391!16s%2Fm%2F04cqyc7?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 glass rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-glow transition-all group"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:shadow-glow transition-shadow">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Address</h3>
                <p className="text-slate-600 dark:text-slate-400">{ADDRESS}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 glass rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-glow transition-all group"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:shadow-glow transition-shadow">
                <HiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-400 break-all">{EMAIL}</p>
              </div>
            </a>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden glass border border-white/10 h-64 lg:h-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <iframe
              title="Adithya Institute of Technology - Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.997521871778!2d77.03381607482316!3d11.113561989056405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9b7785334fb%3A0xde4c119d4cddb18c!2sAdithya%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1772257789284!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[256px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
