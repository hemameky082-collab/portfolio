import { useUI } from '../ui'
import Reveal from './Reveal'

export default function Journey() {
  const { t } = useUI()
  return (
    <section id="journey" className="py-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="sec-title">
          {t.journeySec.title} <span className="text-acc">/</span>
        </Reveal>
        <Reveal className="text-muted mb-11">{t.journeySec.sub}</Reveal>

        <div className="border-s-2 border-line ms-2">
          {t.journey.map((j) => (
            <Reveal key={j.title} className="relative ps-8 pb-9">
              <span className="absolute -start-[7px] top-1.5 w-3 h-3 rounded-full bg-acc shadow-[0_0_0_4px_rgba(45,212,191,0.14)]" />
              <div className="text-acc font-bold text-[0.9rem]">{j.when}</div>
              <h3 className="text-[1.15rem] font-bold my-1">{j.title}</h3>
              <h4 className="text-muted font-medium text-[0.95rem] mb-2">{j.org}</h4>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                {j.points.map((p) => (
                  <li key={p} className="text-muted text-[0.95rem]">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
