import { motion } from 'framer-motion'
import { Globe, Bot, Workflow, AppWindow, PenTool, Brain } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Siti web premium su misura',
    desc: 'Esperienze web dal design impeccabile, performance elevate e SEO avanzata.',
  },
  {
    icon: Bot,
    title: 'Chatbot AI & assistenti intelligenti',
    desc: 'Assistenti conversazionali su misura per supporto clienti e lead generation.',
  },
  {
    icon: Workflow,
    title: 'Automazioni aziendali',
    desc: 'Integrazioni e flussi automatizzati che fanno risparmiare tempo e costi.',
  },
  {
    icon: AppWindow,
    title: 'Web app e soluzioni digitali',
    desc: 'Applicazioni scalabili e sicure per il tuo business, pronte per la crescita.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Interfacce eleganti e usabili, con micro-interazioni premium.',
  },
  {
    icon: Brain,
    title: 'Setup strumenti AI per business',
    desc: 'Implementazione di modelli AI, RAG, analisi dati e workflow intelligenti.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-gradient-to-b from-[#0F0F12] to-[#0B0B0E]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(106,0,255,0.15),transparent)]" />
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute right-[-10%] top-0 h-[480px] w-[480px] rounded-full blur-[120px] bg-[#6A00FF]/30" />
        <div className="absolute left-[-10%] bottom-0 h-[420px] w-[420px] rounded-full blur-[120px] bg-[#5A00D1]/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Cosa facciamo</h2>
          <p className="mt-4 text-white/70">Soluzioni digitali avanzate per aziende ambiziose.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-[#6A00FF]/40 will-change-transform"
            >
              <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#6A00FF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6A00FF] to-[#5A00D1] text-white shadow-[0_0_25px_rgba(106,0,255,0.35)]">
                  <s.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#BDA7FF]">
                <span className="text-sm">Scopri di più</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
