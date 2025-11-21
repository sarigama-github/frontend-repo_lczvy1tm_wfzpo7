import { motion } from 'framer-motion'
import { SiNextdotjs, SiReact, SiVercel, SiTailwindcss, SiFramer, SiGreensock, SiThreedotjs, SiSupabase, SiPlanetscale } from 'react-icons/si'

const techs = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiTailwindcss, name: 'TailwindCSS' },
  { icon: SiFramer, name: 'Framer Motion' },
  { icon: SiGreensock, name: 'GSAP' },
  { icon: SiThreedotjs, name: 'Three.js' },
  { icon: SiSupabase, name: 'Supabase' },
  { icon: SiPlanetscale, name: 'PlanetScale' },
]

export default function Tech() {
  return (
    <section id="tech" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(106,0,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Tecnologie usate</h2>
          <p className="mt-4 text-white/70">Strumenti affidabili e moderni per costruire senza compromessi.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-[#6A00FF]/40"
            >
              <div className="text-white/90 group-hover:text-white transition transform group-hover:scale-105">
                <t.icon size={28} />
              </div>
              <div className="mt-2 text-sm text-white/70">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
