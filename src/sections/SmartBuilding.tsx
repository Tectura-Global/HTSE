import "@/styles/smart-building.css"
import "@/index.css"

import { OrbitingCircles } from "@/components/ui/orbiting-circles"

function SmartBuilding () {

    return (
        <section id="smart-building">
            <h2 className="site-heading">
                Smart Building Integration
            </h2>
            <div className="orbit-wrapper">
                <div className="orbit-graphic">
                    <OrbitingCircles radius={500} speed={.5}>
                        <p className="site-p">Energy & Sustainability</p>
                        <p className="site-p">BMS</p>
                        <p className="site-p">Security & Access</p>
                        <p className="site-p">FAS & Life Safety</p>
                        <p className="site-p">RTLS & Asset Track</p>
                        <p className="site-p">Patient Experience</p>
                        <p className="site-p">Compliance & IAQ</p>
                        <p className="site-p">CyberSecurity</p>
                    </OrbitingCircles>
                </div>
            </div>
        </section>
    )
}

export default SmartBuilding