import Reveal from './Reveal'
import { useUI } from '../ui'
import { STACK_ITEMS, type StackItem } from '../data'

function Glyph({ kind }: { kind: NonNullable<StackItem['glyph']> }) {
  switch (kind) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#61dafb" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" fill="#61dafb" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#38bdf8">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.87 14.55 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.13 14.45 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.87 9.55 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.13 9.45 12 7 12z" />
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          <circle cx="6" cy="6" r="2.1" fill="#fff" stroke="none" />
          <circle cx="6" cy="18" r="2.1" fill="#fff" stroke="none" />
          <circle cx="18" cy="8" r="2.1" fill="#fff" stroke="none" />
          <path d="M6 8.1v7.8M18 10.1c0 3.4-3 4.7-6.4 5.2" />
        </svg>
      )
    case 'github':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffc700">
          <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
        </svg>
      )
  }
}

export default function Stack() {
  const { t } = useUI()
  return (
    <section id="stack" className="py-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="stack-heading text-fg">
          <span className="text-acc">✦</span> {t.stackSec.titleA}{' '}
          <span className="text-acc">{t.stackSec.titleB}</span>
        </Reveal>

        <div className="mt-14 space-y-14">
          {t.stackSec.groups.map((label, gi) => (
            <Reveal key={label} className="grid gap-6 md:grid-cols-[260px_1fr] md:gap-10">
              <h3 className="stack-label">{label}</h3>
              <div className="stack-grid">
                {(STACK_ITEMS[gi] || []).map((item) => (
                  <div key={item.name} className="stack-chip">
                    <span
                      className="stack-tile"
                      style={{ background: item.bg, color: item.fg || '#ffffff' }}
                    >
                      {item.glyph ? <Glyph kind={item.glyph} /> : item.tile}
                    </span>
                    <span className="stack-name" dir="ltr">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
