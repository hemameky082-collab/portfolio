import { useEffect, useRef } from 'react'

/** A soft teal glow that follows the mouse. Skipped for touch devices and reduced-motion users. */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    if (!el) return
    const move = (e: PointerEvent) => {
      el.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[2] pointer-events-none w-[520px] h-[520px] rounded-full hidden md:block"
      style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 62%)' }}
    />
  )
}
