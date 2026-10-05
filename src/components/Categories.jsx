import { useNavigate, Link } from "react-router-dom";

import {
  FlaskConical,
  Sparkles,
  Clock3,
  Droplets,
  Waves,
  ShieldCheck,
  Sun,
  Shield,
  Heart,
  Microscope,
  SprayCan,
  Gem,
  Atom,
  ArrowRight,
} from "lucide-react";

import skinLightening from "../assets/skin lighteninganti-pigmentation actives.png";
import antiAgeing from "../assets/anti-ageinganti wrinkle actives.png";
import moisturizers from "../assets/moisturizers emollientssmoothing actives.png";
import thickeners from "../assets/thickenersrheology modifiers.png";
import surfactants from "../assets/surfactants.png";
import antiAcne from "../assets/anti-acne-sebum-control.png";
import coldProcessable from "../assets/cold processable inverse emulsions.png";
import nanoEncapsulated from "../assets/nano encapsulated actives.png";
import conditioning from "../assets/conditioning agents.png";
import antiMicrobial from "../assets/anti-microbialanti-dandruff.png";
import sunscreen from "../assets/sunscreenuv filters.png";
import preservatives from "../assets/preservatives.png";
import bodyPolishing from "../assets/body polishing agent.png";
import specialtyProducts from "../assets/specialty products.png";
import silicones from "../assets/silicones.png";
import koreanProducts from "../assets/korean product range.png";
import sodiumHyaluronate from "../assets/range of sodium hyaluronate.png";




// ==================================================
// #1 - CATEGORY DATA
// ==================================================

const categories = [
  {
    title: (
      <>
        Skin Lightening/Anti-Pigmentation
      </>
    ),

    description: (
      <>
        Actives for brighter, even and radiant
        <br />
        looking skin.
      </>
    ),

    image: skinLightening,
    icon: Sparkles,
    slug: "skin-lightening",
  },

  {
    title: (
      <>
        Anti-Ageing /Anti-Wrinkle
      </>
    ),

    description: (
      <>
        Advanced actives for youthful and smoother
        <br />
        looking skin.
      </>
    ),

    image: antiAgeing,
    icon: Clock3,
    slug: "anti-ageing",
  },

  {
    title: (
      <>
        Moisturizers/Emollients
      </>
    ),

    description: (
      <>
        Hydrating and soothing solutions for soft,
        <br />
        healthy skin.
      </>
    ),

    image: moisturizers,
    icon: Droplets,
    slug: "moisturizers",
  },

  {
    title: (
      <>
        Thickeners/Rheology Modifiers
      </>
    ),

    description: (
      <>
        Texture and viscosity control for stable
        <br />
        formulations.
      </>
    ),

    image: thickeners,
    icon: Waves,
    slug: "thickeners",
  },

  {
    title: (
      <>
        Surfactants
      </>
    ),

    description: (
      <>
        High-performance cleansing and foaming
        <br />
        formulation solutions.
      </>
    ),

    image: surfactants,
    icon: Droplets,
    slug: "surfactants",
  },

  {
    title: (
      <>
        Anti-Acne/Sebum Control
      </>
    ),

    description: (
      <>
        Targeted actives for clearer skin and
        <br />
        sebum control.
      </>
    ),

    image: antiAcne,
    icon: ShieldCheck,
    slug: "anti-acne",
  },

  {
    title: (
      <>
        Cold Processable/Inverse Emulsions
      </>
    ),

    description: (
      <>
        Efficient solutions for skin and hair care
        <br />
        formulations.
      </>
    ),

    image: coldProcessable,
    icon: FlaskConical,
    slug: "cold-processable",
  },

  {
    title: (
      <>
        Nano Encapsulated Actives/Bio Actives
      </>
    ),

    description: (
      <>
        Advanced delivery systems for enhanced
        <br />
        active performance.
      </>
    ),

    image: nanoEncapsulated,
    icon: Atom,
    slug: "nano-encapsulated",
  },

  {
    title: (
      <>
        Conditioning Agents
      </>
    ),

    description: (
      <>
        Smoothness, softness and conditioning for
        <br />
        hair and skin.
      </>
    ),

    image: conditioning,
    icon: Heart,
    slug: "conditioning",
  },

  {
    title: (
      <>
        Anti-Microbial/Anti-Dandruff
      </>
    ),

    description: (
      <>
        Scalp care actives for microbial control and
        <br />
        dandruff management.
      </>
    ),

    image: antiMicrobial,
    icon: Shield,
    slug: "anti-microbial",
  },

  {
    title: (
      <>
        Sunscreen/UV Filters
      </>
    ),

    description: (
      <>
        Effective UV protection for modern sun care
        <br />
        formulations.
      </>
    ),

    image: sunscreen,
    icon: Sun,
    slug: "sunscreen",
  },

  {
    title: (
      <>
        Preservatives & Anti Oxidants
      </>
    ),

    description: (
      <>
        Protection against microbial growth and
        <br />
        oxidation.
      </>
    ),

    image: preservatives,
    icon: ShieldCheck,
    slug: "preservatives",
  },

  {
    title: (
      <>
        Body Polishing Agents
      </>
    ),

    description: (
      <>
        Exfoliating solutions for smoother and
        <br />
        radiant looking skin.
      </>
    ),

    image: bodyPolishing,
    icon: Gem,
    slug: "body-polishing",
  },

  {
    title: (
      <>
        Specialty Products
      </>
    ),

    description: (
      <>
        Innovative specialty ingredients for unique
        <br />
        formulations.
      </>
    ),

    image: specialtyProducts,
    icon: Microscope,
    slug: "specialty-products",
  },

  {
    title: (
      <>
        Silicones
      </>
    ),

    description: (
      <>
        Versatile solutions for silky feel, conditioning
        <br />
        and formulation.
      </>
    ),

    image: silicones,
    icon: FlaskConical,
    slug: "silicones",
  },

  {
    title: (
      <>
        Korean Product Range
      </>
    ),

    description: (
      <>
        Innovative K-Beauty ingredients for modern
        <br />
        personal care.
      </>
    ),

    image: koreanProducts,
    icon: SprayCan,
    slug: "korean-products",
  },

  {
    title: (
      <>
        Range of Sodium Hyaluronate
      </>
    ),

    description: (
      <>
        Advanced hydration solutions for skin care
        <br />
        formulations.
      </>
    ),

    image: sodiumHyaluronate,
    icon: Droplets,
    slug: "sodium-hyaluronate",
  },
];


