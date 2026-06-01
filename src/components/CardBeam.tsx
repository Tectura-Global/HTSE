import { useRef } from "react"
import '@/styles/cardbeam.css'
import { BorderBeam } from "@/components/ui/border-beam"
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
                <div ref={n1} className="beam-node" />
                <div ref={n2} className="beam-node" />
                <div ref={n3} className="beam-node" />
            </div>

            {/* Center */}
            <div ref={centerRef} className="beam-node center" />

            {/* Right column */}
            <div className="beam-col right">
                <div ref={n4} className="beam-node" />
                <div ref={n5} className="beam-node" />
                <div ref={n6} className="beam-node" />
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={n1} toRef={centerRef} curvature={-120} />
            <AnimatedBeam containerRef={containerRef} fromRef={n2} toRef={centerRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={n3} toRef={centerRef} curvature={120} />
            <AnimatedBeam containerRef={containerRef} fromRef={n4} toRef={centerRef} curvature={-120} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={n5} toRef={centerRef} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={n6} toRef={centerRef} curvature={120} reverse />
        </div>
    )
}

export default CardBeam;