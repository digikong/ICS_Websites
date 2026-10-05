import {
  ArrowRight,
  FlaskConical,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import ResearchImage from "../assets/Research.png";
import NatureImg from "../assets/Nature.png";
import CapsulesImage from "../assets/Capsules.png";
import flaskImage from "../assets/flask.png";

import "./Pharmaceuticals.css";

/* =========================================================
   HERO FEATURES
========================================================= */

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "Consistent",
    subtitle: "Quality",
  },
  {
    icon: FlaskConical,
    title: "Regulatory",
    subtitle: "Compliant",
  },
  {
    icon: Leaf,
    title: "Global",
    subtitle: "Supply Support",
  },
];

/* =========================================================
   FEATURE CARDS
========================================================= */

const featureCards = [
  {
    icon: FlaskConical,
    title: "API Manufacturing",
    text: "High-purity chemicals for active pharmaceutical ingredients.",
  },
  {
    icon: Leaf,
    title: "Excipients",
    text: "Reliable ingredients for formulation development.",
  },
  {
    icon: FlaskConical,
    title: "Specialty Chemicals",
    text: "Customized solutions for critical processes.",
  },
  {
    icon: ShieldCheck,
    title: "Global Standards",
    text: "Quality, safety and regulatory compliance you can trust.",
  },
];

/* =========================================================
   PHARMACEUTICALS PAGE
========================================================= */

function Pharmaceuticals() {
  return (
    <main className="pharmaceuticals-page">

      {/* =====================================================
          1. HERO SECTION
      ===================================================== */}

      <section className="pharmaceuticals-hero">

        {/* Hero Background Image */}
        <img
          className="pharmaceuticals-hero-bg"
          src={CapsulesImage}
          alt="Pharmaceutical manufacturing and chemical ingredients"
        />

        {/* Hero Overlay */}
        <div className="pharmaceuticals-hero-overlay" />

        {/* Hero Content */}
        <div className="pharmaceuticals-hero-inner">

          {/* -------------------------------------------------
              HERO BREADCRUMB
          ------------------------------------------------- */}

          <div className="pharmaceuticals-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>Industries</span>
            <span>›</span>
            <span>Pharmaceuticals</span>
          </div>

          {/* -------------------------------------------------
              HERO MAIN CONTENT
          ------------------------------------------------- */}

          <div className="pharmaceuticals-hero-row">

            <div className="pharmaceuticals-hero-copy">

              <h2>
                Pharmaceuticals
              </h2>

              <h3>
                High-Purity Chemical Solutions
                <br />
                for a Healthier Tomorrow
              </h3>

              <p>
                Reliable ingredients for APIs, pharmaceutical formulations,
                <br />
                excipients and drug manufacturing applications.
              </p>

            </div>

            {/* -------------------------------------------------
                HERO SIDE TEXT
            ------------------------------------------------- */}

            <div className="pharmaceuticals-hero-aside">
              <span>CHEMISTRY</span>
              <span>FOR A</span>
              <span>HEALTHIER</span>
              <span>WORLD</span>
            </div>

          </div>

          {/* -------------------------------------------------
              HERO FEATURES
          ------------------------------------------------- */}

          <div className="pharmaceuticals-hero-features">

            {heroFeatures.map(
              ({ icon: Icon, title, subtitle }) => (
                <div
                  className="pharmaceuticals-feature"
                  key={title}
                >
                  <Icon size={22} />

                  <div>
                    <strong>{title}</strong>
                    <strong>{subtitle}</strong>
                  </div>
                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          2. TRUST / INTRO SECTION
      ===================================================== */}

      <section className="pharmaceuticals-trust">

        <div className="pharmaceuticals-trust-inner">

          <div className="pharmaceuticals-trust-copy">

            <span className="pharmaceuticals-kicker">
              SUPPORTING BETTER HEALTH WORLDWIDE
            </span>

            <h2>
              Trusted Chemical Ingredients
              <br />
              for <span>Pharmaceutical Excellence</span>
            </h2>

            <p>
              At CosmoChem, we offer high-purity chemicals and specialty
              ingredients that support pharmaceutical manufacturing, API
              production, excipient applications and advanced drug formulations.
              Our solutions are developed to meet stringent quality standards
              and evolving industry requirements.
            </p>

            {/* <button
              className="pharmaceuticals-primary-btn"
              type="button"
            >
              Explore Our Solutions
              <ArrowRight size={15} />
            </button> */}

          </div>

          <div className="pharmaceuticals-trust-visual">

            <img
              src={flaskImage}
              alt="Pharmaceutical chemical ingredients"
            />

            <div className="pharmaceuticals-trust-badges">
              <span>Purity</span>
              <span>Consistency</span>
              <span>Reliability</span>
              <small>for a Healthier Tomorrow</small>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          3. FEATURE CARDS
      ===================================================== */}

      <section className="pharmaceuticals-cards">

        {featureCards.map(
          ({ icon: Icon, title, text }) => (

            <article
              className="pharmaceuticals-card"
              key={title}
            >

              <Icon size={30} />

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

            </article>

          )
        )}

      </section>

      {/* =====================================================
          4. PHARMACEUTICAL SOLUTIONS
      ===================================================== */}

      <section className="pharmaceuticals-solution">

        <div className="pharmaceuticals-solution-visual">

          <img
            src={ResearchImage}
            alt="Advancing healthcare through chemistry"
          />

          <div className="pharmaceuticals-solution-overlay">

            <span>
              Advancing
              <br />
              Healthcare
              <br />
              Through
              <br />
              Chemistry
            </span>

            <i />

          </div>

        </div>

        <div className="pharmaceuticals-solution-content">

          <span className="pharmaceuticals-kicker">
            WIDE RANGE OF APPLICATIONS
          </span>

          <h2>
            Enabling Pharmaceutical
            <br />
            <span>Innovations</span>
          </h2>

          <p>
            Our chemical solutions are used across a broad range of
            pharmaceutical applications, from research and development to
            large-scale manufacturing.
          </p>

          <ul>
            <li>API and Intermediate Manufacturing</li>
            <li>Pharmaceutical Formulations</li>
            <li>Excipients and Functional Ingredients</li>
            <li>Process and Manufacturing Support Chemicals</li>
            <li>R&amp;D and Analytical Applications</li>
          </ul>

        </div>

      </section>

      {/* =====================================================
          5. SUSTAINABILITY SECTION
      ===================================================== */}

      <section className="pharmaceuticals-sustainability">

        <div className="pharmaceuticals-sustainability-visual">

          <img
            src={NatureImg}
            alt="Responsible chemistry for a healthier future"
          />

          <div className="pharmaceuticals-sustainability-overlay">

            <span>
              Responsible
              <br />
              Chemistry
              <br />
              for a Brighter
              <br />
              Future
            </span>

            <i />

          </div>

        </div>

        <div className="pharmaceuticals-sustainability-content">

          <span className="pharmaceuticals-kicker">
            SUSTAINABLE &amp; RESPONSIBLE
          </span>

          <h2>
            Committed to a Healthier
            <br />
            and <span>More Sustainable World</span>
          </h2>

          <p>
            We focus on responsible sourcing, sustainable practices and safe
            chemical solutions to support a healthier planet for future
            generations.
          </p>

          {/* <button
            className="pharmaceuticals-primary-btn"
            type="button"
          >
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
              Partner with CosmoChem for reliable pharmaceutical
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

export default Pharmaceuticals;