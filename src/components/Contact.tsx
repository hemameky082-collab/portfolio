import { useState, type FormEvent } from 'react'
import { contact } from '../data'
import { useUI } from '../ui'
import Reveal from './Reveal'

function RowIcon({ kind }: { kind: string }) {
  switch (kind) {
    case 'mail':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      )
    case 'wa':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    case 'pin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case 'in':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      )
    case 'gh':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    default:
      return null
  }
}

export default function Contact() {
  const { t, lang } = useUI()
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = t.contactSec.form.waTemplate.replace('{name}', name.trim()).replace('{msg}', msg.trim())
    window.open(`https://wa.me/${contact.phoneIntl}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const rows = [
    { icon: 'mail', label: t.contactSec.labels.email, value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'wa', label: t.contactSec.labels.phone, value: contact.phoneDisplay, href: `https://wa.me/${contact.phoneIntl}`, ltr: true },
    { icon: 'pin', label: t.contactSec.labels.location, value: contact.location[lang] },
    { icon: 'gh', label: t.contactSec.labels.github, value: contact.githubLabel, href: contact.github, ltr: true },
    { icon: 'in', label: t.contactSec.labels.linkedin, value: contact.linkedinLabel, href: contact.linkedin, ltr: true },
  ]

  return (
    <section id="contact" className="py-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="svc-heading text-fg">
          {t.contactSec.titleA} <span className="text-acc">{t.contactSec.titleB}</span>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="mb-9 max-w-[420px] text-[1.15rem] leading-relaxed text-muted">
              {t.contactSec.intro}
            </p>
            <div className="space-y-6">
              {rows.map((r) => (
                <div key={r.label} className="flex items-center gap-4">
                  <span className="contact-icon">
                    <RowIcon kind={r.icon} />
                  </span>
                  <div>
                    <div className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-acc">
                      {r.label}
                    </div>
                    {r.href ? (
                      <a
                        href={r.href}
                        target={r.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener"
                        className="text-[1.05rem] font-bold text-fg transition-colors hover:text-acc"
                        dir={r.ltr ? 'ltr' : undefined}
                      >
                        {r.value}
                      </a>
                    ) : (
                      <span className="text-[1.05rem] font-bold text-fg">{r.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={submit} className="contact-card flex flex-col gap-4 rounded-2xl border border-acc/35 bg-card p-7">
              <h3 className="text-[1.2rem] font-bold text-fg">{t.contactSec.form.title}</h3>
              <p className="text-[0.92rem] text-muted">{t.contactSec.form.text}</p>
              <label className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-muted" htmlFor="cf-name">
                {t.contactSec.form.name}
              </label>
              <input
                id="cf-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contactSec.form.name}
                required
                className="rounded-[10px] border border-line bg-bg px-3.5 py-3 text-[0.95rem] text-fg focus:border-acc focus:outline-none"
              />
              <label className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-muted" htmlFor="cf-msg">
                {t.contactSec.form.msg}
              </label>
              <textarea
                id="cf-msg"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                placeholder={t.contactSec.form.msg}
                required
                className="resize-y rounded-[10px] border border-line bg-bg px-3.5 py-3 text-[0.95rem] text-fg focus:border-acc focus:outline-none"
              />
              <button type="submit" className="contact-send mt-1 self-start rounded-full px-8 py-3 text-[0.9rem] font-bold tracking-[0.14em] transition-colors">
                {t.contactSec.form.send}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
