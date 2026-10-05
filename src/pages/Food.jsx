import React, { useEffect } from "react";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Flower2,
  Globe2,
  Grid2X2,
  HandHeart,
  Leaf,
  Package,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Wheat,
  HeartPulse,
  FlaskConical,
} from "lucide-react";


/* =========================================================
   FOOD & NUTRACEUTICAL IMAGES
========================================================= */

import SupplementsImage from "../assets/Supplements.png";
import SuperfoodImage from "../assets/Superfood.png";
import SmoothieImage from "../assets/Smoothie.png";
import SoilImage from "../assets/Soil.png";


import "./Food.css";


/* =========================================================
   HERO FEATURES
========================================================= */

const heroFeatures = [
  {
    icon: Leaf,
    title: "Quality",
    subtitle: "Ingredients",
  },
  {
    icon: FlaskConical,
    title: "Formulation",
    subtitle: "Support",
  },
  {
    icon: HeartPulse,
    title: "Nutrition",
    subtitle: "Focused",
  },
  {
    icon: Globe2,
    title: "Global",
    subtitle: "Supply",
  },
];


/* =========================================================
   FEATURE CARDS
========================================================= */

const featureCards = [
  {
    icon: Leaf,
    title: "Functional Ingredients",
    text: "Ingredients designed for nutritional value, functionality and consistent performance.",
  },
  {
    icon: Wheat,
    title: "Food Ingredients",
    text: "Specialty ingredients for diverse food and beverage formulations.",
  },
  {
    icon: HeartPulse,
    title: "Nutraceutical Solutions",
    text: "Ingredients for nutrition, wellness and health-focused products.",
  },
  {
    icon: FlaskConical,
    title: "Formulation Support",
    text: "Technical ingredient solutions for modern formulation requirements.",
  },
];


/* =========================================================
   FOOD & NUTRACEUTRICAL PAGE
========================================================= */

