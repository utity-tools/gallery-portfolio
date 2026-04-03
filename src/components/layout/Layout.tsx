import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
