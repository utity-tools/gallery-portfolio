# Gallery Portfolio

Modern developer portfolio built with the 2026 frontend stack.

## Tech Stack

- **React 19** — UI library with concurrent features
- **TypeScript** — Static typing for safer, more maintainable code
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS with the new Vite plugin
- **shadcn/ui** — Accessible component primitives built on Radix UI with the Vega preset

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, Layout wrapper
│   ├── sections/    # Hero, About, Projects, Contact
│   └── ui/          # shadcn/ui reusable components
├── data/            # Static mock content
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── types/           # TypeScript interfaces and types
```

## Features

- 📌 Fixed navbar with backdrop blur and smooth scroll
- ✨ Hero section with animated availability dot and CTA buttons
- 🗂 Projects grid with cards, tags and links
- 👤 About section with stats and skills grid
- 📬 Contact section with info card
- 🔗 Footer
- 📱 Fully responsive dark theme
- 🌿 Professional Git workflow with feature branches

## Git Workflow

- `main` — stable, production-ready code only
- `setup/*` — configuration and tooling branches
- `feat/*` — one branch per feature, merged to main when complete

Each feature is developed in isolation on its own branch and merged into `main` via pull request once complete and reviewed.

## Getting Started

```bash
git clone https://github.com/your-username/gallery-portfolio.git
cd gallery-portfolio
npm install
npm run dev
```

## License

MIT
