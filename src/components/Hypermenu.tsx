import "@/styles/hypermenu.css"
import { useState } from 'react';

interface Point {
    heading: string;
    body: string;
}

interface DataPoint {
    id: number;
    title: string;
    slug: string;
    description: string;
    points: Point[];
}

function Hypermenu({ dataPoints }: { dataPoints: DataPoint[] }) {
    const [activePanel, setActivePanel] = useState(dataPoints[0]);

    return (
        <section id="hypermenu">
            <div className="hypermenu-wrapper">
                <aside id="hypermenu-sidebar">
                    <div className='header'>
                        <h2 className="site-heading title facility-protection-safety">{activePanel.title}</h2>
                        <p className='description site-p'>
                            {activePanel.description}
                        </p>
                    </div>
                    <ul id="hypermenu-list">
                        {dataPoints.map((dataPoint) => (
                            <li
                                key={dataPoint.id}
                                className={`hypermenu-list-item ${dataPoint.slug} ${activePanel.id === dataPoint.id ? 'active' : ''}`}
                                onMouseEnter={() => setActivePanel(dataPoint)}
                            >
                                <p className="site-p">{dataPoint.title}</p>
                            </li>
                        ))}
                    </ul>
                </aside>
                <div
                    id="hypermenu-panels"
                    key={activePanel.id}
                    className='animate__animated animate__fadeIn'
                >
                    {activePanel.points.map((point, index) => (
                        <div key={index} id={`panel-${index + 1}`} className='hypermenu-panel'>
                            <h3 className="site-heading">{point.heading}</h3>
                            <p className="site-p">{point.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hypermenu;