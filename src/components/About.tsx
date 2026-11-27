import { useUI } from '../ui'
import Reveal from './Reveal'

export default function About() {
  const { t } = useUI()
  return (
    <section id="about" className="py-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="sec-title">
          {t.aboutSec.title} <span className="text-acc">/</span>
        </Reveal>
        <Reveal className="text-muted mb-11">{t.aboutSec.sub}</Reveal>

        <Reveal className="max-w-[760px]">
          {t.aboutSec.paras.map((p, i) => (
            <p key={i} className={`text-muted text-[1.1rem] leading-relaxed ${i < t.aboutSec.paras.length - 1 ? 'mb-4' : ''}`}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
