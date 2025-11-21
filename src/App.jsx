import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Showcase from './components/Showcase'
import Tech from './components/Tech'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  const servicesRef = useRef(null)

  const handleScrollToServices = () => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white selection:bg-[#6A00FF]/30">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero onScrollToServices={handleScrollToServices} />
        <Services ref={servicesRef} />
        <WhyUs />
        <Showcase />
        <Tech />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
