import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glow = 'shadow-[0_0_50px_rgba(106,0,255,0.35)]'

export default function Hero({ onScrollToServices }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleScroll = () => {
      const y = window.scrollY
      el.style.setProperty('--parallax', Math.min(y / 600, 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header ref={containerRef} className="relative h-[90vh] md:h-screen overflow-hidden bg-[#0F0F12]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Purple gradient overlay for mood - don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f12]/20 to-[#0f0f12]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
          style={{ transform: 'translateY(calc(var(--parallax, 0) * -30px))' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-[#6A00FF] animate-pulse" />
            Agenzia AI • Siti web premium • Automazioni avanzate
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
            Svolta AI Agency
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Trasformiamo il tuo business con design, tecnologia e intelligenza artificiale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#cta" className={`group relative inline-flex items-center justify-center rounded-full bg-[#6A00FF] px-6 py-3 text-white font-medium transition-transform hover:scale-[1.02] ${glow}`}>
              <span className="relative z-10">Prenota una consulenza</span>
              <span className="absolute inset-0 rounded-full bg-[#6A00FF] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            </a>
            <button onClick={onScrollToServices} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition">
              Scopri i servizi
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
