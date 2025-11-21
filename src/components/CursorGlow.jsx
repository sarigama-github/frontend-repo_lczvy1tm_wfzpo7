import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// Custom cyber-neon cursor with magnetic hover support
// Adds two layers: inner dot + soft purple glow. Hidden on touch devices.
export default function CursorGlow() {
  const dotRef = useRef(null)
  const glowRef = useRef(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    // Disable on touch or coarse pointers
    const mq = window.matchMedia('(pointer: fine)')
    const isFine = mq.matches
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isFine || isTouch) {
      setEnabled(false)
      return
    }

    const dot = dotRef.current
    const glow = glowRef.current
    if (!dot || !glow) return

    const qx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' })
    const qy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' })
    const gx = gsap.quickTo(glow, 'x', { duration: 0.22, ease: 'power3' })
    const gy = gsap.quickTo(glow, 'y', { duration: 0.22, ease: 'power3' })

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      qx(x)
      qy(y)
      gx(x)
      gy(y)
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    // Magnetic hover: elements with [data-magnetic]
    const magnetics = Array.from(document.querySelectorAll('[data-magnetic]'))
    const enter = (e) => {
      const el = e.currentTarget
      gsap.to(glow, { scale: 1.35, opacity: 0.85, duration: 0.25, ease: 'power3.out' })
      gsap.to(dot, { scale: 0.6, duration: 0.2, ease: 'power3.out' })
      el.__magMove = (ev) => {
        const rect = el.getBoundingClientRect()
        const relX = (ev.clientX - rect.left) / rect.width - 0.5
        const relY = (ev.clientY - rect.top) / rect.height - 0.5
        gsap.to(el, { x: relX * 12, y: relY * 12, duration: 0.3, ease: 'power3' })
      }
      el.addEventListener('mousemove', el.__magMove)
    }
    const leave = (e) => {
      const el = e.currentTarget
      gsap.to(glow, { scale: 1, opacity: 0.65, duration: 0.25, ease: 'power3.out' })
      gsap.to(dot, { scale: 1, duration: 0.25, ease: 'power3.out' })
      gsap.to(el, { x: 0, y: 0, duration: 0.35, ease: 'power3' })
      if (el.__magMove) el.removeEventListener('mousemove', el.__magMove)
    }
    magnetics.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      magnetics.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
        if (el.__magMove) el.removeEventListener('mousemove', el.__magMove)
      })
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen">
      <div
        ref={glowRef}
        className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(106,0,255,0.9), rgba(106,0,255,0.0))' }}
      />
      <div
        ref={dotRef}
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'linear-gradient(180deg, #BDA7FF 0%, #6A00FF 100%)', boxShadow: '0 0 16px rgba(106,0,255,0.9)' }}
      />
    </div>
  )
}
