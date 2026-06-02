import "@/styles/why.css"
import "@/index.css"

import CardBeam from "@/components/CardBeam"
import { useRef } from "react"
import { TextAnimate } from "@/components/ui/text-animate"

function Why() {
    
    const motionRef = useRef(null)
    
    return (
        <section id="why">
            <TextAnimate animation='blurInUp' by='word' className='site-heading section-title'>
                Why Tectura Global?
            </TextAnimate>
            <TextAnimate animation='blurInUp' by='word' className='site-p section-description'>
                Tectura Global's integration layer connects all building and healthcare systems into a single ecosystem. Thus enabling facilities managers and clinical
                leadership to respond faster, operate smarter, and reduce costs.
            </TextAnimate>
            <CardBeam />
        </section>
    );
}

export default Why;