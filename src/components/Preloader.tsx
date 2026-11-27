import { useEffect, useState } from 'react'

const FILL_MS = 850
const LINGER_MS = 120

/**
 * Branded loading screen: Ibrahem.dev logo + teal progress, gone in ~1.3s.
 * Shown once per tab session, skipped entirely for reduced-motion users.
 */
export default function Preloader() {
  const [hide] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
    try {
      return sessionStorage.getItem('ibrahem-seen') === '1'
    } catch {
      return false
    }
  })
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (hide) return
    try {
      sessionStorage.setItem('ibrahem-seen', '1')
    } catch {
      /* private mode: just play the loader */
    }
    const t0 = performance.now()
    let raf = 0
    let linger: ReturnType<typeof setTimeout> | undefined
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / FILL_MS)
      setPct(Math.round(p * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        linger = setTimeout(() => setDone(true), LINGER_MS)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      if (linger) clearTimeout(linger)
    }
  }, [hide])

  if (hide) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-7 transition-opacity duration-[400ms] ${
        done ? 'opacity-0 pointer-events-none' : ''
      }`}
    >
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-fg" dir="ltr">
        Ibrahem<span className="text-acc">.dev</span>
      </div>
      <div className="w-[210px] md:w-[260px] h-[3px] rounded-full bg-line overflow-hidden">
        <div
          className="h-full rounded-full bg-acc"
          style={{ width: `${pct}%`, transition: 'width 90ms linear' }}
        />
      </div>
      <div className="text-acc font-bold text-sm tabular-nums" dir="ltr">
        {pct}%
      </div>
    </div>
  )
}
