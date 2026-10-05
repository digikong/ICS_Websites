import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Headphones,
  Mail,
  MessageCircle,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";



import iso90012015 from "../assets/iso90012015.png";
import gmp from "../assets/gmp.png";
import fssai from "../assets/fssai.png";
import msme from "../assets/msme.png";
import iec from "../assets/iec.png";
import rohs from "../assets/rohs.png";
import reach from "../assets/reach.png";
import makeinindia from "../assets/makeinindia.png";

import Certification from "../assets/Certification.png";
// import laboratory from "../assets/laboratory.png";
// import qualitycontrol from "../assets/qualitycontrol.png";
// import packaging from "../assets/packaging.png";

import "./Certifications.css";

// =========================================================
// Process steps
// =========================================================

const processSteps = [
  [Mail, "Inquiry", "You share your requirement with us."],
  [ClipboardCheck, "Sample Approval", "Product sample confirmation."],
  [FlaskConical, "Testing & Analysis", "Quality testing and validation."],
  [Package, "Packaging", "Safe, secure and custom packaging."],
  [Truck, "Delivery", "Timely and reliable delivery."],
  [
    Headphones,
    "After-Sales Support",
    "Long-term partnership and technical support.",
  ],
];

// =========================================================
// Certifications
// =========================================================

const certifications = [
  [iso90012015, "ISO 9001:2015", "Quality Management"],
  [gmp, "GMP", "Good Manufacturing Practice"],
  [fssai, "FSSAI", "Food Safety Standards"],
  [msme, "MSME", "Registered Unit"],
  [iec, "IEC", "International Trade Compliance"],
  [reach, "REACH", "Chemical Regulation"],
  [makeinindia, "Make in India", "Local Manufacturing Initiative"],
];

// =========================================================
// Facilities
// =========================================================

// const facilities = [
//   [
//     manufacturingplant,
//     "Manufacturing Plant",
//     "Modern production units with advanced equipment and high safety standards.",
//   ],
//   [
//     laboratory,
//     "Laboratory",
//     "Well-equipped laboratories for R&D, testing and quality analysis.",
//   ],
//   [
//     qualitycontrol,
//     "Quality Control",
//     "Stringent quality checks at every stage to ensure consistent product excellence.",
//   ],
//   [
//     packaging,
//     "Warehouse & Packaging",
//     "Spacious storage with safe, secure and customized packaging solutions.",
//   ],
// ];

// =========================================================
// Certifications page
// =========================================================

function Certifications() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <main className="certifications-page">
      {/* =====================================================
          Hero section
      ===================================================== */}

      <section className="certifications-hero">
        <img
          src={Certification}
          alt="Chemical manufacturing plant"
        />

        <div className="certifications-hero-overlay" />

        <div className="certifications-container certifications-hero-content">
          <div className="certifications-breadcrumb">
            Home <span>›</span> Process &amp; Certifications
          </div>

          <h1>
            Our Process &amp;
            <br />
            <span>Certifications</span>
          </h1>

          <p>
            We follow a stringent process and global standards to
            <br />
            deliver high-quality chemicals with safety, reliability
            <br />
            and consistency.
          </p>
        </div>
      </section>

      {/* =====================================================
          Process and certifications panel
      ===================================================== */}

      <section className="certifications-container process-panel">
        {/* Process heading */}
        <div className="certification-heading">
          <h2>
            Our <span>Process</span>
          </h2>

          <p>
            A streamlined workflow ensuring quality, safety and
            customer satisfaction.
          </p>
        </div>

        {/* Process steps */}
        <div className="process-track">
          {processSteps.map(([Icon, title, text], index) => (
            <button
              key={title}
              className={`process-step ${
                activeStep === index ? "active" : ""
              }`}
              onClick={() => setActiveStep(index)}
            >
              <b>{String(index + 1).padStart(2, "0")}</b>

              <i>
                <Icon size={28} />
              </i>

              <strong>{title}</strong>

              <span>
                {activeStep === index
                  ? text
                  : "View step details"}
              </span>
            </button>
          ))}
        </div>

        {/* Selected process detail */}
        <div className="process-detail">
          <CheckCircle2 size={17} />

          <span>
            <strong>{processSteps[activeStep][1]}:</strong>{" "}
            {processSteps[activeStep][2]}
          </span>
        </div>

        {/* Certifications heading */}
        <div className="certification-heading certification-list-heading">
          <h2>
            Our <span>Certifications</span>
          </h2>

          <p>Recognized standards. Trusted quality.</p>
        </div>

        {/* Certifications grid */}
        <div className="certification-grid">
          {certifications.map(([image, title, text]) => (
            <button
              className="certification-card"
              key={title}
              onClick={() =>
                setSelectedItem({
                  image,
                  title,
                  text,
                  type: "Certification",
                })
              }
            >
              <img src={image} alt={title} />

              <strong>{title}</strong>

              <span>{text}</span>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          Quality highlights
      ===================================================== */}

      <section className="certification-quality">
        <div className="certifications-container quality-items">
          {[
            [
              ShieldCheck,
              "Quality Assurance",
              "Stringent quality control at every stage.",
            ],
            [
              FlaskConical,
              "Advanced Testing",
              "Modern labs and advanced testing equipment.",
            ],
            [
              Truck,
              "Reliable Supply",
              "Consistent availability and on-time delivery.",
            ],
            [
              CheckCircle2,
              "Customer Focus",
              "Long-term relationships and tailored solutions.",
            ],
          ].map(([Icon, title, text]) => (
            <div key={title}>
              <Icon size={25} />

              <span>
                <strong>{title}</strong>
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          Facilities
      ===================================================== */}
{/* 
      <section className="certifications-container facilities-area">
        <div className="facility-heading">
          <h2>
            Our <span>Facilities</span>
          </h2>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Visit Our Facilities
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="certification-facilities-grid">
          {facilities.map(([image, title, text]) => (
            <button
              className="certification-facility-card"
              key={title}
              onClick={() =>
                setSelectedItem({
                  image,
                  title,
                  text,
                  type: "Facility",
                })
              }
            >
              <img src={image} alt={title} />

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </button>
          ))}
        </div>
      </section> */} 

      {/* =====================================================
          Call-to-action section
      ===================================================== */}

      <section className="certification-cta">
        <div className="certifications-container">
          <FlaskConical size={60} />

          <div>
            <h2>
              Need a Custom
              <br />
              <span>Chemical Solution?</span>
            </h2>

            <p>
              Our experts are ready to understand your needs and
              provide the right solution for your business.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("certification-inquiry")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get a Quote
            <ArrowRight size={17} />
          </button>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* =====================================================
          Details modal
      ===================================================== */}

      {selectedItem && (
        <div
          className="certification-modal-backdrop"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="certification-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="certification-modal-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close details"
            >
              ×
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
            />

            <div>
              <span>{selectedItem.type}</span>

              <h2>{selectedItem.title}</h2>

              <p>{selectedItem.text}</p>

              <button
                onClick={() => {
                  setSelectedItem(null);

                  document
                    .getElementById("certification-inquiry")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Discuss Your Requirement
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Certifications;