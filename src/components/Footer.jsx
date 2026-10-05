import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

// import logo from "../assets/logo.png";

import { useState } from "react";


function Footer() {



    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = (e) => {
      e.preventDefault();

      if (!email) {
        setMessage("Please enter your email address.");
        return;
      }

      setMessage("Thank you for subscribing!");
      setEmail("");
    };

  return (
    <footer className="footer" id="contact">
      {/* ========================================
          FOOTER MAIN
      ======================================== */}

      <div className="site-container footer-main">
        {/* BRAND */}

        <div className="footer-brand">
          {/* <div className="footer-logo">
            <img
              src={logo}
              alt="CosmoChem Logo"
            />
          </div> */}

          <p>
            Delivering premium industrial, specialty
            and pharmaceutical chemicals with
            world-class quality, innovation and
            customer satisfaction.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">
          <h4>QUICK LINKS</h4>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/industries">Industries</a>
          <a href="/certifications">Certifications</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact Us</a>
          <a href="/careers">Careers</a>
        </div>

        {/* PRODUCTS */}

        <div className="footer-column">
          <h4>OUR PRODUCTS</h4>

          <a href="/products">Niacinamide</a>
          <a href="/products">Alpha Arbutin</a>
          <a href="/products">Kojic Acid</a>
          <a href="/products">Nano Active Retinaldehyde</a>
          <a href="/products">Liquid Peptides</a>
          <a href="/products">View All Products</a>
        </div>

        {/* INDUSTRIES */}

        <div className="footer-column">
          <h4>INDUSTRIES</h4>

          <a href="/industries/pharmaceuticals">Pharmaceuticals</a>
          <a href="/industries/personalcare">Personal Care</a>
          <a href="/industries/homecare">Home Care</a>
          <a href="/industries/food">Foods &amp; Nutraceuticals</a>
         
        </div>

        {/* CONTACT INFORMATION */}

    <div className="footer-column contact-column">
  <h4>CONTACT INFORMATION</h4>

  {/* Address */}
  <div className="footer-contact-item">
    <a
      href="https://maps.app.goo.gl/segzWVpxiCkwPWxK7"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open address in Google Maps"
    >
      <MapPin size={25} />
    </a>

    <a
      href="https://maps.app.goo.gl/segzWVpxiCkwPWxK7"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-contact-link"
    >
      <span>
        D-124 Noida-sector:07,
        <br />
        UP-201302
      </span>
    </a>
  </div>

  {/* Email */}
  <div className="footer-contact-item">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@innovisioncosmochem.com&su=Chemical%20Product%20Enquiry&body=Hello%20CosmoChem%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20chemical%20products.%0A%0AThank%20you.%20Regards"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send email to CosmoChem"
    >
      <Mail size={25} />
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@innovisioncosmochem.com&su=Chemical%20Product%20Enquiry&body=Hello%20CosmoChem%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20chemical%20products.%0A%0AThank%20you.%20Regards"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-contact-link"
    >
      <span>
        sales@innovisioncosmochem.com
      </span>
    </a>
  </div>

          <div className="footer-contact-item">
            <Clock size={25} />

            <span>
              Mon - Fri
              <br />
              9:30 AM - 6:30 PM
            </span>
          </div>
        </div>

        {/* NEWSLETTER */}

       {/* NEWSLETTER */}

        <div className="footer-column newsletter">
          <h4>NEWSLETTER</h4>

          <p>
            Subscribe to get the latest updates
            <br />
            on new products and offers.
          </p>

          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
            >
              <Send size={15} />
            </button>
          </form>

          {message && (
            <p className="newsletter-message">
              {message}
            </p>
          )}
        </div>
      </div>

      {/* ========================================
          FOOTER BOTTOM
      ======================================== */}

      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <span>
            © 2026 CosmoChem. All Rights Reserved.
          </span>

          <div>
            <a href="#">Privacy Policy</a>

            <i>|</i>

            <a href="#">Terms &amp; Conditions</a>

            <i>|</i>

            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;