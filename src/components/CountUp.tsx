import { useEffect, useRef, useState } from 'react'

const skipAnim = () =>
  typeof window !== 'undefined' &&
  (new URLSearchParams(window.location.search).has('noanim') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches)

/** Animates a number (keeping any prefix/suffix like "+14") from 0 to its value when scrolled into view. */
export default function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const m = value.match(/^(\D*)(\d+)(\D*)$/)
  const target = m ? parseInt(m[2], 10) : 0
  const prefix = m?.[1] ?? ''
  const suffix = m?.[3] ?? ''
  const ref = useRef<HTMLDivElement>(null)
  const [n, setN] = useState(() => (skipAnim() ? target : 0))

  useEffect(() => {
    if (skipAnim()) {
      setN(target)
      return
    }
    const el = ref.current
    if (!el) {
      setN(target)
      return
    }
    // Delay observing until the preloader has faded, so the count-up is visible.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          io.disconnect()
          const dur = 1200
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )
    const t = setTimeout(() => io.observe(el), 1100)
    return () => {
      clearTimeout(t)
      io.disconnect()
    }
  }, [target])

  return (
    <div ref={ref} className={className} dir="ltr">
      {prefix}
      {n}
      {suffix}
    </div>
  )
}
