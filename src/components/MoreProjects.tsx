import { useUI } from '../ui'
import Reveal from './Reveal'

export default function MoreProjects() {
  const { t } = useUI()
  return (
    <section id="more-projects" className="py-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="sec-title">
          {t.moreSec.title} <span className="text-acc">/</span>
        </Reveal>
        <Reveal className="text-muted mb-11">{t.moreSec.sub}</Reveal>

        <div className="border-t border-line">
          {t.moreProjects.map((p) => (
            <Reveal
              key={p.no}
              className="grid grid-cols-[44px_1fr] md:grid-cols-[70px_1fr_auto] gap-5 items-center py-[22px] border-b border-line transition-all hover:ps-2.5"
            >
              <div className="text-acc font-extrabold">{p.no}</div>
              <div>
                <h3 className="text-[1.1rem] font-bold">{p.title}</h3>
                <p className="text-muted text-[0.9rem]">{p.text}</p>
              </div>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener"
                className="text-acc font-semibold text-[0.9rem] whitespace-nowrap hover:underline col-start-2 md:col-start-auto"
              >
                {t.moreSec.visit} &#8599;
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