// ==================================================
// #2 - CATEGORIES COMPONENT
// ==================================================

function Categories() {
  const navigate = useNavigate();

  return (
    <section
      className="categories"
      id="categories"
    >

      {/* ================================================== */}
      {/* #3 - CATEGORY MAIN CONTAINER */}
      {/* ================================================== */}

      <div className="site-container">


        {/* ================================================== */}
        {/* #4 - SECTION TITLE */}
        {/* ================================================== */}

        <div className="section-title">

          <h2>
            EXPLORE OUR{" "}
            <span>RM CATEGORIES</span>
          </h2>

          <span></span>

        </div>


        {/* ================================================== */}
        {/* #5 - CATEGORY GRID */}
        {/* ================================================== */}

        <div className="category-grid">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (
              <article
                className="category-card"
                key={category.slug || index}
              >


                {/* ================================================== */}
                {/* #6 - CATEGORY IMAGE SECTION */}
                {/* ================================================== */}

                <div className="category-image">

                 <img
                    src={category.image}
                    alt={`${category.slug} category`}
                    loading="lazy"
                  />


                  {/* ================================================== */}
                  {/* #7 - CATEGORY ICON */}
                  {/* ================================================== */}

                  <div className="category-icon">

                    <Icon size={21} />

                  </div>

                </div>


                {/* ================================================== */}
                {/* #8 - CATEGORY CONTENT */}
                {/* ================================================== */}

                <div className="category-body">


                  {/* ================================================== */}
                  {/* #9 - CATEGORY TITLE */}
                  {/* ================================================== */}

                  <h3>
                    {category.title}
                  </h3>


                  {/* ================================================== */}
                  {/* #10 - CATEGORY DESCRIPTION */}
                  {/* ================================================== */}

                  <p>
                    {category.description}
                  </p>


                  {/* ================================================== */}
                  {/* #11 - VIEW PRODUCTS LINK */}
                  {/* ================================================== */}

                  <Link to={`/products?category=${category.slug}`}>
                       View Products
                       <ArrowRight size={14} />
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}


export default Categories;