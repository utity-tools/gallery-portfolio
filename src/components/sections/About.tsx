import { Badge } from '@/components/ui/badge'

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '20+', label: 'Projects built' },
  { value: '10+', label: 'Happy clients' },
  { value: '5+', label: 'Technologies' },
]

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Supabase', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Vercel'] },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-zinc-900 py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-zinc-500 text-sm tracking-widest uppercase">About me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Passionate about crafting great experiences
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
            <p>
              I'm a developer who believes that great software lives at the intersection of clean
              code and thoughtful design. I care deeply about the details — from how an API is
              structured to how a button feels when you hover over it.
            </p>
            <p>
              I work with modern tools and enjoy building products that are fast, accessible, and
              a pleasure to use. Whether it's a side project or a client build, I bring the same
              level of craft and attention to every line of code.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-zinc-800">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">{value}</span>
                <span className="text-zinc-500 text-xs leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-3">
              <span className="text-zinc-500 text-xs tracking-widest uppercase">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
