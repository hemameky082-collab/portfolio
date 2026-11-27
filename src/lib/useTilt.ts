import { useRef } from 'react'

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const coarse = () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

/** Small 3D tilt on hover. Disabled for touch devices and reduced-motion users. */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced() || coarse() || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transition = 'transform 0.1s ease-out'
    ref.current.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-6px)`
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transition = 'transform 0.4s ease'
    ref.current.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
