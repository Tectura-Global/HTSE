import "@/styles/why.css"
import "@/index.css"

import CardBeam from "@/components/CardBeam"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function Why() {
    
    const motionRef = useRef(null)
    const isInView = useInView(motionRef, { once: true })
    
    return (
        <section id="why">
            <motion.h1
                ref={motionRef}
                className="site-heading section-title"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Why Tectura Global?
            </motion.h1>
            <p className="site-p section-description">
                Tectura Global's integration layer connects all building and healthcare systems into a single ecosystem. Thus enabling facilities managers and clinical
                leadership to respond faster, operate smarter, and reduce costs.
            </p>
            <CardBeam />
        </section>
    );
}

export default Why;