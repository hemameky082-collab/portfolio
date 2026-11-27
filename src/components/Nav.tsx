import { useState } from 'react'
import { useUI } from '../ui'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { t, lang, theme, toggleLang, toggleTheme } = useUI()

  return (
    <nav className="sticky top-0 z-20 bg-bg/75 backdrop-blur-md border-b border-line">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="font-extrabold text-[1.05rem]">
          Ibrahem<span className="text-acc">.</span>dev
        </a>

        <div
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex absolute md:static top-16 left-0 right-0 flex-col md:flex-row gap-0 md:gap-7 bg-card md:bg-transparent border-b border-line md:border-0`}
        >
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-fg text-[0.92rem] transition-colors block px-6 py-3.5 md:p-0 border-t border-line md:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* dark / light */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="border border-line rounded-full w-9 h-9 flex items-center justify-center text-muted hover:text-acc hover:border-acc transition-colors"
          >
            {theme === 'dark' ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          {/* EN / AR */}
          <button
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            title={lang === 'en' ? 'عربي' : 'English'}
            className="border border-line rounded-full h-9 px-3 text-[0.85rem] font-bold text-muted hover:text-acc hover:border-acc transition-colors"
          >
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-block border border-acc text-acc px-[18px] py-2 rounded-full text-[0.9rem] font-semibold hover:bg-acc hover:text-white transition-colors"
          >
            {t.nav.hire}
          </a>

          <button
            className="md:hidden border border-line rounded-lg text-fg text-lg px-3 py-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  )
}
