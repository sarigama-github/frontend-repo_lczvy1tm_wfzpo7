export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0B0B0E]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#6A00FF] to-[#5A00D1]" />
              <span className="text-white font-semibold">Svolta AI Agency</span>
            </div>
            <p className="mt-3 text-white/60 max-w-sm">Agenzia AI e digitale: siti web premium, chatbot su misura, automazioni aziendali e soluzioni avanzate.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-white/70 font-medium">Azienda</div>
              <ul className="mt-3 space-y-2 text-white/60">
                <li><a href="#services" className="hover:text-white">Servizi</a></li>
                <li><a href="#work" className="hover:text-white">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonianze</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white/70 font-medium">Contatti</div>
              <ul className="mt-3 space-y-2 text-white/60">
                <li>hello@svolta.ai</li>
                <li>+39 000 000 000</li>
                <li>Milano, Italia</li>
              </ul>
            </div>
            <div>
              <div className="text-white/70 font-medium">Social</div>
              <ul className="mt-3 space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Svolta AI Agency. Tutti i diritti riservati.</div>
          <div>Privacy • Cookie • Termini</div>
        </div>
      </div>
    </footer>
  )
}
