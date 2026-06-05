import { useRef } from "react"
import '@/styles/cardbeam.css'
import { ShineBorder } from "@/components/ui/shine-border"
import { AnimatedBeam } from "@/components/ui/animated-beam"

function CardBeam() {
    const containerRef = useRef<HTMLDivElement>(null)
    const centerRef = useRef<HTMLDivElement>(null)
    const n1 = useRef<HTMLDivElement>(null)
    const n2 = useRef<HTMLDivElement>(null)
    const n3 = useRef<HTMLDivElement>(null)
    const n4 = useRef<HTMLDivElement>(null)
    const n5 = useRef<HTMLDivElement>(null)
    const n6 = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="card-beam-container">
            {/* Left column */}
            <div className="beam-col left">
                <div ref={n1} className="beam-node">
                    <p className="site-p">Data driven Decisions</p>
                </div>
                <div ref={n2} className="beam-node">
                    <p className="site-p">AI & Intelligent Automation</p>
                </div>
                <div ref={n3} className="beam-node">
                    <p className="site-p">Smart Building & Sustainability Solutions</p>
                </div>
            </div>

            {/* Center */}
            <div ref={centerRef} className="beam-node center">
                <img src="tectura.png" className="center-node-logo"/>
                <ShineBorder borderWidth={4} shineColor={'#009a83'} />
            </div>

            {/* Right column */}
            <div className="beam-col right">
                <div ref={n4} className="beam-node">
                    <p className="site-p">End-to-End Delivery</p>
                </div>
                <div ref={n5} className="beam-node">
                    <p className="site-p">Vendor Agnostic Integration</p>
                </div>
                <div ref={n6} className="beam-node">
                    <p className="site-p">Rapid Response Infrastructure Deployment</p>
                </div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={n1} toRef={centerRef} curvature={-160} duration={4} pathWidth={4}/>
            <AnimatedBeam containerRef={containerRef} fromRef={n2} toRef={centerRef} duration={4} pathWidth={4}/>
            <AnimatedBeam containerRef={containerRef} fromRef={n3} toRef={centerRef} curvature={160} duration={4} pathWidth={4}/>
            <AnimatedBeam containerRef={containerRef} fromRef={n4} toRef={centerRef} curvature={-160} reverse duration={4} pathWidth={4}/>
            <AnimatedBeam containerRef={containerRef} fromRef={n5} toRef={centerRef} reverse duration={4} pathWidth={4}/>
            <AnimatedBeam containerRef={containerRef} fromRef={n6} toRef={centerRef} curvature={160} reverse duration={4} pathWidth={4}/>
        </div>
    )
}

export default CardBeam;