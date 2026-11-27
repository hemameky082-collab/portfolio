import Reveal from './Reveal';
import { useUI } from '../ui';

export default function Services() {
  const { t } = useUI();
  return (
    <section id="services" className="pt-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="svc-heading text-fg">
          {t.servicesSec.titleA} <span className="text-acc">{t.servicesSec.titleB}</span>{' '}
          <span className="text-fg">/</span>
        </Reveal>

        <div className="mt-10 mb-14 grid gap-6 md:grid-cols-2">
          <Reveal className="font-semibold tracking-[0.22em] text-muted">
            {t.servicesSec.sub}
          </Reveal>
          <Reveal className="max-w-[560px] text-[1.15rem] leading-relaxed text-muted md:justify-self-end">
            {t.servicesSec.intro}
          </Reveal>
        </div>
      </div>

      <div className="container-x">
        {t.services.map((s, i) => (
          <div key={s.num} className="sticky" style={{ top: `${72 + i * 26}px` }}>
            <div className="svc-card border-t-2 border-acc/50 bg-bg pb-14 pt-10 md:pb-16 md:pt-12">
              <div className="grid gap-5 md:grid-cols-[190px_1fr] md:gap-10">
                <div className="svc-num text-fg">{s.num}</div>
                <div>
                  <h3 className="svc-title text-fg">{s.title}</h3>
                  <p className="mt-4 max-w-[680px] text-[1.05rem] leading-relaxed text-muted">
                    {s.text}
                  </p>
                  <ul className="mt-8">
                    {s.points.map((p, j) => (
                      <li key={p} className="svc-point">
                        <span className="svc-point-num text-acc">0{j + 1}</span>
                        <span className="svc-point-text text-fg">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-[90px]" />
    </section>
  );
}
