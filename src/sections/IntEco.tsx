import '@/styles/int-eco.css'
import { OrbitingCircles } from '@/components/ui/orbiting-circles';

function IntEco () {

    return (
        <section id="int-eco">
            <div className="circles-container">
                {/* OUTER RING */}
                <OrbitingCircles
                    radius={380}
                    duration={40}
                    path
                >
                    <p className="site-p orbiting-node">
                        FACILITY PROTECTION & SAFETY
                    </p>
                    <p className="site-p orbiting-node">
                        INTELLIGENT BUILDING OPERATIONS
                    </p>
                </OrbitingCircles>

                {/* INNER RING */}
                <OrbitingCircles
                    radius={150}
                    duration={30}
                    reverse
                    path
                >
                    <p className="site-p orbiting-node">
                        HEALTH & REGULATORY STANDARDS
                    </p>
                    <p className="site-p orbiting-node">
                        CUSTOMIZED JOURNEY
                    </p>
                </OrbitingCircles>

                <div className="orbit-centre">
                    <h2 className="site-heading">
                        Integrated Healthcare Technology &
                        Emergency Response Hub
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default IntEco;