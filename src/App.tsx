import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'

const placeholders = [
  { id: 'about', label: 'About Section' },
  { id: 'projects', label: 'Projects Section' },
  { id: 'contact', label: 'Contact Section' },
]

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        {placeholders.map(({ id, label }) => (
          <section
            key={id}
            id={id}
            className="min-h-screen flex items-center justify-center border-b border-zinc-800"
          >
            <p className="text-zinc-500 text-lg tracking-widest uppercase">{label}</p>
          </section>
        ))}
      </main>
    </Layout>
  )
}

export default App
