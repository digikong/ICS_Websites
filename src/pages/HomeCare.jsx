import { useMemo, useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Shirt,
  Home,
  Leaf,
  Globe2,
} from "lucide-react";

import CleaningImg from "../assets/Cleaning.png";
import TowelsImg from "../assets/Towels.png";
import LaundryImg from "../assets/Laundry.png";
import GlobalImg from "../assets/Global.png";


import "./HomeCare.css";
const heroFeatures = [
  { icon: Leaf, title: "Effective", subtitle: "Formulations" },

  { icon: ShieldCheck, title: "Safe &", subtitle: "Reliable" },

  { icon: Home, title: "Cleanser", subtitle: "Living" },
  
  { icon: Globe2, title: "Sustainable", subtitle: "Tomorrow" },
  
];

const featureCards = [
  {
    icon: Sparkles,
    title: "Cleaning Ingredients",
    text: "High-performance surfactants and functional chemicals.",
  },
  {
    icon: Shirt,
    title: "Fabric Care Solutions",
    text: "Ingredients for better wash performance and fabric care.",
  },
  {
    icon: Home,
    title: "Surface Care Chemicals",
    text: "Solutions for clean and hygienic living spaces.",
  },
  {
    icon: Leaf,
    title: "Home Hygiene Products",
    text: "Ingredients for a safer and fresher home.",
  },
];

function HomeCare() {
  return (
    <main className="HomeCare-page">
      <section className="HomeCare-hero">
        <img
          className="HomeCare-hero-bg"
          src={CleaningImg}
          alt="Home Care Innovative Ingredients for A More Confidient You High-quality
          specially chemicals and cosmetic ingredients for skincare,haircare, personal hygiene and beauty formulations."
        />

        <div className="HomeCare-hero-overlay" />

        <div className="HomeCare-hero-inner">
          <div className="HomeCare-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>Industries</span>
            <span>›</span>
            <span>Home Care</span>
          </div>

          <div className="HomeCare-hero-row">
            <div className="HomeCare-hero-copy">
              <h2>Home Care</h2>
              <h3>
                Cleaning Today
                <br />
                 for a Healthier Tomorrow
              </h3>
              <p>
                High-performance ingredients  and specialty chemicals,
                <br />
                for household cleaning.fabric care and Home hygiene applications.
              </p>
              {/* <button className="HomeCare-quote-btn" type="button">
                Get a Quote
                <ArrowRight size={16} />
              </button> */}
            </div>

            <div className="HomeCare-hero-aside">
              <span>Everyday</span>
              <span>Care for</span>
              <span>a Brighter</span>
              <span>Tomorrow</span>
            </div>
          </div>

          <div className="HomeCare-hero-features">
            {heroFeatures.map(({ icon: Icon, title, subtitle }) => (
              <div className="HomeCare-feature" key={title}>
                <Icon size={28} />
                <div>
                  <strong>{title}</strong>
                  <strong>{subtitle}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
            <section className="HomeCare-trust">
              <div className="HomeCare-trust-inner">
                <div className="HomeCare-trust-copy">
                  <span className="HomeCare-kicker">POWERING CLEANER, HEALTHIER HOMES</span>
                  <h2>
                    Specialty  Chemicals 
                    <br />
                    for <span>Home Care</span> Formulations
                  </h2>
                  <p>
                    At CosmoChem, we supply performance ingredients and specialty Chemicals 
                    that helps manufactures create effective, safe and innovative home care products.
                    Our solutions supports cleaner homes, fresher living spaces and a healthier environment. 
                  </p>
                  {/* <button className="HomeCare-primary-btn" type="button">
                    Explore Our Solutions
                    <ArrowRight size={15} />
                  </button> */}
                </div>
      
                <div className="HomeCare-trust-visual">
                  <img src={TowelsImg} alt="Pharmaceutical chemical ingredients" />
                  <div className="HomeCare-trust-badges">
                    <span>Clean</span>
                    <span>Spaces</span>
                    <span>Happier</span>
                    <span>Lives</span>
                    
                  </div>
                </div>
              </div>
            </section>

        <section className="HomeCare-cards">
        {featureCards.map(({ icon: Icon, title, text }) => (
          <article className="HomeCare-card" key={title}>
            <Icon size={30} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      
            <section className="HomeCare-solution">
                    <div className="HomeCare-solution-visual">
                      <img src={LaundryImg} alt="Advancing healthcare through chemistry" />
                      <div className="HomeCare-solution-overlay">
                        <span>
                          Advanced 
                          <br />
                          Ingredients
                          <br />
                          for Modern
                          <br />
                          Home Care
                        </span>
                        <i />
                      </div>
                    </div>
            
                    <div className="HomeCare-solution-content">
                      <span className="HomeCare-kicker">WIDE RANGE OF APPLICATIONS</span>
                      <h2>
                        Creating Cleaner & Healthier
                        <br />
                        <span>Enviornments</span>
                      </h2>
                      <p>
                        Our home care chemical solutions are used across a wide range of applications,
                        including laundry care,dishwashing, surface cleaners,air care and other
                        household hygiene products.
                      </p>
                      <ul>
                        <li>Laundry and Detergent Formulations</li>
                        <li>Fabric Softening and Care</li>
                        <li>Surface Cleaning and Disinfectant Products</li>
                        <li>Dishwashing Liquids and Tablets</li>
                        <li>Air Care and Deodorizing Solutions.</li>
                      </ul>
                    </div>
                  </section>

                   <section className="HomeCare-sustainability">
                                      <div className="HomeCare-sustainability-visual">
                                        <img src={GlobalImg} alt="Responsible chemistry for a healthier future" />
                                        <div className="HomeCare-sustainability-overlay">
                                          <span>
                                            Sustainable
                                            <br />
                                            Choices for 
                                            <br />
                                            a Cleaner,
                                            <br />
                                            Tomorrow
                                          </span>
                                          <i />
                                        </div>
                                      </div>
                              
                                      <div className="HomeCare-sustainability-content">
                                        <span className="HomeCare-kicker">SUSTAINABLE &amp; RESPONSIBLE</span>
                                        <h2>
                                          Care Today
                                          <br />
                                          for<span>Future Generations</span>
                                        </h2>
                                        <p>
                                          We focus on responsible sourcing, sustainable practices and safe 
                                          chemical solutions that supports a cleaner and healthier planet.
                                        </p>
                                        {/* <button className="HomeCare-primary-btn" type="button">
                                          Our Sustainability Approach
                                          <ArrowRight size={15} />
                                        </button> */}
                                      </div>
                                    </section>

                                    
      <section className="pharmaceuticals-cta">

        <div className="pharmaceuticals-cta-text">

          <span className="pharmaceuticals-cta-mark">
            ✦
          </span>

          <p>
            Let&apos;s Create a Healthier Tomorrow Together

            <small>
              Partner with CosmoChem for reliable homecare
              chemical solutions.
            </small>
          </p>

        </div>

        <div className="pharmaceuticals-cta-actions">

          <button
            className="pharmaceuticals-cta-primary"
            type="button"
          >
            Get a Quote
          </button>

          <button
            className="pharmaceuticals-cta-secondary"
            type="button"
          >
            Chat on WhatsApp
          </button>

        </div>

      </section>
  </main>
  );
}

export default HomeCare;