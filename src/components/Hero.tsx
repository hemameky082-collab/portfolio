import { contact } from '../data'
import { useUI } from '../ui'
import Typewriter from './Typewriter'
import CountUp from './CountUp'

export default function Hero() {
  const { t } = useUI()
  const noAnim = new URLSearchParams(window.location.search).has('noanim')
  return (
    <header className={`hero relative overflow-hidden ${noAnim ? 'py-24' : 'min-h-[94vh] flex flex-col justify-center py-20'}`}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="relative z-[1] container-x w-full">
        <div className="grid md:grid-cols-[1fr_1.25fr] gap-10 items-center">
          <div>
            <div className="script-accent" dir="ltr">
              {t.hero.scriptName}
            </div>
            <div className="social-pill">
              <a href={contact.github} target="_blank" rel="noopener" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:text-end">
            <h1 className="hero-name">
              {t.hero.nameLine1}
              <br />
              {t.hero.nameLine2}
            </h1>
            <Typewriter text={t.hero.role} className="hero-role" />
            <a className="cv-btn" href="/cv.pdf" download="Ibrahem-Abdelhafeez-CV.pdf">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              {t.hero.downloadCv}
            </a>
          </div>
        </div>

        <div className="stats-row">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="stat">
              <CountUp value={s.num} className="stat-num" />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-hint">
          <span>&#8595;</span> {t.hero.scrollHint}
        </div>
      </div>
    </header>
  )
}
