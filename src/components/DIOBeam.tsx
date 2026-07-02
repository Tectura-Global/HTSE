import { useRef } from "react";
import "@/styles/diobeam.css";

import { ShineBorder } from "@/components/ui/shine-border";
import { AnimatedBeam } from "@/components/ui/animated-beam";

function DIOBeam() {
    const containerRef = useRef<HTMLDivElement>(null);

    const centerRef = useRef<HTMLDivElement>(null);

    const n1 = useRef<HTMLDivElement>(null);
    const n2 = useRef<HTMLDivElement>(null);
    const n3 = useRef<HTMLDivElement>(null);
    const n4 = useRef<HTMLDivElement>(null);
    const n5 = useRef<HTMLDivElement>(null);

    return (
        <section id="dio-beam">
            <div
                ref={containerRef}
                className="dio-beam-container"
            >
                <div
                    ref={centerRef}
                    className="dio-node center"
                >
                    <img
                        src="/tectura.png"
                        className="center-node-logo"
                    />

                    <ShineBorder
                        borderWidth={4}
                        shineColor="#009a83"
                    />
                </div>

                <div ref={n1} className="dio-node top">
                    <p className="site-p">
                        Intelligent Building Operations
                    </p>
                </div>

                <div ref={n2} className="dio-node upper-right">
                    <p className="site-p">
                        Energy, Sustainability &
                        Resource Intelligence
                    </p>
                </div>

                <div ref={n3} className="dio-node lower-right">
                    <p className="site-p">
                        Connected Technology &
                        Digital Experience Solutions
                    </p>
                </div>

                <div ref={n4} className="dio-node bottom">
                    <p className="site-p">
                        Intelligent Safety,
                        Security &
                        Resilience Systems
                    </p>
                </div>

                <div ref={n5} className="dio-node upper-left">
                    <p className="site-p">
                        Data Intelligence &
                        Predictive Operations
                    </p>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={n1}
                    duration={4}
                    pathWidth={4}
                    curvature={0}
                />

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={n2}
                    duration={4}
                    pathWidth={4}
                    curvature={0}
                />

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={n3}
                    duration={4}
                    pathWidth={4}
                    curvature={0}
                />

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={n4}
                    duration={4}
                    pathWidth={4}
                    curvature={0}
                />

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={n5}
                    duration={4}
                    pathWidth={4}
                    curvature={0}
                />
            </div>
        </section>
    );
}

export default DIOBeam;