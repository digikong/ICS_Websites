import {
  Award,
  ShieldCheck,
  Globe2,
  Headphones,
  Truck,
} from "lucide-react";
// import Contact from "./pages/Contact";
import { Link } from "react-router-dom";

const reasons = [
  {
    title: "Premium Quality",
    text: "We ensure the highest quality standards in every product.",
    icon: Award,
  },
  {
    title: "ISO Certified",
    text: "Our facilities are ISO certified and globally accepted.",
    icon: ShieldCheck,
  },
  {
    title: "Global Supply",
    text: "Strong distribution network across 20+ countries.",
    icon: Globe2,
  },
 {
  title: "Technical Support",
  text: "Experienced technical team always ready to assist you.",
  icon: Headphones,
  path: "/contact",
},
  {
    title: "On-Time Delivery",
    text: "Efficient logistics ensure timely delivery, every time.",
    icon: Truck,
  },
  {
    title: "Best Prices",
    text: "Competitive, transparent pricing for every requirement.",
    icon: Globe2,
  },
];

function WhyChoose() {
  return (
    <section className="why-choose" id="about">
      <div className="site-container">
        <div className="section-title">
          <h2>WHY CHOOSE US?</h2>
          <span></span>
        </div>

        <div className="why-box">
        {reasons.map(({ title, text, icon: Icon, path }) => (
        <a
          href={path || "/contact"}
          className="why-item"
          key={title}
        >
          <div className="why-icon">
            <Icon size={40} strokeWidth={1.6} />
          </div>

          <div className="why-content">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </a>
      ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;