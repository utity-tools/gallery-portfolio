const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-xl tracking-tight">
          GP.
        </a>
        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-zinc-400 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
