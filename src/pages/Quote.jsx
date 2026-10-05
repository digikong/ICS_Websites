import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CloudUpload,
  FileCheck2,
  FlaskConical,
  Mail,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";

import QuoteImg from "../assets/Quote.png";
import ContactInfo from "../components/ContactInfo";
import "./Quote.css";

const steps = [
  [
    ClipboardCheck,
    "We Receive Your Request",
    "We will review your requirement carefully.",
  ],
  [
    FileCheck2,
    "Quotation Preparation",
    "Our experts will prepare the best quote for you.",
  ],
  [
    Mail,
    "We Contact You",
    "Our team will contact you via email or phone with the quotation.",
  ],
  [
    CheckCircle2,
    "Your Approval",
    "Once approved, we proceed with your order.",
  ],
];

const highlights = [
  [ShieldCheck, "Quick Response", "Usually within 24 Hours"],
  [CheckCircle2, "Best Price", "Competitive & Transparent"],
  [ShieldCheck, "Trusted by Industry", "Quality You Can Rely On"],
];

const benefits = [
  [ShieldCheck, "Quality Assured", "Stringent quality checks"],
  [Truck, "On-time Delivery", "Timely & reliable delivery"],
  [CheckCircle2, "Competitive Pricing", "Best quality at best price"],
  [FlaskConical, "Secure Packaging", "Leak-proof & safe"],
  [MessageCircle, "Dedicated Support", "We're here to help"],
];

const initialForm = {
  product: "-- Select Product --",
  cas: "",
  quantity: "",
  unit: "kg",
  packaging: "-- Select Packaging --",
  grade: "",
  date: "",
  company: "",
  person: "",
  email: "",
  phone: "",
  industry: "-- Select Industry --",
  city: "",
  requirement: "",
  agree: false,
};

