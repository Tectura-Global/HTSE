import "@/styles/hero.css"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import MagicRings from '@/components/MagicRings';

export default function Hero() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section id="hero">
            <div className="content">
                <h1 className="site-heading">
                    
                </h1>
                <motion.h1
                    ref={ref}
                    className="site-heading"
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Healthcare Technology<br></br>
                    <span>Ecosystem Solutions</span>
                </motion.h1>
                <p className="site-p">
                    Smart Buildings · Intelligent Healthcare · Integrated Technology
                </p>
            </div>
            <MagicRings
                color="#009a83"
                colorTwo="#1f88f1"
                ringCount={6}
                speed={1}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.35}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={0}
                noiseAmount={0.1}
                rotation={0}
                ringGap={1.5}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                mouseInfluence={0.2}
                hoverScale={1.2}
                parallax={0.05}
                clickBurst={true}
            />
        </section>
    )
}