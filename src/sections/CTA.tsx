import '@/styles/CTA.css'
import { AnimatedList } from "@/components/ui/animated-list"
import { LuBrainCircuit } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const descriptionLines = [
    "Tectura Global/Techadome is a company specialising on integration of technology Solutions in Buildings, Healthcare Technology, and Intelligent Infrastructure.",
    "We bridge the gap between cutting-edge technology and real-world operational needs, delivering end-to-end solutions that enhance safety, efficiency, compliance, and patient experience across healthcare facilities.​"
]

const cards = [
    {
        icon: <LuBrainCircuit className='cta-card-icon' />,
        title: "Security-First",
        text: "From managed firewalls to advanced threat protection, we protect what matters most."
    },
    {
        icon: <LuCpu className='cta-card-icon' />,
        title: "Technology Systems",
        text: "We're embedded in the construction process from day one, not bolted on after."
    },
    {
        icon: <LuBrainCircuit className='cta-card-icon' />,
        title: "Integrated Ecosystem",
        text: "SD-WAN, NOC-as-a-Service, and enterprise networking keep your business running"
    },
]

function CTA () {
    const listRef = useRef(null)
    const headerRef = useRef(null)
    const cardsRef = useRef(null)

    const isInView = useInView(listRef, { once: true, margin: "-500px" })
    const headerInView = useInView(headerRef, { once: true, margin: "-500px" })
    const cardsInView = useInView(cardsRef, { once: true, margin: "-500px" })

    return (
        <section id="cta">
            <header ref={headerRef}>
                <motion.h1
                    className="site-heading"
                    initial={{ opacity: 0, y: 60 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Tectura Global's<br />
                    <span>Identity</span>
                </motion.h1>

                <div>
                    {descriptionLines.map((line, i) => (
                        <motion.p
                            key={i}
                            className="site-p"
                            initial={{ opacity: 0, y: 30 }}
                            animate={headerInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
            </header>

            <div className="cta-list-wrapper" ref={listRef}>
                {isInView && (
                    <AnimatedList className='cta-list'>
                        <div className="cta-list-item">
                            <LuBadgeCheck className='cta-list-icon' />
                            <p className="site-p">End-to-end system integration</p>
                        </div>
                        <div className="cta-list-item">
                            <LuBadgeCheck className='cta-list-icon' />
                            <p className="site-p">Healthcare-specific expertise</p>
                        </div>
                        <div className="cta-list-item">
                            <LuBadgeCheck className='cta-list-icon' />
                            <p className="site-p">Cybersecurity & compliance</p>
                        </div>
                        <div className="cta-list-item">
                            <LuBadgeCheck className='cta-list-icon' />
                            <p className="site-p">Real-time monitoring & analytics</p>
                        </div>
                        <div className="cta-list-item">
                            <LuBadgeCheck className='cta-list-icon' />
                            <p className="site-p">Scalable smart building platforms</p>
                        </div>
                    </AnimatedList>
                )}
            </div>

            <div className="cta-extension" ref={cardsRef}>
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="cta-card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                    >
                        {card.icon}
                        <div className="cta-content">
                            <h3 className="cta-title site-heading">{card.title}</h3>
                            <p className="cta-text site-p">{card.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default CTA;