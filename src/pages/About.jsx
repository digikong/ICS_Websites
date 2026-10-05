import {
  Target,
  Eye,
  Gem,
  Award,
  UsersRound,
  Factory,
  Globe2,
  Truck,
  UserRound,
  FlaskConical,
  Package,
  ShieldCheck,
} from "lucide-react";

import abouthero from "../assets/abouthero.png";
import whychoose from "../assets/whychoose.png";

import manufacturingplant from "../assets/manufacturingplant.png";
import laboratory from "../assets/laboratory.png";
// import qualitycontrol from "../assets/qualitycontrol.png";
import warehouse from "../assets/warehouse.png";
// import packaging from "../assets/packaging.png";
import ourteam from "../assets/ourteam.png";

import iso90012015 from "../assets/iso90012015.png";
import gmp from "../assets/gmp.png";
import fssai from "../assets/fssai.png";
import msme from "../assets/msme.png";
import iec from "../assets/iec.png";
import rohs from "../assets/rohs.png";
import reach from "../assets/reach.png";
import makeinindia from "../assets/makeinindia.png";

import "./About.css";

function About() {
  // ================= FACILITIES DATA =================

  const facilities = [
    // {
    //   image: manufacturingplant,
    //   icon: Factory,
    //   title: "Manufacturing Plant",
    //   text: "Modern production unit with advanced technology and high-capacity equipment.",
    // },
    {
      image: laboratory,
      icon: FlaskConical,
      title: "RD Lab",
      text: "Well-equipped laboratories for testing, R&D and quality assurance.",
    },
    // {
    //   image: qualitycontrol,
    //   icon: ShieldCheck,
    //   title: "Quality Control",
    //   text: "Strict quality control system to ensure purity, safety and consistency.",
    // },
    {
      image: warehouse,
      icon: Package,
      title: "Warehouse",
      text: "Spacious and secure warehousing for safe storage.",
    },
    // {
    //   image: packaging,
    //   icon: Package,
    //   title: "Packaging",
    //   text: "Safe and reliable packaging as per international standards.",
    // },
    {
      image: ourteam,
      icon: UsersRound,
      title: "Our Team",
      text: "Skilled professionals committed to quality and customer satisfaction.",
    },
  ];

  // ================= WHY CHOOSE DATA =================

  const whyChoose = [
    {
      icon: Award,
      title: "Premium Quality",
      text: "We ensure the highest quality standards in every product.",
    },
    {
      icon: UsersRound,
      title: "Customer-Centric Approach",
      text: "We understand your needs and provide tailored chemical solutions.",
    },
    {
      icon: Factory,
      title: "Advanced Infrastructure",
      text: "State-of-the-art manufacturing facilities and modern laboratories.",
    },
    {
      icon: UserRound,
      title: "Experienced Team",
      text: "Our team of experts is dedicated to delivering the best solutions.",
    },
    {
      icon: Globe2,
      title: "Global Supply Network",
      text: "Strong distribution network across 20+ countries worldwide.",
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      text: "Efficient logistics and supply chain ensure timely delivery.",
    },
  ];

  return (
    <main className="about-page">
      {/* =================================================
          #1 ABOUT HERO
      ================================================= */}

      <section className="about-hero">
        <img
          src={abouthero}
          alt="CosmoChem Chemical Manufacturing Facility"
          className="about-hero-image"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-container">
          {/* ================= BREADCRUMB ================= */}

          <div className="about-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>About Us</span>
          </div>

          {/* ================= HERO CONTENT ================= */}

          <div className="about-hero-content">
            <h1>
              About <span>ICS</span>
            </h1>

            <div className="about-green-line"></div>

            <p>
              ICS is a trusted manufacturer and supplier of
              high-quality industrial, specialty and pharmaceutical
              chemicals. With decades of expertise, advanced technology
              and a customer-first approach, we deliver chemical
              solutions that drive industries forward.
            </p>
          </div>

          {/* ================= EXPERIENCE BADGE ================= */}

          <div className="experience-badge">
            <strong>9+</strong>

            <span>
              Years of
              <br />
              Excellence
            </span>
          </div>
        </div>
      </section>

      {/* =================================================
          #2 MISSION / VISION / VALUES
      ================================================= */}

      <section className="mvv-section">
        <div className="about-container">
          <div className="mvv-card">
            {/* ================= MISSION ================= */}

            <div className="mvv-item">
              <div className="mvv-icon">
                <Target size={29} />
              </div>

              <div>
                <h3>Our Mission</h3>

                <p>
                  To provide high-quality chemical products with
                  innovation, sustainability and excellence.
                </p>
              </div>
            </div>

            {/* ================= VISION ================= */}

            <div className="mvv-item">
              <div className="mvv-icon">
                <Eye size={29} />
              </div>

              <div>
                <h3>Our Vision</h3>

                <p>
                  To be a globally trusted chemical company recognized
                  for quality, reliability and customer satisfaction.
                </p>
              </div>
            </div>

            {/* ================= VALUES ================= */}

            <div className="mvv-item">
              <div className="mvv-icon">
                <Gem size={29} />
              </div>

              <div>
                <h3>Our Values</h3>

                <p>
                  Integrity, Innovation, Sustainability and Commitment
                  to Quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          #3 WHY CHOOSE COSMOCHEM
      ================================================= */}

      <section className="why-section">
        <div className="about-container">
          <div className="why-grid">
            {/* ================= WHY CONTENT ================= */}

            <div className="why-content">
              <h2>
                Why Choose <span>CosmoChem?</span>
              </h2>

              <div className="section-line"></div>

              <div className="why-list">
                {whyChoose.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="why-item" key={index}>
                      {/* ================= WHY ICON ================= */}

                      <div className="why-icon">
                        <Icon size={23} />
                      </div>

                      {/* ================= WHY TEXT ================= */}

                      <div className="why-text">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= WHY IMAGE ================= */}

            <div className="why-image-box">
              <img src={whychoose} alt="CosmoChem Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          #4 FACILITIES
      ================================================= */}

      <section className="facilities-section">
        <div className="about-container">
          {/* ================= SECTION HEADING ================= */}

          <div className="section-heading">
            <h2>Our Facilities</h2>
            <div className="section-line"></div>
          </div>

          {/* ================= FACILITIES GRID ================= */}

          <div className="facilities-grid">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <div className="facility-card" key={index}>
                  {/* ================= FACILITY IMAGE ================= */}

                  <div className="facility-image">
                    <img
                      src={facility.image}
                      alt={facility.title}
                    />
                  </div>

                  {/* ================= FACILITY ICON ================= */}

                  <div className="facility-icon">
                    <Icon size={40} />
                  </div>

                  {/* ================= FACILITY CONTENT ================= */}

                  <div className="facility-content">
                    <h3>{facility.title}</h3>
                    <p>{facility.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          #5 CERTIFICATIONS
      ================================================= */}

      <section className="certifications-section">
        <div className="about-container">
          {/* ================= SECTION HEADING ================= */}

          <div className="section-heading">
            <h2>Our Certifications</h2>
            <div className="section-line"></div>
          </div>

          {/* ================= CERTIFICATIONS BOX ================= */}

          <div className="certifications-box">
            {/* ================= ISO ================= */}

            <div className="certification-item">
              <img
                src={iso90012015}
                alt="ISO 9001:2015"
              />
            </div>

            {/* ================= GMP ================= */}

            <div className="certification-item">
              <img src={gmp} alt="GMP" />
            </div>

            {/* ================= FSSAI ================= */}

            <div className="certification-item">
              <img src={fssai} alt="FSSAI" />
            </div>

            {/* ================= MSME ================= */}

            <div className="certification-item">
              <img src={msme} alt="MSME" />
            </div>

            {/* ================= IEC ================= */}

            <div className="certification-item">
              <img src={iec} alt="IEC" />
            </div>

            {/* ================= ROHS ================= */}

            {/* <div className="certification-item">
              <img src={rohs} alt="RoHS" />
            </div> */}

            {/* ================= REACH ================= */}

            <div className="certification-item">
              <img src={reach} alt="REACH" />
            </div>

            {/* ================= MAKE IN INDIA ================= */}

            <div className="certification-item make-india">
              <img
                src={makeinindia}
                alt="Make in India"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;