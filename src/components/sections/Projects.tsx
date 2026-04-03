import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-colors duration-200">
      <CardHeader>
        <CardTitle className="text-white">{project.title}</CardTitle>
        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-2 border-t border-zinc-800">
          <a
            href={project.github}
            className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <a
            href={project.live}
            className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
          >
            Live Demo ↗
          </a>
        </div>
      </CardContent>
    </Card>
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
