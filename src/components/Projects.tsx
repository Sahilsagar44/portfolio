import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { SectionHead } from './SectionHead'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  return (
    <section id="work" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker="Selected work" title="Five things I shipped" accent="grape">
          Four games live on the Play Store and one production AI platform. Tap any card for the full story.
        </SectionHead>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
