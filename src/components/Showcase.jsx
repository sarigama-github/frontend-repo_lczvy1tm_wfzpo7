import { motion } from 'framer-motion'

const projects = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Progetto ${i + 1}`,
  tag: 'Website / AI / Automation',
  img: `https://images.unsplash.com/photo-1508921233439-6a394cfb21e4?q=80&w=1600&auto=format&fit=crop`,
}))

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0B0B0E] to-[#0F0F12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_200px_at_50%_0%,rgba(106,0,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Portfolio</h2>
            <p className="mt-3 text-white/70">Una selezione di lavori di livello premium.</p>
          </div>
          <a href="#cta" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:text-white hover:bg-white/10">Richiedi case study</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt="Project" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_200px_at_50%_80%,rgba(106,0,255,0.35),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-xl bg-[#0F0F12]/70 backdrop-blur-md border border-white/10 p-4">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-white/70 text-sm">{p.tag}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
