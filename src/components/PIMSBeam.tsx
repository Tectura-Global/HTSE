import { useRef } from "react";
import "@/styles/pims-beam.css";

import { AnimatedBeam } from "@/components/ui/animated-beam";

function PIMSBeam() {
    const containerRef = useRef<HTMLDivElement>(null);

    const centerRef = useRef<HTMLDivElement>(null);

    const procurementRef = useRef<HTMLDivElement>(null);
    const installRef = useRef<HTMLDivElement>(null);
    const assetRef = useRef<HTMLDivElement>(null);
    const biomedicalRef = useRef<HTMLDivElement>(null);
    const digitalRef = useRef<HTMLDivElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);
    const disasterRef = useRef<HTMLDivElement>(null);
    const emergencyRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} id="pims-beam">

            <div ref={centerRef} className="pims-node center">
                <h2 className="site-heading">
                    INTEGRATED
                    <br />
                    HEALTHCARE
                    <br />
                    TECHNOLOGY
                    <br />
                    HUB
                </h2>
            </div>

            <div ref={procurementRef} className="pims-node top">
                <p className="site-p">Medical Equipment Procurement</p>
            </div>

            <div ref={installRef} className="pims-node top-right">
                <p className="site-p">Installation & Commissioning</p>
            </div>

            <div ref={assetRef} className="pims-node right">
                <p className="site-p">Asset Tracking & RTLS</p>
            </div>

            <div ref={biomedicalRef} className="pims-node bottom-right">
                <p className="site-p">Biomedical Support Services</p>
            </div>

            <div ref={digitalRef} className="pims-node bottom">
                <p className="site-p">Digital Health Integration</p>
            </div>

            <div ref={fieldRef} className="pims-node bottom-left">
                <p className="site-p">Field Hospitals & Rapid Deployment</p>
            </div>

            <div ref={disasterRef} className="pims-node left">
                <p className="site-p">Disaster & Pandemic Response</p>
            </div>

            <div ref={emergencyRef} className="pims-node top-left">
                <p className="site-p">Emergency Communications & Command Centres</p>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={procurementRef} toRef={centerRef} duration={4} pathWidth={4} />
            <AnimatedBeam containerRef={containerRef} fromRef={installRef} toRef={centerRef} duration={4} pathWidth={4} curvature={-120} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={assetRef} toRef={centerRef} duration={4} pathWidth={4} curvature={-180} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={biomedicalRef} toRef={centerRef} duration={4} pathWidth={4} curvature={120} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={digitalRef} toRef={centerRef} duration={4} pathWidth={4} />
            <AnimatedBeam containerRef={containerRef} fromRef={fieldRef} toRef={centerRef} duration={4} pathWidth={4} curvature={120} />
            <AnimatedBeam containerRef={containerRef} fromRef={disasterRef} toRef={centerRef} duration={4} pathWidth={4} curvature={180} />
            <AnimatedBeam containerRef={containerRef} fromRef={emergencyRef} toRef={centerRef} duration={4} pathWidth={4} curvature={-120} />

        </div>
    );
}

export default PIMSBeam;