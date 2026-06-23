import '../styles/PIMS.css'
import "@/styles/hypermenu-pims.css"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import PIMSData from '@/data/PIMSdata'

interface Point {
    heading: string
    body: string
}

interface DataPoint {
    id: number
    title: string
    slug: string
    icon: React.ReactNode
    description: string
    points: Point[]
}

function PIMS() {
    const dataPoints: DataPoint[] = PIMSData

    const [activePanel, setActivePanel] = useState<DataPoint>(
        dataPoints[0]
    )

    return (
        <section id="hypermenu" className='PIMS'>
            <div className="hypermenu-wrapper">
                <aside id="hypermenu-sidebar">
                    <div className="header">
                        <h2 className={`site-heading title ${activePanel.slug}`}>
                            {activePanel.title}
                            <span>{activePanel.icon}</span>
                        </h2>

                        <p className={`description site-p ${activePanel.slug}`}>
                            {activePanel.description}
                        </p>
                    </div>

                    <ul id="hypermenu-list">
                        {dataPoints.map((dataPoint) => (
                            <li
                                key={dataPoint.id}
                                className={`hypermenu-list-item ${dataPoint.slug} ${
                                    activePanel.id === dataPoint.id ? "active" : ""
                                }`}
                                onMouseEnter={() => setActivePanel(dataPoint)}
                            >
                                <p className="site-p">
                                    {dataPoint.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </aside>

                <AnimatePresence mode="wait">
                    <motion.div
                        id="hypermenu-panels"
                        className='PIMS'
                        key={activePanel.id}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                    >
                        {activePanel.points.map((point, index) => (
                            <motion.div
                                key={index}
                                id={`panel-${index + 1}`}
                                className={`hypermenu-panel ${activePanel.slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                    ease: "easeOut",
                                }}
                            >
                                <motion.h3
                                    className={`site-heading ${activePanel.slug}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05 + 0.1,
                                    }}
                                >
                                    {point.heading}
                                </motion.h3>

                                <motion.p
                                    className="site-p"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05 + 0.15,
                                    }}
                                >
                                    {point.body}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default PIMS