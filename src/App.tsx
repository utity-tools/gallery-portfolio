import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { Separator } from '@/components/ui/separator'

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Separator className="bg-zinc-800" />
        <About />
        <Separator className="bg-zinc-800" />
        <Projects />
        <Separator className="bg-zinc-800" />
        <Contact />
      </main>
    </Layout>
  )
}

export default App
