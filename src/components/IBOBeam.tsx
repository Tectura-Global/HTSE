import { useRef } from "react"
import "@/styles/ibo-beam.css"

import { AnimatedBeam } from "@/components/ui/animated-beam"

function IBOBeam() {
    const containerRef = useRef<HTMLDivElement>(null)

    const centerRef = useRef<HTMLDivElement>(null)

    const energyRef = useRef<HTMLDivElement>(null)
    const bmsRef = useRef<HTMLDivElement>(null)
    const safetyRef = useRef<HTMLDivElement>(null)
    const automationRef = useRef<HTMLDivElement>(null)
    const rtlsRef = useRef<HTMLDivElement>(null)
    const customerRef = useRef<HTMLDivElement>(null)
    const cyberRef = useRef<HTMLDivElement>(null)
    const complianceRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="ibo-container">

            <div ref={centerRef} className="ibo-node center">
                <h2 className="site-heading">
                    INTELLIGENT
                    BUILDING
                    OPERATIONS
                </h2>
            </div>

            <div ref={energyRef} className="ibo-node top">
                <p className="site-p">
                    Energy Management Systems
                </p>
            </div>

            <div ref={bmsRef} className="ibo-node top-left">
                <p className="site-p">
                    BMS Connectivity & Integration
                </p>
            </div>

            <div ref={safetyRef} className="ibo-node left">
                <p className="site-p">
                    Safety, Security & Access
                </p>
            </div>

            <div ref={automationRef} className="ibo-node bottom-left">
                <p className="site-p">
                    Automation & Intelligent Control
                </p>
            </div>

            <div ref={rtlsRef} className="ibo-node bottom">
                <p className="site-p">
                    RTLS & Asset Track
                </p>
            </div>

            <div ref={customerRef} className="ibo-node bottom-right">
                <p className="site-p">
                    Customer Experience
                </p>
            </div>

            <div ref={cyberRef} className="ibo-node top-right">
                <p className="site-p">
                    Cyber Security
                </p>
            </div>

            <div ref={complianceRef} className="ibo-node right">
                <p className="site-p">
                    Compliance & IAQ
                </p>
            </div>

            {/* BEAMS */}

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={energyRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={bmsRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={safetyRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={automationRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={rtlsRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={customerRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
                reverse
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={cyberRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
                reverse
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={complianceRef}
                toRef={centerRef}
                duration={4}
                pathWidth={4}
                reverse
            />

        </div>
    )
}

export default IBOBeam