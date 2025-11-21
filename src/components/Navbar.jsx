import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
      setElevated(scrollTop > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${elevated ? 'backdrop-blur-xl' : 'backdrop-blur-md'}`}>
      {/* Progress bar */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-white/5">
        <div className="h-full bg-gradient-to-r from-[#5A00D1] via-[#6A00FF] to-[#BDA7FF] shadow-[0_0_18px_rgba(106,0,255,0.8)]" style={{ width: `${progress}%` }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className={`flex items-center justify-between rounded-2xl border ${elevated ? 'border-white/15 bg-[#0F0F12]/80' : 'border-white/10 bg-[#0F0F12]/60'} px-4 py-3 transition-colors`}>
          <a href="#" className="flex items-center gap-3" data-magnetic>
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#6A00FF] to-[#5A00D1] shadow-[0_0_18px_rgba(106,0,255,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Svolta AI</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#services" className="hover:text-white transition" data-magnetic>Servizi</a>
            <a href="#why" className="hover:text-white transition" data-magnetic>Perché noi</a>
            <a href="#work" className="hover:text-white transition" data-magnetic>Portfolio</a>
            <a href="#tech" className="hover:text-white transition" data-magnetic>Tecnologie</a>
            <a href="#testimonials" className="hover:text-white transition" data-magnetic>Testimonianze</a>
            <a href="#cta" className="ml-2 inline-flex items-center rounded-full bg-[#6A00FF] px-4 py-2 text-sm text-white shadow-[0_0_25px_rgba(106,0,255,0.45)] hover:shadow-[0_0_40px_rgba(106,0,255,0.7)] transition" data-magnetic>
              Consulenza
            </a>
          </div>
          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-20 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-4 left-4 top-20 rounded-2xl border border-white/10 bg-[#0F0F12] p-6 space-y-4">
            {[
              ['Servizi', '#services'],
              ['Perché noi', '#why'],
              ['Portfolio', '#work'],
              ['Tecnologie', '#tech'],
              ['Testimonianze', '#testimonials'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="block text-white/90 text-lg" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-[#6A00FF] py-3 text-white font-medium shadow-[0_0_25px_rgba(106,0,255,0.35)]">Prenota una consulenza</a>
          </div>
        </div>
      )}
    </nav>
  )
}
