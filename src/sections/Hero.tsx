import "@/styles/hero.css"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import MagicRings from '@/components/MagicRings';

export default function Hero() {

    const ref = useRef(null)
    const clickRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        const interval = setInterval(() => {
            clickRef.current?.dispatchEvent(
                new MouseEvent("click", { bubbles: true })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero">
            <div className="content">
                <h1 className="site-heading">
                    
                </h1>
                <motion.h1
                    ref={ref}
                    className="site-heading text-shadow-lg"
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Integrated Technology<br></br>
                    <span>Ecosystem Solutions</span>
                </motion.h1>
                <p className="site-p">
                    Smart Buildings · Intelligent Healthcare · Integrated Technology
                </p>
            </div>
            <MagicRings
                color="#2e3192"
                colorTwo="#0c7ec2"
                ringCount={6}
                speed={1}
                attenuation={30}
                lineThickness={2}
                baseRadius={0.22}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={4.5}
                noiseAmount={0}
                rotation={0}
                ringGap={1.5}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                mouseInfluence={0.2}
                hoverScale={1.1}
                parallax={0.05}
                clickBurst
            />
        </section>
    )
}