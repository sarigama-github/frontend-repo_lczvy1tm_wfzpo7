import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_50%_0%,rgba(106,0,255,0.18),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-[#6A00FF]/30 bg-gradient-to-br from-[#140223] via-[#0F0F12] to-[#140223] p-10 md:p-14 shadow-[0_0_80px_rgba(106,0,255,0.25)]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Pronto a fare la svolta?</h2>
            <p className="mt-3 text-white/70">Parliamo del tuo progetto e disegniamo una soluzione su misura.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="group relative inline-flex items-center justify-center rounded-full bg-[#6A00FF] px-6 py-3 text-white font-medium transition-transform hover:scale-[1.02]">
                <span className="relative z-10">Prenota una consulenza</span>
                <span className="absolute inset-0 rounded-full bg-[#6A00FF] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition">
                Esplora i servizi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
