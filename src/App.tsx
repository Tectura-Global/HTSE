import './index.css'
import './styles/global.css'
import IBO from './sections/IBO'
import CTA from './sections/CTA'
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Why from './sections/Why'
import { useEffect } from 'react'
import Pillars from './sections/Pillars'
import PIMS from './sections/PIMS'
import IntEco from './sections/IntEco'
import PIMSBeam from './components/PIMSBeam'
import DIOBeam from './components/DIOBeam'
import DIOHypermenu from './sections/DIOHypermenu'

export function App() {

  useEffect(() => {
    document.title = "Tectura Global - Healthcare Technology Ecosystem Solutions"
  })
  return (
    <main>
        <Hero />
        <CTA />
        <Pillars />
        <IBO />
        <IntEco />
        <Services />
        <DIOBeam />
        <DIOHypermenu />
        {/* <SmartBuilding /> */}
        <PIMSBeam />
        <PIMS />
        <Why />
    </main>
  )
}

export default App
