import { motion } from 'framer-motion'
import { Cpu, Gauge, MousePointerClick, Sparkles } from 'lucide-react'

const points = [
  { icon: Cpu, title: 'Tecnologie top-tier', desc: 'Stack moderno e scalabile per risultati concreti.' },
  { icon: MousePointerClick, title: 'UX eccellente', desc: 'Interfacce chiare, interazioni naturali, design premium.' },
  { icon: Gauge, title: 'Performance massime', desc: 'Ottimizzazione tecnica e SEO per carichi lampo.' },
  { icon: Sparkles, title: 'Soluzioni AI reali', desc: 'Use case pratici e impattanti, zero gimmick.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(90,0,209,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Perché sceglierci</h2>
          <p className="mt-4 text-white/70">Qualità enterprise, metodologia precisa, risultati misurabili.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-[#5A00D1]/40"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5A00D1] to-[#6A00FF] text-white shadow-[0_0_25px_rgba(106,0,255,0.35)]">
                <p.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
