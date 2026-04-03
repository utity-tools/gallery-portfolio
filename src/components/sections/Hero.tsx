import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-900 px-6"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Available for work
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
          Creative Developer
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 font-light">
          I build beautiful digital experiences
        </p>

        <p className="max-w-md text-zinc-500 leading-relaxed">
          Focused on crafting modern web applications with attention to detail and performance.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
