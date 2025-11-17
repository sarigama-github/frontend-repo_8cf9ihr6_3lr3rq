import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            Elevate Your Storefront
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-slate-300"
          >
            A premium ecommerce experience with buttery‑smooth animations and a modern, minimalist aesthetic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium shadow/50 shadow-slate-900/10 hover:shadow-lg hover:-translate-y-0.5 transition">
              Shop Featured
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-transparent ring-1 ring-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
