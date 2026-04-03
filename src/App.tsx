import Layout from './components/layout/Layout'

const sections = [
  { id: 'hero', label: 'Hero Section' },
  { id: 'about', label: 'About Section' },
  { id: 'projects', label: 'Projects Section' },
  { id: 'contact', label: 'Contact Section' },
]

function App() {
  return (
    <Layout>
      <main>
        {sections.map(({ id, label }) => (
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
