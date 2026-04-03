import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description:
      'A full-featured admin dashboard for managing products, orders, and analytics with real-time data updates.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Interface',
    description:
      'A sleek conversational UI built on top of a language model API, with streaming responses and conversation history.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel AI SDK'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Design System',
    description:
      'A component library and design token system documenting reusable UI primitives with live interactive examples.',
    tags: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'SaaS Landing Page',
    description:
      'A high-conversion marketing site with animated sections, pricing table, and waitlist form backed by a serverless API.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Resend'],
    github: '#',
    live: '#',
    featured: false,
  },
]
