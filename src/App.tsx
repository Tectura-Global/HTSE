import './styles/global.css'
import CTA from './sections/CTA'
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Why from './sections/Why'
import { useEffect } from 'react'
import Pillars from './sections/Pillars'
import PIMS from './sections/PIMS'

export function App() {

  useEffect(() => {
    document.title = "Tectura Global - Healthcare Technology Ecosystem Solutions"
  })
  return (
    <main>
        <Hero />
        <CTA />
        <Pillars />
        <PIMS />
        <Services />
        {/* <SmartBuilding /> */}
        <Why />
    </main>
  )
}

export default App
