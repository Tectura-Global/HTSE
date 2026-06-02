import { FaShieldAlt } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";

const dataPoints = [
  { id: 1,
    title: "Facility Protection & Safety",
    slug: "facility-protection-safety",
    icon: <FaShieldAlt />,
    description: "Protecting patients, staff, and assets with integrated physical security and life safety systems.",
    points: [
      { heading: "Access Control System", body: "Multi-layered access management with role-based permissions and audit trails across all hospital zones." },
      { heading: "Biometric Security", body: "Fingerprint, iris, and facial recognition for secure, touchless identity verification." },
      { heading: "CCTV & Video Analytics", body: "AI-powered video surveillance with real-time threat detection and behaviour analytics." },
      { heading: "Intrusion Detection", body: "24/7 perimeter monitoring with instant alerting and integration to security command centres." },
      { heading: "Fire Detection & Suppression", body: "Addressable FAS systems with suppression integration and evacuation coordination." },
      { heading: "OT Cybersecurity", body: "Protecting operational technology networks from cyber threats unique to healthcare environments." },
    ],
  },
  { id: 2,
    title: "Intelligent Building Operations",
    slug: "intelligent-building-operations",
    icon: <FaGears />,
    description: "Optimising hospital operations through intelligent automation, energy management, and predictive maintenance.",
    points: [
      { heading: "Building Management System (BMS)", body: "Centralised control of HVAC, lighting, power, and MEP systems with real-time dashboards." },
      { heading: "Unified System", body: "Supervisory control and data acquisition for monitoring critical plant equipment and utilities." },
      { heading: "Digitised Maintenance", body: "Digital twin and IoT-powered predictive maintenance reducing downtime and costs." },
      { heading: "Energy & Sustainability", body: "Energy monitoring, reporting, and optimisation to achieve carbon reduction targets." },
      { heading: "Lighting Control", body: "Human-centric and circadian lighting with automated scheduling and occupancy-based control." },
      { heading: "Critical Asset Tracking", body: "Real-time location system (RTLS) for medical equipment, assets, and personnel." },
    ],
  },
  { id: 3,
    title: "Health & Regulatory Standards",
    slug: "health-regulatory-standards",
    icon: <MdOutlineChecklist />,
    description: "Ensuring healthcare facilities meet the highest standards of health, hygiene, and regulatory compliance.",
    points: [
      { heading: "Healthy Building Dashboard", body: "Centralised real-time view of all building health metrics including IAQ, temperature, and occupancy." },
      { heading: "Air Quality Management", body: "Continuous monitoring of CO₂, particulates, VOCs and humidity with automated ventilation control." },
      { heading: "Precision Pressure Control", body: "Room pressurisation for isolation wards, theatres, and ICUs to prevent cross-contamination." },
      { heading: "Thermal Temperature Screening", body: "Non-contact thermal cameras at entry points for fever detection and pandemic preparedness." },
      { heading: "UV Light Filtration", body: "Automated UV-C disinfection integrated into ventilation systems and room cycling protocols." },
      { heading: "Hand Hygiene Compliance", body: "IoT-based monitoring of handwashing compliance with real-time dashboards and alerts for staff." },
    ],
  },
  { id: 4,
    title: "Care Journey Excellence",
    slug: "care-journey-excellence",
    icon: <FaHeartbeat />,
    description: "Enhancing every touchpoint of the patient journey: from arrival to discharge and everything in between.",
    points: [
      { heading: "Visitor Management", body: "Digital check-in, identity verification, badge printing, and visitor tracking across all hospital zones." },
      { heading: "Wayfinding System", body: "Interactive digital kiosks and mobile wayfinding guiding patients through complex hospital layouts." },
      { heading: "Nurse Call System", body: "Integrated nurse call and staff duress with real-time escalation and response tracking." },
      { heading: "Smart Parking", body: "Automated parking guidance, reservations, and ANPR for patients, staff, and emergency vehicles." },
      { heading: "Fall Detection System", body: "AI-based in-room monitoring that detects falls and immediately alerts clinical staff." },
      { heading: "Vitals Monitoring", body: "Continuous wireless patient vitals monitoring integrated into nurse station dashboards." },
    ],
  },
];

export default dataPoints