import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  delay?: number
}

const skipAnim = () =>
  typeof window !== 'undefined' &&
  (new URLSearchParams(window.location.search).has('noanim') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches)

export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [on, setOn] = useState(skipAnim)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`rv ${on ? 'on' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  )
}
