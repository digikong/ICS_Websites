import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Heart,
  Leaf,
  Lightbulb,
  Mail,
  Send,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCareers } from "../lib/cosmochemStore";

import ScientistsImage from "../assets/Scientists.png";
import TeamImage from "../assets/Team.png";
import SeedlingImage from "../assets/Seedling.png";
import SunlitImage from "../assets/Sunlit.png";
import LeafImage from "../assets/Leaf.png";

import "./Careers.css";
import ContactInfo from "../components/ContactInfo";


/* =========================================================
   HERO FEATURES
========================================================= */

const heroFeatures = [
  {
    icon: Users,
    title: "People First",
    text: "A supportive and inclusive workplace",
  },
  {
    icon: Leaf,
    title: "Meaningful Work",
    text: "Contribute to a cleaner, healthier world",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    text: "Grow your skills and explore new possibilities",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    text: "Be part of an international team",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    text: "Your well-being matters to us",
  },
];


/* =========================================================
   CURRENT OPPORTUNITIES
========================================================= */

export const CAREER_SEED = [
 {
  title: "Sales & Marketing Executive",
  department: "Sales & Marketing",
  vacancies: "02",
  location: "Pan India",
},
{
  title: "Export Executive",
  department: "Export & International Business",
  vacancies: "03",
  location: "Noida",
},
{
  title: "Techno-Commercial Executive",
  department: "Techno-Commercial",
  vacancies: "02",
  location: "Noida",
},
{
  title: "Procurement Executive",
  department: "Procurement & Supply Chain",
  vacancies: "04",
  location: "Noida",
},
{
  title: "R&D Executive",
  department: "Research & Development",
  vacancies: "01",
  location: "Noida",
},
{
  title: "Accounts Executive",
  department: "Finance & Accounts",
  vacancies: "01",
  location: "Noida",
},
{
  title: "MIS Executive",
  department: "Management Information Systems",
  vacancies: "01",
  location: "Noida",
},
{
  title: "Housekeeping Staff",
  department: "Administration & Facilities",
  vacancies: "01",
  location: "Noida",
},
];


/* =========================================================
   CAREER PAGE
========================================================= */