function Food() {

  /* =======================================================
     SEO
  ======================================================= */

  useEffect(() => {

    document.title =
      "Food & Nutraceutical Ingredients | Specialty Solutions | CosmoChem";


    const description =
      "CosmoChem provides high-quality food and nutraceutical ingredients, specialty chemicals and formulation solutions for food, beverage, nutrition and wellness applications worldwide.";


    let metaDescription =
      document.querySelector('meta[name="description"]');


    if (!metaDescription) {

      metaDescription = document.createElement("meta");

      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(metaDescription);
    }


    metaDescription.setAttribute(
      "content",
      description
    );


    const keywords =
      "food ingredients, nutraceutical ingredients, food grade ingredients, specialty food chemicals, food additives, nutritional ingredients, nutraceutical solutions, food beverage ingredients, functional ingredients, nutrition ingredients, global food ingredient supplier";


    let metaKeywords =
      document.querySelector('meta[name="keywords"]');


    if (!metaKeywords) {

      metaKeywords = document.createElement("meta");

      metaKeywords.setAttribute(
        "name",
        "keywords"
      );

      document.head.appendChild(metaKeywords);
    }


    metaKeywords.setAttribute(
      "content",
      keywords
    );


    let canonical =
      document.querySelector('link[rel="canonical"]');


    if (!canonical) {

      canonical = document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(canonical);
    }


    canonical.setAttribute(
      "href",
      `${window.location.origin}/industries/foods-nutraceuticals`
    );

  }, []);


  return (

    <main className="Food-page">


      {/* =====================================================
          1. HERO SECTION
      ===================================================== */}

      <section className="Food-hero">


        <img
          className="Food-hero-bg"
          src={SupplementsImage}
          alt="Supplements and nutraceutical ingredients for nutrition and wellness formulations"
        />


        <div className="Food-hero-overlay" />


        <div className="Food-hero-inner">


          {/* -------------------------------------------------
             Breadcrumb
          ------------------------------------------------- */}

          <div className="Food-breadcrumb">

            <span>Home</span>

            <span>›</span>

            <span>Industries</span>

            <span>›</span>

            <span>Foods & Nutraceuticals</span>

          </div>


          {/* -------------------------------------------------
             Hero Row
          ------------------------------------------------- */}

          <div className="Food-hero-row">


            <div className="Food-hero-copy">

              <h1>
                Foods & <span>Nutraceuticals</span>
              </h1>


              <h2>
                Innovative Ingredients for
                <br />
                Better Nutrition &amp; Wellness
              </h2>


              <p>
                High-quality food-grade ingredients and specialty
                chemical solutions for food, beverage, nutritional
                and nutraceutical formulations.
              </p>


              {/* Button intentionally available */}

              {/* <button
                className="Food-quote-btn"
                type="button"
              >
                Get a Quote

                <ArrowRight size={16} />

              </button> */}

            </div>


            {/* -------------------------------------------------
               Hero Side Text
            ------------------------------------------------- */}

            <div className="Food-hero-aside">

              <span>PURE</span>

              <span>SAFE</span>

              <span>NATURAL</span>

              <span>NUTRITION</span>

            </div>


          </div>


          {/* -------------------------------------------------
             Hero Features
          ------------------------------------------------- */}

          <div className="Food-hero-features">

            {heroFeatures.map(
              ({
                icon: Icon,
                title,
                subtitle,
              }) => (

                <div
                  className="Food-feature"
                  key={title}
                >

                  <Icon size={28} />

                  <div>

                    <strong>{title}</strong>

                    <strong>{subtitle}</strong>

                  </div>

                </div>

              )
            )}

          </div>


        </div>

      </section>



      {/* =====================================================
          2. TRUST / INTRO SECTION
      ===================================================== */}

      <section
        className="Food-trust"
        id="overview"
      >


        <div className="Food-trust-inner">


          {/* -------------------------------------------------
             Content
          ------------------------------------------------- */}

          <div className="Food-trust-copy">

            <span className="Food-kicker">
              NUTRITION POWERED BY CHEMISTRY
            </span>


            <h2>

              Specialty Ingredients

              <br />

              for{" "}
              <span>
                Food &amp; Nutraceutical
              </span>{" "}
              Formulations

            </h2>


            <p>

              At CosmoChem, we provide high-performance
              ingredients and specialty chemical solutions
              for food, beverage, nutrition and nutraceutical
              applications. Our solutions help businesses
              create safe, effective and innovative products
              for modern consumers worldwide.

            </p>


            {/* <button
              className="Food-primary-btn"
              type="button"
            >

              Explore Our Solutions

              <ArrowRight size={15} />

            </button> */}

          </div>



          {/* -------------------------------------------------
             Image
          ------------------------------------------------- */}

          <div className="Food-trust-visual">

            <img
              src={SuperfoodImage}
              alt="Specialty food and nutraceutical ingredients"
            />


            <div className="Food-trust-badges">

              <span>
                Nature Inspired
              </span>

              <span>
                Science Backed
              </span>

              <span>
                Nutrition Driven
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* =====================================================
          3. FEATURE CARDS
      ===================================================== */}

      <section className="Food-cards">

        {featureCards.map(
          ({
            icon: Icon,
            title,
            text,
          }) => (

            <article
              className="Food-card"
              key={title}
            >

              <Icon size={30} />

              <div>

                <h3>{title}</h3>

                <p>{text}</p>

              </div>

            </article>

          )
        )}

      </section>



      {/* =====================================================
          4. APPLICATION / SOLUTION SECTION
      ===================================================== */}

      <section
        className="Food-solution"
        id="applications"
      >


        {/* -------------------------------------------------
           Image
        ------------------------------------------------- */}

        <div className="Food-solution-visual">

          <img
            src={SmoothieImage}
            alt="Smoothies and functional beverages"
          />


          <div className="Food-solution-overlay">

            <span>

              Formulating

              <br />

              Better Nutrition

              <br />

              for Tomorrow

            </span>


            <i />

          </div>

        </div>



        {/* -------------------------------------------------
           Content
        ------------------------------------------------- */}

        <div className="Food-solution-content">

          <span className="Food-kicker">
            WIDE RANGE OF APPLICATIONS
          </span>


          <h2>

            Creating Possibilities

            <br />

            in{" "}
            <span>
              Food &amp; Nutrition
            </span>

          </h2>


          <p>

            Our ingredients are widely used across food,
            beverage, nutrition and nutraceutical
            applications, supporting innovative formulations
            for global markets.

          </p>


          <ul>

            <li>
              Functional Food Formulations
            </li>

            <li>
              Nutraceutical &amp; Dietary Supplements
            </li>

            <li>
              Food &amp; Beverage Applications
            </li>

            <li>
              Health &amp; Wellness Products
            </li>

            <li>
              Sports Nutrition &amp; Functional Beverages
            </li>

            <li>
              Plant-Based &amp; Clean Label Formulations
            </li>

          </ul>

        </div>


      </section>



      {/* =====================================================
          5. GLOBAL STATS
      ===================================================== */}

      <section className="Food-stats">

        <div className="Food-stats-inner">


          <div className="Food-stat">

            <Globe2 size={38} />

            <div>

              <strong>20+</strong>

              <span>
                Countries Served
              </span>

            </div>

          </div>



          <div className="Food-stat">

            <Users size={38} />

            <div>

              <strong>500+</strong>

              <span>
                Satisfied Clients
              </span>

            </div>

          </div>



          <div className="Food-stat">

            <FlaskConical size={38} />

            <div>

              <strong>100+</strong>

              <span>
                Specialty Ingredients
              </span>

            </div>

          </div>



          <div className="Food-stat">

            <BadgeCheck size={38} />

            <div>

              <strong>25+</strong>

              <span>
                Years of Excellence
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* =====================================================
          6. SUSTAINABILITY SECTION
      ===================================================== */}

      <section
        className="Food-sustainability"
        id="sustainability"
      >


        {/* -------------------------------------------------
           Image
        ------------------------------------------------- */}

        <div className="Food-sustainability-visual">

          <img
            src={SoilImage}
            alt="Sustainable food ingredients and responsible sourcing"
          />


          <div className="Food-sustainability-overlay">

            <span>

              Sustainable

              <br />

              Ingredients for

              <br />

              a Healthier

              <br />

              Planet

            </span>


            <i />

          </div>

        </div>



        {/* -------------------------------------------------
           Content
        ------------------------------------------------- */}

        <div className="Food-sustainability-content">

          <span className="Food-kicker">
            SUSTAINABLE &amp; RESPONSIBLE
          </span>


          <h2>

            Nutrition with a

            <br />

            <span>
              Purpose
            </span>

          </h2>


          <p>

            We are committed to responsible sourcing,
            sustainable practices and safe ingredient
            solutions that support people, products
            and the planet.

          </p>


          {/* <button
            className="Food-primary-btn"
            type="button"
          >

            Our Sustainability Approach

            <ArrowRight size={15} />

          </button> */}

        </div>


      </section>



      {/* =====================================================
          7. FINAL CTA
      ===================================================== */}

      <section className="Food-cta">


        <div className="Food-cta-text">


          <span className="Food-cta-mark">
            ✦
          </span>


          <p>

            Let&apos;s Create Better Nutrition Together

            <small>

              Partner with CosmoChem for high-quality
              food and nutraceutical ingredients and
              dedicated technical support.

            </small>

          </p>


        </div>



        <div className="Food-cta-actions">


          <button
            className="Food-cta-primary"
            type="button"
          >

            Get a Quote

            <ArrowRight size={16} />

          </button>


          <button
            className="Food-cta-secondary"
            type="button"
          >

            Chat on WhatsApp

          </button>


        </div>


      </section>


    </main>
  );
}


export default Food;