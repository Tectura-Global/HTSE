import './styles/global.css'
import CTA from './sections/CTA'
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Why from './sections/Why'
import { useEffect } from 'react'

export function App() {

  useEffect(() => {
    document.title = "Tectura Global - Healthcare Technology Ecosystem Solutions"
  })
  return (
    <main>
        <Hero />
        <CTA />
        <Services />
        {/* <SmartBuilding /> */}
        <Why />
    </main>
  )
}

export default App
