import '../styles/pillars.css'
import { TextAnimate } from "@/components/ui/text-animate"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

function Pillars() {

    return (
        <section id="pillars">
            <div className="header">
                <TextAnimate animation='blurInUp' by='word' className='site-heading section-title'>
                    Our Core Pillars
                </TextAnimate>
            </div>
            <div className="content">
                <div className="orbit-wrapper">
                    <div className="orbit-object">
                        <OrbitingCircles radius={400} className='orbit-node'>
                            <span className='site-p'>
                                End to End Needs Analysis & Customization
                            </span>
                            <span className='site-p'>
                                Compliance & Regulatory Standards
                            </span>
                            <span className='site-p'>
                                Intelligent Building Operations

                            </span>
                            <span className='site-p'>
                                Facility Protection & Safety
                            </span>
                        </OrbitingCircles>
                    </div>
                </div>
                <div className="section-description">
                    <TextAnimate animation='blurInUp' by='line' className='site-p'>
                        Tectura Global's integration layer connects all building and healthcare systems into a single ecosystem. Thus enabling facilities managers and clinical
                        leadership to respond faster, operate smarter, and reduce costs.
                    </TextAnimate>
                </div>
            </div>
        </section>
    )
}

export default Pillars