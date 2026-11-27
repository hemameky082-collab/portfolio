import type { Project } from '../data'
import { useUI } from '../ui'
import { useTilt } from '../lib/useTilt'
import Reveal from './Reveal'

function ProjectCard({ p }: { p: Project }) {
  const { t } = useUI()
  const tilt = useTilt<HTMLDivElement>()
  return (
    <Reveal>
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="proj-card group bg-card border border-line rounded-2xl p-[22px] flex flex-col gap-3 h-full will-change-transform"
      >
        {p.image ? (
          <div className="proj-img-wrap rounded-xl border border-line">
            <img
              src={p.image}
              alt={`${p.title} demo screenshot`}
              loading="lazy"
              className="proj-img w-full aspect-[16/10] object-cover object-top"
            />
          </div>
        ) : (
          <div className="w-full aspect-[16/10] rounded-xl border border-dashed border-acc/50 bg-gradient-to-br from-acc/20 to-transparent flex items-center justify-center text-muted text-[0.9rem] font-semibold">
            {t.projectsSec.demoPending}
          </div>
        )}
        {p.tag && (
          <span className="text-xs text-acc bg-acc/15 px-3 py-1 rounded-full w-fit font-semibold">{p.tag}</span>
        )}
        <h3 className="text-[1.25rem] font-bold">{p.title}</h3>
        <p className="text-muted text-[0.95rem] grow">{p.text}</p>
        <div className="flex flex-wrap gap-2">
          {p.chips.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>
        <div className="flex gap-[18px] text-[0.92rem] font-semibold">
          {p.demo ? (
            <a href={p.demo} target="_blank" rel="noopener" className="text-acc hover:underline">
              {t.projectsSec.visit} &#8599;
            </a>
          ) : (
            <span className="text-muted font-normal">{t.projectsSec.demoPending}</span>
          )}
          <a href={p.github} target="_blank" rel="noopener" className="text-acc hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { t } = useUI()
  return (
    <section id="projects" className="py-[90px]">
      <div className="container-x">
        <Reveal as="h2" className="sec-title">
          {t.projectsSec.title} <span className="text-acc">/</span>
        </Reveal>
        <Reveal className="text-muted mb-11">{t.projectsSec.sub}</Reveal>

        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {t.projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
