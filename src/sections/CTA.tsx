import '@/styles/CTA.css'
import { MagicCard } from "@/components/ui/magic-card"
import { AnimatedList } from "@/components/ui/animated-list"
import { LuBrainCircuit } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";

function CTA () {

    return (
        <section id="cta">
            <header>
                <h1 className="site-heading">
                    Tectura Global's<br></br>                
                    <span>Identity</span>
                </h1>
                <p className="site-p">
                    Tectura Global/Techadome is a company specialising on integration of technology Solutions in Buildings, Healthcare Technology, and Intelligent Infrastructure.
                    We bridge the gap between cutting-edge technology and real-world operational needs, delivering end-to-end solutions that enhance safety, efficiency, compliance, and patient experience across healthcare facilities.​
                </p>
            </header>
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
            <div className="cta-extension">
                <div className="cta-card">
                    <LuBrainCircuit className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title site-heading">
                            Security-First
                        </h3>
                        <p className="cta-text site-p">
                            From managed firewalls to advanced threat protection, we protect what matters most.
                        </p>
                    </div>
                </div>
                <div className="cta-card">
                    <LuCpu className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title site-heading">
                            Technology Systems
                        </h3>
                        <p className="cta-text site-p">
                            We're embedded in the construction process from day one, not bolted on after.
                        </p>
                    </div>
                </div>
                <div className="cta-card">
                    <LuBrainCircuit className='cta-card-icon' />  
                    <div className="cta-content">
                        <h3 className="cta-title site-heading">
                            Integrated Ecosystem
                        </h3>
                        <p className="cta-text site-p">
                            SD-WAN, NOC-as-a-Service, and enterprise networking keep your business running
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;