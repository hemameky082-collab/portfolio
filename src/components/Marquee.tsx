import { useUI } from '../ui'

export default function Marquee() {
  const { t } = useUI()
  const items = Array.from({ length: 16 })
  return (
    <div className="border-y border-line overflow-hidden py-[18px] whitespace-nowrap" aria-hidden="true">
      <div className="inline-block animate-marquee">
        {items.map((_, i) => (
          <span key={i}>
            <span className="text-[1.4rem] font-extrabold tracking-wide me-3">{t.marquee}</span>
            <span className="text-acc not-italic me-3">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
