/* =========================================================
   1. CONTACT INFO COMPONENT
========================================================= */

import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { getSiteConfig } from "../lib/cosmochemStore";
import "./ContactInfo.css";

/* =========================================================
   1.1 CONTACT INFO RENDERER
========================================================= */

function ContactInfo({
  compact = false,
  showCompany = false,
  showPhone = true,
  email = config.email,
  mode = "full",
}) {
  const config = getSiteConfig();
  const contactEmail = email || config.email;
  const item = (Icon, href, text, external = false) => (
    <a
      className="contact-info-item"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <Icon size={18} />
      <span>{text}</span>
    </a>
  );

  if (mode === "phone") {
    return (
      <div className="contact-info contact-info-compact">
        {item(Phone, config.phoneHref, config.phone)}
      </div>
    );
  }

  if (mode === "email") {
    return (
      <div className="contact-info contact-info-compact">
        {item(Mail, "mailto:" + contactEmail, contactEmail)}
      </div>
    );
  }

  if (mode === "whatsapp") {
    return (
      <div className="contact-info contact-info-compact">
        {item(
          MessageCircle,
          config.whatsappUrl,
          "Chat on WhatsApp",
          true
        )}
      </div>
    );
  }

  return (
    <div
      className={
        compact
          ? "contact-info contact-info-compact"
          : "contact-info"
      }
    >
      {showCompany && (
        <strong className="contact-info-company">
          {config.company}
        </strong>
      )}

      {item(
        MapPin,
        config.mapsUrl,
        config.address,
        true
      )}

      {item(Mail, "mailto:" + email, email)}

      {showPhone &&
        item(Phone, config.phoneHref, config.phone)}

      <div className="contact-info-item">
        <Clock3 size={18} />
        <span>{config.hours}</span>
      </div>

      {item(
        MessageCircle,
        config.whatsappUrl,
        "Chat on WhatsApp",
        true
      )}
    </div>
  );
}

export default ContactInfo;
