export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-zinc-950 py-32 px-6 flex items-center">
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-4">
          <span className="text-zinc-500 text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's work together</h2>
          <p className="text-zinc-400">
            I'm currently available for freelance projects and full-time positions.
          </p>
        </div>

        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col text-left">
          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-500 text-sm">Email</span>
            <span className="text-white">hello@portfolio.dev</span>
          </div>
          <div className="border-t border-zinc-800" />
          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-500 text-sm">Based in</span>
            <span className="text-white">Madrid, Spain</span>
          </div>
          <div className="border-t border-zinc-800" />
          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-500 text-sm">Status</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-white">Available for work</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
            GitHub ↗
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
