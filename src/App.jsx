import { useState } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import MouseGlow from './components/MouseGlow'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Events from './components/sections/Events'
import Timeline from './components/sections/Timeline'
import Prizes from './components/sections/Prizes'
import Coordinators from './components/sections/Coordinators'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false)

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingDone(true)} />
      {loadingDone && (
        <>
          <ScrollProgress />
          <MouseGlow />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Events />
            <Timeline />
            <Prizes />
            <Coordinators />
            <Contact />
            <Footer />
          </main>
          <BackToTop />
        </>
      )}
    </>
  )
}
