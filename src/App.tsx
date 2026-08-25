import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
