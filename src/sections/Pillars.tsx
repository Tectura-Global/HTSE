import '../styles/pillars.css'
import BorderGlow from '@/components/BorderGlow';
import { TextAnimate } from "@/components/ui/text-animate"

function Pillars() {

    return (
        <section id="pillars">
            <div className="header">
                <h1 className='site-heading section-title'>
                    Our Core Pillars
                </h1>
                <TextAnimate animation='blurInUp' by='line' className='site-p'>
                    Tectura Global's integration layer connects all building and healthcare systems into a single ecosystem. Thus enabling facilities managers and clinical
                    leadership to respond faster, operate smarter, and reduce costs.
                </TextAnimate>
            </div>
            <div className="content">
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#2e3192"
                    borderRadius={28}
                    glowRadius={67}
                    glowIntensity={2}
                    coneSpread={25}
                    animated
                    colors={['#2e3192', '#38bdf8']}
                    >
                    <div style={{ padding: '2em' }}>
                        <h2 className="site-heading">End to End Needs Analysis & Customization</h2>
                    </div>
                </BorderGlow>
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#2e3192"
                    borderRadius={28}
                    glowRadius={67}
                    glowIntensity={2}
                    coneSpread={25}
                    animated
                    colors={['#2e3192', '#38bdf8']}
                    >
                    <div style={{ padding: '2em' }}>
                        <h2 className="site-heading">Compliance & Regulatory Standards</h2>
                    </div>
                </BorderGlow>
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#2e3192"
                    borderRadius={28}
                    glowRadius={67}
                    glowIntensity={2}
                    coneSpread={25}
                    animated
                    colors={['#2e3192', '#38bdf8']}
                    >
                    <div style={{ padding: '2em' }}>
                        <h2 className="site-heading">Intelligent Building Operations</h2>
                    </div>
                </BorderGlow>
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#2e3192"
                    borderRadius={28}
                    glowRadius={67}
                    glowIntensity={2}
                    coneSpread={25}
                    animated
                    colors={['#2e3192', '#38bdf8']}
                    >
                    <div style={{ padding: '2em' }}>
                        <h2 className="site-heading">Facility Protection & Safety</h2>
                    </div>
                </BorderGlow>
            </div>
        </section>
    )
}

export default Pillars