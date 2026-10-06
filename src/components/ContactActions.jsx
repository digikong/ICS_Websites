/* =========================================================
   1. CONTACT ACTIONS COMPONENT
========================================================= */

import { ArrowRight, FlaskConical, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../data/contactInfo";
import "./ContactActions.css";

/* =========================================================
   1.1 CONTACT ACTIONS CONTENT
========================================================= */

function ContactActions({
  title = "Industry-specific chemical solutions",
  highlightedTitle = "that drive your success.",
  description = "Let's connect and find the right chemicals for your business.",
}) {
  return (
    <section className="contact-actions">
      <div className="contact-actions-container">
        {/* =================================================
            2.1 ICON
        ================================================= */}

        <FlaskConical size={64} />

        {/* =================================================
            2.2 MESSAGE
        ================================================= */}

        <div>
          <h2>
            {title}
            <br />
            <span>{highlightedTitle}</span>
          </h2>

          <p>{description}</p>
        </div>

        {/* =================================================
            2.3 QUOTE ACTION
        ================================================= */}

        <a href="/quote" className="contact-actions-quote">
          Get a Quote <ArrowRight size={16} />
        </a>

        {/* =================================================
            2.4 WHATSAPP ACTION
        ================================================= */}

        <a
          className="contact-actions-whatsapp"
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactActions;
