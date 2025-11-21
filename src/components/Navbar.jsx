import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0F0F12]/70 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#6A00FF] to-[#5A00D1]" />
            <span className="text-white font-semibold tracking-tight">Svolta AI</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#services" className="hover:text-white transition">Servizi</a>
            <a href="#why" className="hover:text-white transition">Perché noi</a>
            <a href="#work" className="hover:text-white transition">Portfolio</a>
            <a href="#tech" className="hover:text-white transition">Tecnologie</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonianze</a>
            <a href="#cta" className="ml-2 inline-flex items-center rounded-full bg-[#6A00FF] px-4 py-2 text-sm text-white shadow-[0_0_25px_rgba(106,0,255,0.35)] hover:shadow-[0_0_40px_rgba(106,0,255,0.5)] transition">Consulenza</a>
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
