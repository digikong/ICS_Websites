import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Flower2,
  Globe2,
  Grid2X2,
  HandHeart,
  Leaf,
  Package,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Waves,
  FlaskConical,
} from "lucide-react";


import Creamy_girlImage from "../assets/Creamy_girl.png";
import Creamy_leafImage from "../assets/Creamy_leaf.png";
import FlowerImage from "../assets/Flower.png";
import LeafImage from "../assets/Leaf.png";



import "./PersonalCare.css";

const heroFeatures = [
  { icon: Leaf, title: "Safe & Reliable", subtitle: "Ingredients" },
  { icon: FlaskConical, title: "Formulation", subtitle: "Support" },
  { icon: Leaf, title: "Sustainable", subtitle: "Solutions" },
  { icon: Users, title: "Trusted", subtitle: "Partnerships" },
];

const featureCards = [
  {
    icon: Leaf,
    title: "Skincare Ingredients",
    text: "Active ingredients for healthy, radiant skin.",
  },
  {
    icon: Waves,
    title: "Haircare Solutions",
    text: "Functional ingredients for stronger, healthier hair.",
  },
  {
    icon: Flower2,
    title: "Personal Hygiene",
    text: "Ingredients for daily care and freshness.",
  },
  {
    icon: FlaskConical,
    title: "Cosmetic Actives",
    text: "Advanced actives for innovative formulations.",
  },
];

function PersonalCare() {
  return (
    <main className="PersonalCare-page">
      <section className="PersonalCare-hero">
        <img
          className="PersonalCare-hero-bg"
          src={Creamy_girlImage}
          alt="Personal Care Innovative Ingredients for A More Confidient You High-quality
          specially chemicals and cosmetic ingredients for skincare,haircare, personal hygiene and beauty formulations."
        />

        <div className="PersonalCare-hero-overlay" />

        <div className="PersonalCare-hero-inner">
          <div className="PersonalCare-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>Industries</span>
            <span>›</span>
            <span>Personal Care</span>
          </div>

          <div className="PersonalCare-hero-row">
            <div className="PersonalCare-hero-copy">
              <h1>Personal Care</h1>
              <h2>
                Innovative Ingredients for
                <br />
                 A More Confidient You
              </h2>
              <p>
                High-quality specially chemicals and cosmetic ingredients,
                <br />
                for skincare,haircare, personal hygiene and beauty formulations.
              </p>
              {/* <button className="PersonalCare-quote-btn" type="button">
                Get a Quote
                <ArrowRight size={16} />
              </button> */}
            </div>

            <div className="PersonalCare-hero-aside">
              <span>PURE</span>
              <span>SAFE</span>
              <span>BEAUTIFUL</span>
              <span>NATURALLY</span>
            </div>
          </div>

          <div className="PersonalCare-hero-features">
            {heroFeatures.map(({ icon: Icon, title, subtitle }) => (
              <div className="PersonalCare-feature" key={title}>
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

      <section className="PersonalCare-trust">
        <div className="PersonalCare-trust-inner">
          <div className="PersonalCare-trust-copy">
            <span className="PersonalCare-kicker">BEAUTY POWERED BY CHEMISTRY</span>
            <h2>
              Specialty  Ingredients 
              <br />
              for <span>Personal Care</span> Formulations
            </h2>
            <p>
              At CosmoChem, we provide high-performance ingredients and cosmentic
              actives for a wide range of personal care applications. our solutions help
              brands create safe,effective and innovative products for modern consumers.
            </p>
            {/* <button className="PersonalCare-primary-btn" type="button">
              Explore Our Solutions
              <ArrowRight size={15} />
            </button> */}
          </div>

          <div className="PersonalCare-trust-visual">
            <img src={Creamy_leafImage} alt="Pharmaceutical chemical ingredients" />
            <div className="PersonalCare-trust-badges">
              <span>Nature Inspired</span>
              <span>Science Backed</span>
              <span>Beauty Enhanced</span>
              
            </div>
          </div>
        </div>
      </section>

       <section className="PersonalCare-cards">
        {featureCards.map(({ icon: Icon, title, text }) => (
          <article className="PersonalCare-card" key={title}>
            <Icon size={30} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="PersonalCare-solution">
              <div className="PersonalCare-solution-visual">
                <img src={FlowerImage} alt="Advancing healthcare through chemistry" />
                <div className="PersonalCare-solution-overlay">
                  <span>
                    Formulating 
                    <br />
                    a More Beautiful
                    <br />
                    Tomorrow
                  </span>
                  <i />
                </div>
              </div>
      
              <div className="PersonalCare-solution-content">
                <span className="PersonalCare-kicker">WIDE RANGE OF APPLICATIONS</span>
                <h2>
                  Creating Possibilities
                  <br />
                  in<span>Personal Care</span>
                </h2>
                <p>
                  Our ingredients are widely used across skincare, haircare, color cosmetics,
                  suncare,oral care,bath & shower and other personal care formulations.
                </p>
                <ul>
                  <li>Skincare and Anti-ageing Formulations</li>
                  <li>Haircare and Scalp Care Products</li>
                  <li>Personal Hygiene and Oral Care</li>
                  <li>Color Cosmetics and Markeup Products</li>
                  <li>Suncare and Specialty Formulations</li>
                </ul>
              </div>
            </section>

              <section className="PersonalCare-sustainability">
                    <div className="PersonalCare-sustainability-visual">
                      <img src={LeafImage} alt="Responsible chemistry for a healthier future" />
                      <div className="PersonalCare-sustainability-overlay">
                        <span>
                          Sustainable
                          <br />
                          Ingredients for 
                          <br />
                          a Healthier,
                          <br />
                          Happier You
                        </span>
                        <i />
                      </div>
                    </div>
            
                    <div className="PersonalCare-sustainability-content">
                      <span className="PersonalCare-kicker">SUSTAINABLE &amp; RESPONSIBLE</span>
                      <h2>
                        Beauty with a
                        <br />
                        <span>Purpose</span>
                      </h2>
                      <p>
                        We are commited to reponsible sourcing, sustainable practices and
                        safe chemical solutions that support people and the planet.
                      </p>
                      {/* <button className="PersonalCare-primary-btn" type="button">
                        Our Sustainability Approach
                        <ArrowRight size={15} />
                      </button> */}
                    </div>

                    </section>

                    
      {/* =====================================================
          6. FINAL CTA
      ===================================================== */}

      <section className="pharmaceuticals-cta">

        <div className="pharmaceuticals-cta-text">

          <span className="pharmaceuticals-cta-mark">
            ✦
          </span>

          <p>
            Let&apos;s Create a Healthier Tomorrow Together

            <small>
              Partner with CosmoChem for reliable personalcare
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

export default PersonalCare;