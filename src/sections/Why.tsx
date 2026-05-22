import "@/styles/why.css"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function Why() {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section id="why">
            <motion.h1
                ref={ref}
                className="site-heading"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Why Tectura Global?
            </motion.h1>
            <div className="value-grid">

            </div>
        </section>
    );
}

export default Why;