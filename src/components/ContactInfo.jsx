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

import { CONTACT_INFO } from "../lib/cosmochemStore";
import "./ContactInfo.css";

/* =========================================================
   1.1 CONTACT INFO RENDERER
========================================================= */

function ContactInfo({
  compact = false,
  showCompany = false,
  showPhone = true,
  email = CONTACT_INFO.email,
  mode = "full",
}) {
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
        {item(Phone, CONTACT_INFO.phoneHref, CONTACT_INFO.phone)}
      </div>
    );
  }

  if (mode === "email") {
    return (
      <div className="contact-info contact-info-compact">
        {item(Mail, "mailto:" + email, email)}
      </div>
    );
  }

  if (mode === "whatsapp") {
    return (
      <div className="contact-info contact-info-compact">
        {item(
          MessageCircle,
          CONTACT_INFO.whatsappUrl,
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
          {CONTACT_INFO.company}
        </strong>
      )}

      {item(
        MapPin,
        CONTACT_INFO.mapsUrl,
        CONTACT_INFO.address,
        true
      )}

      {item(Mail, "mailto:" + email, email)}

      {showPhone &&
        item(Phone, CONTACT_INFO.phoneHref, CONTACT_INFO.phone)}

      <div className="contact-info-item">
        <Clock3 size={18} />
        <span>{CONTACT_INFO.hours}</span>
      </div>

      {item(
        MessageCircle,
        CONTACT_INFO.whatsappUrl,
        "Chat on WhatsApp",
        true
      )}
    </div>
  );
}

export default ContactInfo;
