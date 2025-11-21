import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Un salto di qualità pazzesco: sito velocissimo, brand elevato e automazioni che ci hanno fatto risparmiare ore ogni settimana.',
    name: 'Luca R.',
    role: 'Founder, RetailTech'
  },
  {
    quote: 'Il chatbot su misura converte lead come non mai. Approccio serio e attenzione ai dettagli degna di una big agency.',
    name: 'Sara B.',
    role: 'CMO, Fintech'
  },  {
    quote: 'Dalla strategia al design, tutto preciso. Le integrazioni AI hanno reso il nostro supporto clienti 10x più efficiente.',
    name: 'Giulia M.',
    role: 'COO, SaaS B2B'
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(90,0,209,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Testimonianze</h2>
        <p className="mt-3 text-white/70">Feedback reale da chi ha scelto di fare la svolta.</p>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">“{testimonials[index].quote}”</p>
                <div className="mt-6 text-white/70">{testimonials[index].name} • {testimonials[index].role}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Vai alla testimonianza ${i+1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition ${index === i ? 'bg-[#6A00FF]' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
