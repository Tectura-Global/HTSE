import "@/styles/dio-hypermenu.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DIOdata from "@/data/DIOdata";

function DIOHypermenu() {
    const [activePanel, setActivePanel] = useState(DIOdata[0]);

    return (
        <section id="dio-hypermenu">
            <div className="hypermenu-wrapper">

                <aside className="hypermenu-sidebar">

                    <div className="header">

                        <h2 className={`site-heading title ${activePanel.slug}`}>
                            {activePanel.title}

                            {activePanel.icon && (
                                <span>{activePanel.icon}</span>
                            )}
                        </h2>

                        <p className="site-p description">
                            {activePanel.description}
                        </p>

                    </div>

                    <ul className="hypermenu-list">

                        {DIOdata.map((item) => (

                            <li
                                key={item.id}
                                className={`hypermenu-list-item ${
                                    activePanel.id === item.id ? "active" : ""
                                }`}
                                onMouseEnter={() => setActivePanel(item)}
                            >

                                <p className="site-p">
                                    {item.title}
                                </p>

                            </li>

                        ))}

                    </ul>

                </aside>

                <AnimatePresence mode="wait">

                    <motion.div
                        className="hypermenu-panels"
                        key={activePanel.id}
                        initial={{
                            opacity: 0,
                            scale: .98
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: .98
                        }}
                        transition={{
                            duration: .25,
                            ease: "easeOut"
                        }}
                    >

                        {activePanel.points.map((point, index) => (

                            <motion.div
                                key={index}
                                className="hypermenu-panel"
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    delay: index * .08,
                                    duration: .3
                                }}
                            >

                                <motion.h3
                                    className="site-heading"
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: index * .08 + .08
                                    }}
                                >
                                    {point.heading}
                                </motion.h3>

                                <motion.p
                                    className="site-p"
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: index * .08 + .15
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
    );
}

export default DIOHypermenu;