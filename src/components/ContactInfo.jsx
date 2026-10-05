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
}) {
  return (
    <div className={compact ? "contact-info contact-info-compact" : "contact-info"}>
      {showCompany && (
        <strong className="contact-info-company">
          {CONTACT_INFO.company}
        </strong>
      )}

      <a
        className="contact-info-item"
        href={CONTACT_INFO.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MapPin size={18} />
        <span>{CONTACT_INFO.address}</span>
      </a>

      <a
        className="contact-info-item"
        href={"mailto:" + email}
      >
        <Mail size={18} />
        <span>{email}</span>
      </a>

      {showPhone && (
        <a className="contact-info-item" href={CONTACT_INFO.phoneHref}>
          <Phone size={18} />
          <span>{CONTACT_INFO.phone}</span>
        </a>
      )}

      <div className="contact-info-item">
        <Clock3 size={18} />
        <span>{CONTACT_INFO.hours}</span>
      </div>

      <a
        className="contact-info-item"
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}

export default ContactInfo;
