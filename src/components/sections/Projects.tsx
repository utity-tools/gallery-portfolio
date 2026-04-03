import { projects } from '../../data/projects'
import type { Project } from '../../types'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors duration-200">
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg">{project.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-zinc-800 text-zinc-300 text-xs rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6 pt-2 border-t border-zinc-800">
        <a
          href={project.github}
          className="text-zinc-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1"
        >
          GitHub ↗
        </a>
        <a
          href={project.live}
          className="text-zinc-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1"
        >
          Live Demo ↗
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-zinc-950 py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <span className="text-zinc-600 text-sm tracking-widest uppercase">Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Work</h2>
          <div className="w-12 h-px bg-zinc-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
