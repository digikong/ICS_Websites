import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Send,
  ShieldCheck,
  Truck,
  FlaskConical,
  UsersRound,
} from "lucide-react";

import ContactImg from "../assets/Contact.png";
import ContactInfo from "../components/ContactInfo";
import "./Contact.css";

const benefits = [
  [
    Headphones,
    "Quick Response",
    "We respond to all enquiries within 24 hours.",
  ],
  [
    ShieldCheck,
    "Reliable Support",
    "Get expert guidance for your business needs.",
  ],
  [
    FlaskConical,
    "Custom Solutions",
    "Tailored chemical solutions as per your requirement.",
  ],
  [
    Truck,
    "On-time Delivery",
    "Timely and safe delivery across India.",
  ],
  [
    UsersRound,
    "Long-term Partnership",
    "Building relationships that last.",
  ],
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiry: "Select Enquiry Type",
    subject: "",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <img
          src={ContactImg}
          alt="CosmoChem office and manufacturing campus"
        />

        <div className="contact-hero-overlay" />

        <div className="contact-container contact-hero-content">
          <div className="contact-breadcrumb">
            Home <span>›</span> Contact Us
          </div>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            We are here to help! Reach out to us for enquiries, product
            <br />
            information, bulk orders, custom solutions or any
            <br />
            other assistance.
          </p>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-container contact-main-grid">
        {/* Contact Form */}
        <div className="contact-form-card" id="contact-form">
          <div className="contact-section-title">
            <h2>
              Get in <span>Touch</span>
            </h2>

            <p>
              Fill in the form and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={submitForm}>
            <div className="contact-form-row">
              <input
                required
                value={form.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                placeholder="Your Name *"
              />

              <input
                value={form.company}
                onChange={(event) =>
                  updateField("company", event.target.value)
                }
                placeholder="Company Name"
              />
            </div>

            <div className="contact-form-row">
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                placeholder="Email Address *"
              />

              <input
                required
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
                placeholder="Phone Number *"
              />
            </div>

            <select
              required
              value={form.enquiry}
              onChange={(event) =>
                updateField("enquiry", event.target.value)
              }
            >
              <option disabled>Select Enquiry Type</option>
              <option>Product Enquiry</option>
              <option>Bulk Order</option>
              <option>Custom Chemical Solution</option>
              <option>Career Enquiry</option>
            </select>

            <input
              required
              value={form.subject}
              onChange={(event) =>
                updateField("subject", event.target.value)
              }
              placeholder="Subject *"
            />

            <textarea
              required
              value={form.message}
              onChange={(event) =>
                updateField("message", event.target.value)
              }
              placeholder="Your Message *\nWrite your message here..."
            />

            <label className="privacy-check">
              <input
                required
                type="checkbox"
                checked={form.agree}
                onChange={(event) =>
                  updateField("agree", event.target.checked)
                }
              />

              I agree to the <strong>Privacy Policy.</strong>
            </label>

            <button className="send-message" type="submit">
              {submitted ? "Message Sent" : "Send Message"}
              <Send size={13} />
            </button>

            {submitted && (
              <div className="contact-success-message">
                <CheckCircle2 size={22} />

                <div>
                  <strong>Thank You for Your Enquiry!</strong>

                  <p>
                    Your enquiry has been received successfully. Our team has saved your
                    request and will get back to you soon.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info-card">
          <div className="contact-section-title">
            <h2>
              Contact <span>Information</span>
            </h2>
          </div>

          <ContactInfo showCompany />

          <div className="contact-follow">
            <strong>Follow Us</strong>

            <div>
              <a href="#contact">f</a>
              <a href="#contact">in</a>
              <a href="#contact">◎</a>
              <a href="#contact">▶</a>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <aside className="contact-quick-stack">
          <div className="quick-call">
            <h2>Quick Contact</h2>
            <p>Reach our team directly from the contact details below.</p>
            <ContactInfo compact mode="phone" />
            <ContactInfo compact mode="whatsapp" />
          </div>
        </aside>
      </section>

      {/* Map Section */}
      <section className="contact-container contact-map">
        <iframe
          title="CosmoChem Location"
          src="https://www.google.com/maps?q=28.5964654,77.3186058&z=17&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Benefits Section */}
   <section className="certification-cta">
        <div className="certifications-container">
          <FlaskConical size={60} />

          <div>
              <h2>
              Looking for a{" "}
              <span>Custom Chemical Solution?</span>
            </h2>

            <p>
              Talk to our experts today and find the right solution for your
               industry.
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

          <ContactInfo compact mode="whatsapp" />
        </div>
      </section>
    </main>
  );
}

export default Contact;