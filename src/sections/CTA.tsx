import '@/styles/CTA.css'
import '@/index.css'
import { AnimatedList } from "@/components/ui/animated-list"
import { LuBrainCircuit } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Marquee } from "@/components/ui/marquee"
import { TextAnimate } from "@/components/ui/text-animate"


const cards = [
    {
        icon: <LuBrainCircuit className='cta-card-icon' />,
        title: "Core Pillars",
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

    const isInView = useInView(listRef, { once: true, margin: "-200px" })
    const headerInView = useInView(headerRef, { once: true, margin: "-200px" })
    const cardsInView = useInView(cardsRef, { once: true, margin: "-200px" })

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

                <TextAnimate animation='blurInUp' by='word' className='site-p'>
                    Tectura Global/Techadome is a company specialising on integration of technology Solutions in Buildings, Healthcare Technology, and Intelligent Infrastructure.
                    We bridge the gap between cutting-edge technology and real-world operational needs, delivering end-to-end solutions that enhance safety, efficiency, compliance, and patient experience across healthcare facilities.
                </TextAnimate>
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

            <Marquee className="cta-extension">
                {cards.map((card, i) => (
                    <div key={i} className="cta-card">
                        {card.icon}

                        <div className="cta-content">
                            <h3 className="cta-title site-heading">
                            {card.title}
                            </h3>

                            <p className="cta-text site-p">
                            {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}

export default CTA;