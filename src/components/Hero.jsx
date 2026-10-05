import { useEffect, useState } from "react";

import {
  ArrowRight,
  Download,
  Play,
  MessageCircle,
  Phone,
  Mail,
  Headphones,
} from "lucide-react";

import heroImage from "../assets/hero.png";
import Mumbai from "../assets/Mumbai.png";
import Haridwar from "../assets/Haridwar.png";
import Bengaluru from "../assets/Bengaluru.png";
// import companyVideo from "../assets/cosmochem-intro.mp4";


/* =========================================================
   DOWNLOAD PUBLIC FILE
========================================================= */

function downloadPublicFile(filePath) {
  const link = document.createElement("a");

  link.href = filePath;
  link.download = "";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/* =========================================================
   HERO SECTION
========================================================= */

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  /* =======================================================
     HERO EXHIBITION SLIDER
  ======================================================= */

  const [heroSlide, setHeroSlide] = useState(0);

  const exhibitionImages = [
    heroImage,
    Mumbai,
    Haridwar,
    Bengaluru,
  ];
  

  /* =======================================================
     AUTO SLIDE — EVERY 10 SECONDS
  ======================================================= */

  useEffect(() => {
    const slider = setInterval(() => {
      setHeroSlide(
        (prev) =>
          (prev + 1) % exhibitionImages.length
      );
    }, 10000);

    return () => clearInterval(slider);
  }, []);


  return (
    <section
      className="hero"
      id="home"
    >

      {/* =====================================================
          HERO EXHIBITION IMAGE SLIDER
      ===================================================== */}

      <div className="hero-image-wrap">

        <div
          className="hero-slider"
          style={{
            transform: `translateX(-${heroSlide * 100}%)`,
          }}
        >

          {/* ORIGINAL HERO */}

          <img
            className="hero-image"
            src={heroImage}
            alt="CosmoChem laboratory"
          />

          {/* MUMBAI EXHIBITION */}

          <img
            className="hero-image"
            src={Mumbai}
            alt="Upcoming Chemical Industry Exhibition in Mumbai"
          />

          {/* HARIDWAR EXHIBITION */}

          <img
            className="hero-image"
            src={Haridwar}
            alt="Upcoming Chemical Industry Exhibition in Haridwar"
          />

          {/* BENGALURU EXHIBITION */}

          <img
            className="hero-image"
            src={Bengaluru}
            alt="Upcoming Chemical Industry Exhibition in Bengaluru"
          />

        </div>

      </div>


      {/* =====================================================
          HERO IMAGE FADE OVERLAY
      ===================================================== */}

      {/*
      <div className="hero-fade" />

      <div className="site-container hero-container">

        <div className="hero-content">

          <div className="hero-label">
            WELCOME TO ICS
          </div>

          <div className="hero-line" />

          <h2>
            Trusted <span>Industrial</span>
            <br /> Chemical Solutions for
            <br />
            Growing Industries
          </h2>

          <p>
            We manufacture and supply{" "}
            <strong>
              high-quality industrial, specialty and pharmaceutical chemicals
            </strong>{" "}
            backed by consistent quality, technical expertise and dependable
            global supply.
          </p>

        </div>
      </div>
      */}


      {/* =================================================
          HERO BUTTONS — SINGLE ROW
      ================================================= */}

      <div className="hero-buttons">

        <div className="hero-buttons-row">

          {/* Explore Products */}

          <a
            href="#categories"
            className="hero-primary"
          >
            Explore Products
            <ArrowRight size={17} />
          </a>


          {/* Download Catalogue */}

          <button
            className="hero-secondary"
            type="button"
            onClick={() =>
              downloadPublicFile(
                "/ICS_Catalogue.pdf"
              )
            }
          >
            Download Catalogue
            <Download size={17} />
          </button>


          {/* Chemical Leaflet */}

          <button
            className="hero-secondary"
            type="button"
            onClick={() =>
              downloadPublicFile(
                "/ICS_Leaflet.pdf"
              )
            }
          >
            Chemical Leaflet
            <Download size={17} />
          </button>


          {/* Export Leaflet */}

          <button
            className="hero-secondary"
            type="button"
            onClick={() =>
              downloadPublicFile(
                "/Export_leaflet.pdf"
              )
            }
          >
            Export Leaflet
            <Download size={17} />
          </button>


          {/* Watch Video */}

          <button
            className="watch-btn"
            type="button"
            onClick={() => setVideoOpen(true)}
          >

            <span className="watch-circle">

              <Play
                size={10}
                fill="currentColor"
              />

            </span>

            Watch Video

          </button>

        </div>

      </div>


      {/* =====================================================
          FLOATING CONTACT ACTIONS
      ===================================================== */}

      <div className="floating-actions">

        {/* WhatsApp */}

        <a
          href="https://wa.me/916395468419"
          target="_blank"
          rel="noreferrer"
        >

          <MessageCircle size={30} />

          <span>
            WhatsApp
          </span>

        </a>


        {/* Call */}

        <a href="tel:+916395468419">

          <Phone size={30} />

          <span>
            Call Us
          </span>

        </a>


        {/* Email */}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@innovisioncosmochem.com&su=Chemical%20Product%20Enquiry&body=Hello%20CosmoChem%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20chemical%20products.%0A%0AThank%20you."
          target="_blank"
          rel="noopener noreferrer"
        >

          <Mail size={30} />

          <span>
            Email Us
          </span>

        </a>


        {/* Quick Support */}

        <a href="/contact">

          <Headphones size={30} />

          <span>
            Quick
            <br />
            Support
          </span>

        </a>

      </div>


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {videoOpen && (

        <div
          className="home-video-backdrop"
          onClick={() => setVideoOpen(false)}
        >

          <div
            className="home-video-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
          >

            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
            </button>


            <video
              className="home-video"
              src="/cosmochem-intro.mp4"
              controls
              autoPlay
              playsInline
            />


            <h2>
              CosmoChem in Motion
            </h2>

            <p>
              Our team, facilities and chemical solutions are built
              around reliable quality.
            </p>

          </div>

        </div>

      )}

    </section>
  );
}

export default Hero;