function Quote() {
  const [form, setForm] = useState(initialForm);
  const [fileName, setFileName] = useState("");
  const [sent, setSent] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setFileName("");
    setSent(false);
  };

  return (
    <main className="quote-page">
      {/* ================= HERO ================= */}

      <section className="quote-hero">
        <img src={QuoteImg} alt="CosmoChem laboratory" />

        <div className="quote-hero-overlay" />

        <div className="quote-container quote-hero-content">
          <div className="quote-breadcrumb">
            Home <span>›</span> Request a Quote
          </div>

          <h1>
            Request a <span>Quote</span>
          </h1>

          <p>
            Tell us your requirements and our team will
            <br />
            get back to you with the best solution and price.
          </p>

          <div className="quote-highlights">
            {highlights.map(([Icon, title, text]) => (
              <div key={title}>
                <Icon size={50} />

                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE FORM ================= */}

      <section className="quote-container quote-layout">
        <div className="quote-form-card">
          <h2>Submit Your Requirements</h2>

          <div className="quote-line" />

          <p className="quote-intro">
            Please fill in the details below and we will get back to you with
            a quotation.
          </p>

          <form onSubmit={submit}>
            {/* PRODUCT DETAILS */}

            <div className="quote-form-grid">
              <Field label="Product / Chemical Name" required>
                <select
                  required
                  value={form.product}
                  onChange={(event) =>
                    update("product", event.target.value)
                  }
                >
                  <option disabled>-- Select Product --</option>
                  <option>Acetic Acid</option>
                  <option>Caustic Soda Flakes</option>
                  <option>Hydrochloric Acid</option>
                  <option>Sodium Hypochlorite</option>
                  <option>Custom Chemical</option>
                </select>
              </Field>

              <Field label="CAS Number (If known)">
                <input
                  placeholder="e.g. 64-19-7"
                  value={form.cas}
                  onChange={(event) => update("cas", event.target.value)}
                />
              </Field>

              <Field label="Required Quantity" required>
                <div className="quote-input-with-select">
                  <input
                    required
                    placeholder="e.g. 1000"
                    value={form.quantity}
                    onChange={(event) =>
                      update("quantity", event.target.value)
                    }
                  />

                  <select
                    value={form.unit}
                    onChange={(event) => update("unit", event.target.value)}
                  >
                    <option>kg</option>
                    <option>MT</option>
                    <option>Litres</option>
                  </select>
                </div>
              </Field>

              <Field label="Packaging Type">
                <select
                  value={form.packaging}
                  onChange={(event) =>
                    update("packaging", event.target.value)
                  }
                >
                  <option>-- Select Packaging --</option>
                  <option>HDPE Drum</option>
                  <option>IBC Tank</option>
                  <option>Bulk Tanker</option>
                  <option>Custom Packaging</option>
                </select>
              </Field>

              <Field label="Grade / Purity (If any)">
                <input
                  placeholder="e.g. Industrial Grade"
                  value={form.grade}
                  onChange={(event) => update("grade", event.target.value)}
                />
              </Field>

              <Field label="Required By (Date)">
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => update("date", event.target.value)}
                />
              </Field>
            </div>

            {/* CONTACT DETAILS */}

            <h3>Your Details</h3>

            <div className="quote-form-grid">
              <Field label="Company Name" required>
                <input
                  required
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={(event) =>
                    update("company", event.target.value)
                  }
                />
              </Field>

              <Field label="Contact Person" required>
                <input
                  required
                  placeholder="Enter your full name"
                  value={form.person}
                  onChange={(event) => update("person", event.target.value)}
                />
              </Field>

              <Field label="Email Address" required>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                />
              </Field>

              <Field label="Phone Number" required>
                <input
                  required
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                />
              </Field>

              <Field label="Industry Type">
                <select
                  value={form.industry}
                  onChange={(event) =>
                    update("industry", event.target.value)
                  }
                >
                  <option>-- Select Industry --</option>
                  <option>Pharmaceuticals</option>
                  <option>Water Treatment</option>
                  <option>Textile</option>
                  <option>Agriculture</option>
                  <option>Manufacturing</option>
                </select>
              </Field>

              <Field label="City" required>
                <input
                  required
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={(event) => update("city", event.target.value)}
                />
              </Field>
            </div>

            {/* REQUIREMENT */}

            <h3>Your Requirement</h3>

            <Field label="Requirement / Application" required>
              <textarea
                required
                maxLength={1000}
                placeholder="Please describe your requirement, application or any specific need..."
                value={form.requirement}
                onChange={(event) =>
                  update("requirement", event.target.value)
                }
              />
            </Field>

            {/* FILE UPLOAD */}

            <label className="quote-upload">
              <span>
                <CloudUpload size={18} />
                {fileName || "Drag & drop files here or Choose File"}
              </span>

              <input
                type="file"
                onChange={(event) =>
                  setFileName(event.target.files?.[0]?.name || "")
                }
              />

              <small>
                Supported formats: PDF, DOC, DOCX, XLS, XLSX (Max size: 10MB)
              </small>
            </label>

            {/* PRIVACY */}

            <label className="quote-privacy">
              <input
                required
                type="checkbox"
                checked={form.agree}
                onChange={(event) => update("agree", event.target.checked)}
              />

              I agree to the <strong>Privacy Policy</strong> and{" "}
              <strong>Terms &amp; Conditions.</strong>
            </label>

            {/* FORM ACTIONS */}

            <div className="quote-form-actions">
              <button type="submit">
                <Send size={13} />
                {sent ? "Request Sent" : "Submit Request"}
              </button>

              <button type="button" onClick={resetForm}>
                <RotateCcw size={13} />
                Reset Form
              </button>
            </div>

            <small className="quote-security">
              Your information is secure and will not be shared with third
              parties.
            </small>
          </form>
        </div>

        {/* ================= SIDEBAR ================= */}

        <aside className="quote-sidebar">
          <section className="quote-next">
            <h2>What Happens Next?</h2>

            {steps.map(([Icon, title, text]) => (
              <div key={title}>
                <i>
                  <Icon size={20} />
                </i>

                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </div>
            ))}
          </section>

          <section className="quote-bulk">
            <h2>
              Need Bulk Quantity or
              <br />
              Custom Solution?
            </h2>

            <p>
              We specialize in bulk supply and custom chemical solutions
              tailored to your needs.
            </p>

            <ul>
              <li>Custom Manufacturing</li>
              <li>Bulk Supply</li>
              <li>Technical Support</li>
              <li>Timely Delivery</li>
            </ul>

            <a href="/contact">
              <MessageCircle size={14} />
              Talk to Our Experts
            </a>
          </section>

          <section className="quote-contact">
            <h2>Quick Contact</h2>
            <ContactInfo compact />
          </section>
        </aside>
      </section>

      {/* ================= BENEFITS ================= */}

      <section className="quote-benefits">
        <div className="quote-container">
          {benefits.map(([Icon, title, text]) => (
            <div key={title}>
              <Icon size={28} />

              <span>
                <strong>{title}</strong>
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="quote-field">
      {label}
      {required && <b> *</b>}
      {children}
    </label>
  );
}

export default Quote;