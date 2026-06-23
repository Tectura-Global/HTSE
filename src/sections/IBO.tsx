import "@/styles/why.css"
import "@/index.css"

import IBOBeam from "@/components/IBOBeam"
import { TextAnimate } from "@/components/ui/text-animate"

function IBO() {
    
    return (
        <section id="why">
            <h1 className='site-heading section-title'>
                Intelligent Building Operations
            </h1>
            <TextAnimate animation='blurInUp' by='word' className='site-p section-description'>
                Tectura Global's integration layer connects all building and healthcare systems into a single ecosystem. Thus enabling facilities managers and clinical
                leadership to respond faster, operate smarter, and reduce costs.
            </TextAnimate>
            <IBOBeam />
        </section>
    );
}

export default IBO;