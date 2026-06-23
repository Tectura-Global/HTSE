import '@/styles/CTA.css'
import '@/index.css'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TextAnimate } from "@/components/ui/text-animate"

function CTA () {
    const headerRef = useRef(null)

    const headerInView = useInView(headerRef, { once: true, margin: "-200px" })

    return (
        <section id="cta">
            <header ref={headerRef}>
                <motion.h1
                    className="site-heading section-title"
                    initial={{ opacity: 0, y: 60 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Tectura Global's<br />
                    <span>Identity</span>
                </motion.h1>

                <TextAnimate animation='blurInUp' by='word' className='site-p'>
                    Tectura Global/Techadome is a company specialising on integration of technology Solutions in Buildings, Healthcare Technology, and Intelligent Infrastructure.
                    We bridge the gap between cutting-edge technology and real-world operational needs, delivering end-to-end solutions that enhance safety, efficiency, compliance, and patient experience across healthcare facilities.
                </TextAnimate>
            </header>
        </section>
    )
}

export default CTA;