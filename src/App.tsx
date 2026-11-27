import { useEffect } from 'react'
import { UIProvider } from './ui'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Marquee from './components/Marquee'
import Stack from './components/Stack'
import Journey from './components/Journey'
import Projects from './components/Projects'
import About from './components/About'
import MoreProjects from './components/MoreProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import WhatsAppFab from './components/WhatsAppFab'
import MouseGlow from './components/MouseGlow'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const params = new URLSearchParams(window.location.search)
  const noAnim = params.has('noanim')

  // Preview helper: ?scrollto=2400 scrolls to a pixel offset on load (used for screenshots).
  useEffect(() => {
    const y = parseInt(params.get('scrollto') || '', 10)
    if (!Number.isNaN(y) && y > 0) {
      const t = window.setTimeout(() => window.scrollTo({ top: y, behavior: 'auto' }), 120)
      return () => window.clearTimeout(t)
    }
  }, [])
  return (
    <UIProvider>
      {!noAnim && <Preloader />}

      {/* ambient teal glows */}
      <div className="fixed rounded-full blur-[140px] pointer-events-none z-0 opacity-50 w-[480px] h-[480px] bg-[#2dd4bf33] -top-[120px] -end-[120px]" />
      <div className="fixed rounded-full blur-[140px] pointer-events-none z-0 opacity-50 w-[420px] h-[420px] bg-[#1f5c4d66] -bottom-[100px] -start-[140px]" />
      <MouseGlow />
      <ScrollProgress />

      <div className="relative z-[1]">
        <Nav />
        <main id="top">
          <Hero />
          <Services />
          <Marquee />
          <Stack />
          <Journey />
          <Projects />
          <About />
          <MoreProjects />
          <Contact />
        </main>
        <Footer />
      </div>

      <ChatWidget />
      <WhatsAppFab />
    </UIProvider>
  )
}
