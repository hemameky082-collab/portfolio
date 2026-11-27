import { useEffect, useState } from 'react'

const skipAnim = () =>
  typeof window !== 'undefined' &&
  (new URLSearchParams(window.location.search).has('noanim') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches)

// Starts after the preloader has faded out so the typing is actually visible.
const START_DELAY_MS = 1100

/** Types the given text character by character with a blinking caret. Retypes when the text (language) changes. */
export default function Typewriter({ text, className = '' }: { text: string; className?: string }) {
  const [skip] = useState(skipAnim)
  const [n, setN] = useState(() => (skipAnim() ? Array.from(text).length : 0))

  useEffect(() => {
    const chars = Array.from(text)
    if (skipAnim()) {
      setN(chars.length)
      return
    }
    setN(0)
    let i = 0
    let interval: ReturnType<typeof setInterval> | undefined
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setN(i)
        if (i >= chars.length && interval) clearInterval(interval)
      }, 55)
    }, START_DELAY_MS)
    return () => {
      clearTimeout(start)
      if (interval) clearInterval(interval)
    }
  }, [text])

  const chars = Array.from(text)
  return (
    <div className={className} aria-label={text}>
      <span aria-hidden="true">{chars.slice(0, n).join('')}</span>
      {!skip && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1em] bg-current align-[-0.1em] ms-[2px] animate-blink"
        />
      )}
    </div>
  )
}