function Careers() {
  const [jobOpenings, setJobOpenings] = useState(() => getCareers(CAREER_SEED));

  useEffect(() => {
    const refreshCareers = () => setJobOpenings(getCareers(CAREER_SEED));
    refreshCareers();
    window.addEventListener("cosmochem-content-change", refreshCareers);
    return () => window.removeEventListener("cosmochem-content-change", refreshCareers);
  }, []);

  return (
    <main className="careers-page">

      {/* =====================================================
          1. HERO SECTION
      ===================================================== */}

      <section className="careers-hero">

        <img
          className="careers-hero-bg"
          src={ScientistsImage}
          alt="CosmoChem scientists working together"
        />

        <div className="careers-hero-overlay" />

        <div className="careers-hero-inner">


          

          <div className="careers-hero-copy">

            <nav className="careers-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&gt;</span>
              <span aria-current="page">Careers</span>
            </nav>

            <h1>
              Careers at <span>ICS</span>
            </h1>

            <h2>
              Grow With Purpose. Create a Cleaner Tomorrow.
            </h2>

            <p>
              At ICS, we believe great people create a greater
              planet. Join us in our mission to develop innovative chemical
              solutions that make life safer, healthier and more sustainable
              for generations to come.
            </p>

            {/* <button
              className="careers-hero-btn"
              type="button"
            >
              Be a Part of Our Journey
              <ArrowRight size={16} />
            </button> */}

          </div>

          <div className="careers-hero-aside">
            <span>People</span>
            <span>Science</span>
            <span>A Better</span>
            <span>Tomorrow</span>
            <i />
          </div>

        </div>
      </section>


      {/* =====================================================
          2. CAREER VALUES
      ===================================================== */}

      <section className="careers-values">

        <div className="careers-values-inner">

          {heroFeatures.map(
            ({ icon: Icon, title, text }) => (
              <div
                className="careers-value"
                key={title}
              >
                <div className="careers-value-icon">
                  <Icon size={32} />
                </div>

                <div className="careers-value-content">
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            )
          )}

        </div>
      </section>


      {/* =====================================================
          3. OUR CULTURE SECTION
      ===================================================== */}

      <section className="careers-culture">

        <div className="careers-culture-inner">

          <div className="careers-culture-content">

            <span className="careers-kicker">
              OUR CULTURE
            </span>

            <h2>
              More Than a Workplace
              <br />
              <span>A Place to Belong</span>
            </h2>

            <p>
              We foster a culture of curiosity, collaboration and impact.
              Here, diverse minds come together to solve real-world
              challenges and build a sustainable future.
            </p>

            {/* <button
              className="careers-primary-btn"
              type="button"
            >
              Life at CosmoChem
              <ArrowRight size={15} />
            </button> */}

          </div>


          <div className="careers-culture-visual">

            <div className="careers-culture-circle careers-culture-main">
              <img
                src={TeamImage}
                alt="CosmoChem team collaboration"
              />
            </div>

            <div className="careers-culture-circle careers-culture-leaf">
              <img
                src={LeafImage}
                alt=""
              />
              <span>Great<br />People</span>
            </div>

            <div className="careers-culture-circle careers-culture-light">
              <span>
                Bigger
                <br />
                Possibilities
              </span>
            </div>

            <div className="careers-culture-circle careers-culture-seedling">
              <img
                src={SeedlingImage}
                alt="Growing seedling"
              />
            </div>

            <div className="careers-culture-circle careers-culture-future">
              <span>
                Greener
                <br />
                Tomorrows
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          4. CURRENT OPPORTUNITIES
      ===================================================== */}

      <section className="careers-opportunities">

        <div className="careers-opportunities-inner">

          <div className="careers-opportunities-header">

            <div>
              <span className="careers-kicker">
                OPEN POSITIONS
              </span>

              <h2>
                Current <span>Opportunities</span>
              </h2>
            </div>

            <div className="careers-opportunities-note">
              <span>Build Your Future</span>
              <span>With Us</span>
              <i />
            </div>

          </div>


          <div className="careers-opportunities-grid">

            {/* -------------------------------------------------
                JOB TABLE
            ------------------------------------------------- */}

            <div className="careers-job-table">

              <div className="careers-job-row careers-job-header">
                <span>Job Title</span>
                <span>Department</span>
                <span>No. of Vacancies</span>
                <span>Location</span>
                <span />
              </div>

              {jobOpenings.map(
                ({
                  title,
                  department,
                  vacancies,
                  location,
                }) => (
                  <div
                    className="careers-job-row"
                    key={title}
                  >
                    <strong>{title}</strong>

                    <span>{department}</span>

                    <strong>{vacancies}</strong>

                    <span>{location}</span>

                    <a
                        className="careers-job-arrow"
                        href={`mailto:account@innovisioncosmochem.com?subject=${encodeURIComponent(
                          `Application for ${title}`,
                        )}&body=${encodeURIComponent(
                          `Dear Hiring Team,

                      I am writing to apply for the ${title} position at CosmoChem.

                      Department: ${department}
                      Location: ${location}

                      I am interested in this opportunity and would like to be considered for the role. Please find my CV attached for your review.

                      I would appreciate the opportunity to discuss my application further.

                      Thank you for your time and consideration.

                      Regards,
                      [Your Name]
                      [Your Phone Number]
                      [Your Email Address]`,
                        )}`}
                        aria-label={`Apply for ${title}`}
                      >
                        <ArrowRight size={14} />
                      </a>
                  </div>
                )
              )}

            </div>


            {/* -------------------------------------------------
                CV CARD
            ------------------------------------------------- */}

            <div className="careers-cv-card">

              <div className="careers-cv-icon">
                <Mail size={42} />
              </div>

              <h3>
                Drop Your CV
                <br />
                on Email
              </h3>

              <p>
                Don&apos;t see a suitable position?
                <br />
                We are always open to talented
                <br />
                individuals. Share your CV with us at
              </p>

              <ContactInfo compact email="account@innovisioncosmochem.com" />

              <div className="careers-cv-send">
                <Send size={38} />
                <span>
                  Let&apos;s Create
                  <br />
                  a Brighter Tomorrow
                  <br />
                  Together
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          5. IMPACT / JOIN OUR TEAM
      ===================================================== */}

      <section className="careers-impact">

        <img
          className="careers-impact-bg"
          src={SeedlingImage}
          alt="Hands nurturing a young plant"
        />

        <div className="careers-impact-overlay" />

        <div className="careers-impact-inner">

          <div className="careers-impact-content">

            <h2>
              Small Steps. Big Impact.
            </h2>

            <p>
              Your work here contributes to a cleaner,
              greener and healthier world.
            </p>
{/* 
            <button
              className="careers-primary-btn careers-impact-btn"
              type="button"
            >
              Join Our Team
              <ArrowRight size={15} />
            </button> */}

          </div>


          <div className="careers-impact-values">

            <div>
              <Leaf size={35} />
              <strong>Better</strong>
              <span>Products</span>
            </div>

            <div>
              <Heart size={35} />
              <strong>Healthier</strong>
              <span>Communities</span>
            </div>

            <div>
              <Globe2 size={35} />
              <strong>Sustainable</strong>
              <span>Planet</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Careers;