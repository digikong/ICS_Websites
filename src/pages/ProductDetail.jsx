import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  FlaskConical,
  Grid2X2,
  Headphones,
  MessageCircle,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useSearchParams,  useNavigate } from "react-router-dom";


import alphaArbutin from "../assets/alpha-arbutin.png";
import betaArbutin from "../assets/beta-arbutin.png";
import kojicAcid from "../assets/kojic-acid.png";
import kojicAcidDipalmitate from "../assets/kojic-acid-dipalmitate.png";
import ethylAscorbicAcid from "../assets/ethyl-ascorbic-acid.png";
import niacinamide from "../assets/niacinamide-ip-cg.png";
import lGlutathioneReduced from "../assets/l-glutathione-reduced-lgr.png";
import sodiumAscorbylPhosphate from "../assets/sodium-ascorbyl-phosphate-sap.png";
import magnesiumAscorbylPhosphate from "../assets/magnesium-ascorbyl-phosphate-map.png";




import betaGlucan from "../assets/beta-glucan.png";
import biosaccharideGum1 from "../assets/biosaccharide-gum-1.png";
import soyaIsoflavones from "../assets/soya-isoflavones.png";
import nanoActiveRetinaldehyde from "../assets/nano-active-retinaldehyde.png";
import liquidPeptides from "../assets/liquid-peptides.png";


import sodiumPCA from "../assets/sodium-pca.png";
import allantoin from "../assets/allantoin.png";
import anhydrousBetaine from "../assets/anhydrous-betaine.png";
import hydroxyethylUrea from "../assets/hydroxyethyl-urea.png";
import dPanthenol from "../assets/d-panthenol.png";
import vegetableSqualane from "../assets/vegetable-squalane.png";



import "./ProductDetail.css";
import { PRODUCT_SEED } from "../data/productData";
import { getProducts } from "../lib/cosmochemStore";

const productData = {
  "alpha-arbutin": {
    slug: "alpha-arbutin",
    name: "Alpha Arbutin",
    image: alphaArbutin,
    cas: "84380-01-8",
    formula: "C12H16O7",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "272.25 g/mol",
    purity: "≥99%",
    shelf: "24 Months",
    text: "Alpha Arbutin is a skin-brightening active used in cosmetic formulations to help reduce the appearance of pigmentation and support a more even-looking skin tone.",
    synonyms: "Alpha-Arbutin",
    application: "Skin Lightening / Anti-Pigmentation",
  },

  "beta-arbutin": {
    slug: "beta-arbutin",
    name: "Beta Arbutin",
    image: betaArbutin,
    cas: "497-76-7",
    formula: "C12H16O7",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "272.25 g/mol",
    purity: "≥99%",
    shelf: "24 Months",
    text: "Beta Arbutin is a skin-brightening active used in cosmetic formulations to support an even-looking skin tone and reduce the appearance of pigmentation.",
    synonyms: "Beta-Arbutin",
    application: "Skin Lightening / Anti-Pigmentation",
  },

  "kojic-acid": {
    slug: "kojic-acid",
    name: "Kojic Acid",
    image: kojicAcid,
    cas: "501-30-4",
    formula: "C6H6O4",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "142.11 g/mol",
    purity: "≥99%",
    shelf: "24 Months",
    text: "Kojic Acid is a well-known cosmetic active used in skin-brightening formulations to help improve the appearance of uneven skin tone and pigmentation.",
    synonyms: "5-Hydroxy-2-Hydroxymethyl-4H-Pyran-4-One",
    application: "Skin Lightening / Anti-Pigmentation",
  },

  "kojic-acid-dipalmitate": {
    slug: "kojic-acid-dipalmitate",
    name: "Kojic Acid Dipalmitate",
    image: kojicAcidDipalmitate,
    cas: "79725-90-5",
    formula: "C38H66O6",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "618.93 g/mol",
    purity: "≥98%",
    shelf: "24 Months",
    text: "Kojic Acid Dipalmitate is an oil-soluble kojic acid derivative used in cosmetic formulations for skin-brightening and even-tone applications.",
    synonyms: "Kojic Dipalmitate",
    application: "Skin Lightening / Anti-Pigmentation",
  },

  "ethyl-ascorbic-acid": {
    slug: "ethyl-ascorbic-acid",
    name: "Ethyl Ascorbic Acid",
    image: ethylAscorbicAcid,
    cas: "86404-04-8",
    formula: "C8H12O6",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "204.18 g/mol",
    purity: "≥98%",
    shelf: "24 Months",
    text: "Ethyl Ascorbic Acid is a stable vitamin C derivative used in cosmetic formulations for antioxidant, brightening and even-skin-tone applications.",
    synonyms: "3-O-Ethyl Ascorbic Acid",
    application: "Skin Lightening / Anti-Pigmentation",
  },

  "niacinamide-ip-cg": {
    slug: "niacinamide-ip-cg",
    name: "Niacinamide (IP / CG)",
    image: niacinamide,
    cas: "98-92-0",
    formula: "C6H6N2O",
    grade: "IP / Cosmetic Grade",
    appearance: "White Crystalline Powder",
    molecular: "122.12 g/mol",
    purity: "≥99%",
    shelf: "24 Months",
    text: "Niacinamide is a versatile cosmetic active used to support skin barrier function, improve the appearance of uneven tone and maintain healthy-looking skin.",
    synonyms: "Nicotinamide / Vitamin B3",
    application: "Skin Care / Brightening",
  },

  "l-glutathione-reduced-lgr": {
    slug: "l-glutathione-reduced-lgr",
    name: "L-Glutathione Reduced (LGR)",
    image: lGlutathioneReduced,
    cas: "70-18-8",
    formula: "C10H17N3O6S",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "307.32 g/mol",
    purity: "≥98%",
    shelf: "24 Months",
    text: "L-Glutathione Reduced is an antioxidant active used in cosmetic formulations for antioxidant protection and skin-brightening applications.",
    synonyms: "Reduced Glutathione",
    application: "Skin Brightening / Antioxidant",
  },

  "sodium-ascorbyl-phosphate-sap": {
    slug: "sodium-ascorbyl-phosphate-sap",
    name: "Sodium Ascorbyl Phosphate (SAP)",
    image: sodiumAscorbylPhosphate,
    cas: "66170-10-3",
    formula: "C6H6Na3O9P",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "322.05 g/mol",
    purity: "≥95%",
    shelf: "24 Months",
    text: "Sodium Ascorbyl Phosphate is a stable vitamin C derivative used in cosmetic formulations for antioxidant, brightening and skin-conditioning applications.",
    synonyms: "SAP",
    application: "Skin Brightening / Antioxidant",
  },

  "magnesium-ascorbyl-phosphate-map": {
    slug: "magnesium-ascorbyl-phosphate-map",
    name: "Magnesium Ascorbyl Phosphate (MAP)",
    image: magnesiumAscorbylPhosphate,
    cas: "113170-55-1",
    formula: "C6H6MgO8P",
    grade: "Cosmetic Grade",
    appearance: "White to Off-White Powder",
    molecular: "278.39 g/mol",
    purity: "≥95%",
    shelf: "24 Months",
    text: "Magnesium Ascorbyl Phosphate is a stable vitamin C derivative used in cosmetic formulations for antioxidant, brightening and skin-conditioning applications.",
    synonyms: "MAP",
    application: "Skin Brightening / Antioxidant",
  },


  "beta-glucan": {
  slug: "beta-glucan",
  name: "Beta Glucan",
  image: betaGlucan,
  cas: "26874-89-5",
  formula: "Polysaccharide",
  grade: "Cosmetic Grade",
  appearance: "White to Off-White Powder",
  molecular: "Variable / Polymer",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Beta Glucan is a naturally derived polysaccharide used in cosmetic formulations for moisturizing, soothing, skin barrier support and anti-ageing applications. It helps retain moisture and supports a smoother and more comfortable skin appearance.",
  synonyms: "Beta-Glucan, β-Glucan",
  application: "Anti-Ageing / Skin Barrier / Skin Conditioning",
},

"biosaccharide-gum-1": {
  slug: "biosaccharide-gum-1",
  name: "Biosaccharide Gum-1",
  image: biosaccharideGum1,
  cas: "194237-89-3",
  formula: "Fermentation-Derived Polysaccharide",
  grade: "Cosmetic Grade",
  appearance: "Colorless to Light Yellow Liquid",
  molecular: "Polymeric / Variable",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Biosaccharide Gum-1 is a fermentation-derived polysaccharide used as a moisturizing, soothing and skin-conditioning active. It helps form a flexible moisture-binding film on the skin and provides a soft, smooth sensory finish.",
  synonyms: "Fucose-Rich Polysaccharide, Fucogel",
  application: "Moisturizing / Soothing / Anti-Ageing",
},

"soya-isoflavones": {
  slug: "soya-isoflavones",
  name: "Soya Isoflavones",
  image: soyaIsoflavones,
  cas: "574-12-9",
  formula: "Isoflavone Mixture / Supplier Specific",
  grade: "Cosmetic Grade",
  appearance: "Yellow to Light Brown Powder",
  molecular: "Variable",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Soya Isoflavones are plant-derived antioxidant ingredients used in anti-ageing and skin-conditioning formulations. They are commonly used to support the appearance of smoother, healthier and more youthful-looking skin.",
  synonyms: "Soy Isoflavones, Soybean Isoflavones",
  application: "Anti-Ageing / Antioxidant / Skin Conditioning",
},

"nano-active-retinaldehyde": {
  slug: "nano-active-retinaldehyde",
  name: "Nano Active Retinaldehyde",
  image: nanoActiveRetinaldehyde,
  cas: "116-31-4",
  formula: "C20H28O",
  grade: "Cosmetic Grade",
  appearance: "Supplier-Specific Nano Dispersion",
  molecular: "284.44 g/mol",
  purity: "As per supplier specification",
  shelf: "As per supplier TDS",
  text: "Nano Active Retinaldehyde is a retinaldehyde-based cosmetic active used in anti-ageing and anti-wrinkle formulations. The nano-delivery system is designed to improve dispersion and formulation performance. Exact composition, carrier system and active concentration should be confirmed from the supplier TDS.",
  synonyms: "Retinal, Retinaldehyde, Vitamin A Aldehyde",
  application: "Anti-Ageing / Anti-Wrinkle / Skin Renewal",
},

"liquid-peptides": {
  slug: "liquid-peptides",
  name: "Liquid Peptides",
  image: liquidPeptides,
  cas: "Proprietary Blend",
  formula: "Peptide Blend",
  grade: "Cosmetic Grade",
  appearance: "Clear to Slightly Yellow Liquid",
  molecular: "Variable by Peptide",
  purity: "As per supplier specification",
  shelf: "As per supplier TDS",
  text: "Liquid Peptides are peptide-based cosmetic actives used in anti-ageing, skin-firming, skin-conditioning and anti-wrinkle formulations. They may be used in serums, creams, eye-care products and other advanced skincare formulations.",
  synonyms: "Cosmetic Peptide Blend",
  application: "Anti-Ageing / Skin Firming / Anti-Wrinkle",
},

"sodium-pca": {
  slug: "sodium-pca",
  name: "Sodium PCA",
  image: sodiumPCA,
  cas: "28874-51-3",
  formula: "C5H8NNaO4",
  grade: "Cosmetic Grade",
  appearance: "Clear to Pale Yellow Liquid",
  molecular: "169.11 g/mol",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Sodium PCA is a natural moisturizing factor-related humectant used in skincare formulations. It helps attract and retain moisture and is suitable for hydrating creams, lotions, serums and facial-care products.",
  synonyms: "Sodium Pyrrolidone Carboxylate",
  application: "Moisturizers / Skin Conditioning / Hydration",
},

"allantoin": {
  slug: "allantoin",
  name: "Allantoin",
  image: allantoin,
  cas: "97-59-6",
  formula: "C4H6N4O3",
  grade: "Cosmetic Grade",
  appearance: "White Crystalline Powder",
  molecular: "158.12 g/mol",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Allantoin is a soothing and skin-conditioning ingredient used in moisturizers, lotions, creams and sensitive-skin formulations. It helps improve skin comfort and supports a smooth skin feel.",
  synonyms: "Glyoxyldiureide",
  application: "Soothing / Skin Conditioning / Moisturizing",
},

"anhydrous-betaine": {
  slug: "anhydrous-betaine",
  name: "Anhydrous Betaine — Requaq BT 99",
  image: anhydrousBetaine,
  cas: "107-43-7",
  formula: "C5H11NO2",
  grade: "Cosmetic Grade",
  appearance: "White Crystalline Powder",
  molecular: "117.15 g/mol",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Anhydrous Betaine is a moisture-balancing and skin-conditioning active used in moisturizing and soothing skincare formulations. Requaq BT 99 is a commercial grade reference; exact purity and specification should be taken from the supplier TDS.",
  synonyms: "Betaine, Trimethylglycine",
  application: "Moisturizing / Hydration / Skin Conditioning",
},

"hydroxyethyl-urea": {
  slug: "hydroxyethyl-urea",
  name: "Hydroxyethyl Urea",
  image: hydroxyethylUrea,
  cas: "2078-71-9",
  formula: "C3H8N2O2",
  grade: "Cosmetic Grade",
  appearance: "White to Off-White Powder",
  molecular: "104.11 g/mol",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Hydroxyethyl Urea is a humectant used in skincare products to improve hydration, softness and smoothness. It is suitable for creams, lotions, gels, serums and body-care formulations.",
  synonyms: "Hydroxyethylurea",
  application: "Moisturizing / Humectant / Skin Conditioning",
},

"d-panthenol": {
  slug: "d-panthenol",
  name: "D-Panthenol",
  image: dPanthenol,
  cas: "81-13-0",
  formula: "C9H19NO4",
  grade: "Cosmetic Grade",
  appearance: "White Crystalline Powder",
  molecular: "205.25 g/mol",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "D-Panthenol is Pro-Vitamin B5 and is widely used as a moisturizing, soothing and conditioning ingredient in skincare and haircare formulations. It supports hydration and improves the feel of skin and hair.",
  synonyms: "Dexpanthenol, Pro-Vitamin B5",
  application: "Moisturizing / Soothing / Skin and Hair Conditioning",
},

"vegetable-squalane": {
  slug: "vegetable-squalane",
  name: "Vegetable Squalane",
  image: vegetableSqualane,
  cas: "111-01-3",
  formula: "C30H62",
  grade: "Cosmetic Grade",
  appearance: "Clear, Colorless to Pale Yellow Liquid",
  molecular: "422.82 g/mol",
  purity: "As per supplier specification",
  shelf: "24 Months",
  text: "Vegetable Squalane is a lightweight plant-derived emollient used in creams, facial oils, serums and other skincare formulations. It helps soften the skin, improve smoothness and support moisture retention.",
  synonyms: "Squalane, Plant-Derived Squalane",
  application: "Emollient / Moisturizing / Skin Conditioning",
},
};

const relatedProducts = [
  ["Alpha Arbutin", alphaArbutin, "alpha-arbutin"],
  ["Beta Arbutin", betaArbutin, "beta-arbutin"],
  ["Kojic Acid", kojicAcid, "kojic-acid"],
  [
    "Kojic Acid Dipalmitate",
    kojicAcidDipalmitate,
    "kojic-acid-dipalmitate",
  ],
  ["Ethyl Ascorbic Acid", ethylAscorbicAcid, "ethyl-ascorbic-acid"],
  ["Niacinamide (IP / CG)", niacinamide, "niacinamide-ip-cg"],
  [
    "L-Glutathione Reduced (LGR)",
    lGlutathioneReduced,
    "l-glutathione-reduced-lgr",
  ],
  [
    "Sodium Ascorbyl Phosphate (SAP)",
    sodiumAscorbylPhosphate,
    "sodium-ascorbyl-phosphate-sap",
  ],
  [
    "Magnesium Ascorbyl Phosphate (MAP)",
    magnesiumAscorbylPhosphate,
    "magnesium-ascorbyl-phosphate-map",
  ],


  [
  "Beta Glucan",
  betaGlucan,
  "beta-glucan",
],

[
  "Biosaccharide Gum-1",
  biosaccharideGum1,
  "biosaccharide-gum-1",
],

[
  "Soya Isoflavones",
  soyaIsoflavones,
  "soya-isoflavones",
],

[
  "Nano Active Retinaldehyde",
  nanoActiveRetinaldehyde,
  "nano-active-retinaldehyde",
],

[
  "Liquid Peptides",
  liquidPeptides,
  "liquid-peptides",
],

[
  "Sodium PCA",
  sodiumPCA,
  "sodium-pca",
],

[
  "Allantoin",
  allantoin,
  "allantoin",
],

[
  "Anhydrous Betaine",
  anhydrousBetaine,
  "anhydrous-betaine",
],

[
  "Hydroxyethyl Urea",
  hydroxyethylUrea,
  "hydroxyethyl-urea",
],

[
  "D-Panthenol",
  dPanthenol,
  "d-panthenol",
],

[
  "Vegetable Squalane",
  vegetableSqualane,
  "vegetable-squalane",
],

];

const tabs = ["Description", "Application", "Specifications"];

function ProductDetail() {

  const navigate = useNavigate();

  const { slug } = useParams();
  const storedProducts = getProducts(PRODUCT_SEED);
  const storedProduct = storedProducts.find((item) => item.slug === slug);
  const product = {
    ...(productData[slug] || productData["alpha-arbutin"]),
    ...(storedProduct || {}),
  };

  const [activeTab, setActiveTab] = useState("Description");
  const [activeImage, setActiveImage] = useState(product.image);
  const [quoteSent, setQuoteSent] = useState(false);

  useEffect(() => {
    setActiveImage(product.image);
    setActiveTab("Description");
    setQuoteSent(false);
  }, [product.image]);

  //Variation of images
  const thumbnailImages = [product.image];

  const specifications = [
    [Grid2X2, "Synonyms", product.synonyms],
    [ShieldCheck, "Grade", product.grade],
    [FlaskConical, "Molecular Weight", product.molecular],
    [CheckCircle2, "Appearance", product.appearance],
    [CheckCircle2, "Purity", product.purity],
    [FileText, "Shelf Life", product.shelf],
  ];

  const packagingOptions = [
    "25 KG HDPE Drum",
    "50 KG HDPE Drum",
    "200 KG HDPE Drum",
    "IBC Tank (1000 KG)",
    "Bulk in Tanker",
  ];

  const benefits = [
    [ShieldCheck, "Quality Assured", "Stringent quality checks"],
    [Truck, "On-time Delivery", "Timely & reliable delivery"],
    [Box, "Secure Packaging", "Leak-proof & safe"],
    [Headphones, "Expert Support", "We're here to help"],
  ];

  return (
    <main className="product-detail-page">
      <div className="product-detail-container product-detail-breadcrumb">
        Home <span>›</span> Products <span>›</span> {product.name}
      </div>

      <section className="product-detail-container product-detail-layout">
        <div className="product-detail-main">
          <div className="product-overview">
            <div className="product-detail-gallery">
              <img
                className="product-main-image"
                src={activeImage}
                alt={product.name}
              />

              <div className="product-thumbnails">
                {thumbnailImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    className={activeImage === image ? "active" : ""}
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail-info">
              <h1>{product.name}</h1>

              <div className="product-meta">
                CAS No.: {product.cas}
                <span>|</span>
                Chemical Formula: {product.formula}
              </div>

              {/* <strong className="stock-badge">In Stock</strong>

              <p>{product.text}</p> */}

              <div className="product-spec-grid">
                {specifications.map(([Icon, label, value]) => (
                  <div key={label}>
                    <Icon size={20} />

                    <span>
                      <strong>{label}</strong>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* <div className="detail-actions">
                <button onClick={() => setQuoteSent(true)}>
                  <MessageCircle size={15} />
                  {quoteSent ? "Quote Requested" : "Request a Quote"}
                </button>

                <button>
                  <Download size={15} />
                  Download TDS
                </button>

                <button>
                  <Download size={15} />
                  Download SDS
                </button>

                <button>
                  <Download size={15} />
                  Download COA
                </button>
              </div> */}
            </div>
          </div>

          <section className="product-tabs">
            <div className="product-tab-buttons">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="product-tab-content">
              <h3>{activeTab}</h3>

              {activeTab === "Description" ? (
                <>
                  <p>
                    {product.text} This product is manufactured and supplied
                    under strict quality controls for dependable results.
                  </p>

                  <ul>
                    <li>
                      High Purity: Minimum guaranteed specification.
                    </li>
                    <li>
                      Versatile Use: Suitable for a wide range of industrial
                      applications.
                    </li>
                    <li>
                      Consistent Quality: Manufactured under strict quality
                      control.
                    </li>
                    <li>
                      Safe Packaging: Available in multiple packaging options.
                    </li>
                  </ul>

                  <h4>Typical Specifications</h4>

                  <table>
                    <tbody>
                      <tr>
                        <th>Parameter</th>
                        <th>Unit</th>
                        <th>Specification</th>
                      </tr>

                      <tr>
                        <td>Assay</td>
                        <td>% w/w</td>
                        <td>Min. {product.purity}</td>
                      </tr>

                      <tr>
                        <td>Color</td>
                        <td>-</td>
                        <td>Max. 10</td>
                      </tr>

                      <tr>
                        <td>Moisture</td>
                        <td>% w/w</td>
                        <td>Max. 0.2</td>
                      </tr>

                      <tr>
                        <td>Appearance</td>
                        <td>-</td>
                        <td>{product.appearance}</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ) : (
                <p>
                  {activeTab} information for {product.name} is available
                  from our technical team. Request the latest product
                  document for complete details.
                </p>
              )}
            </div>
          </section>
        </div>

        <aside className="product-detail-sidebar">
          <section>
            <h2>Available Packaging</h2>

            {packagingOptions.map((item) => (
              <div className="packaging-option" key={item}>
                <Package size={15} />
                {item}
              </div>
            ))}

            <button className="availability-btn"
              onClick={() => navigate("/quote")}>
              Check Availability
            </button>
          </section>

          <section className="custom-solution">
            <h2>Need Custom Solution?</h2>

            <p>
              We provide customized chemical solutions as per your
              requirement.
            </p>

            <ul>
              <li>Custom Packaging</li>
              <li>Bulk Quantity</li>
              <li>Technical Support</li>
            </ul>

            <a href="/contact">
              <Headphones size={18} />
              Contact Our Experts
            </a>
          </section>

          <section>
            <h2>Related Products</h2>

            {relatedProducts.map(([name, image, productSlug]) => (
              <a
                className="related-product"
                key={name}
                href={`/products/${productSlug}`}
              >
                <img src={image} alt={name} />

                <span>
                  <strong>{name}</strong>
                  <small>Cosmetic Grade</small>
                </span>

                <ChevronRight size={14} />
              </a>
            ))}

            <Link
              to={`/products/${product.slug}`}
              className="product-link"
            >
              View Product
              <ArrowRight size={20} />
            </Link>

            <a className="all-products-link" href="/products">
              View All Products
              <Grid2X2 size={16} />
            </a>
          </section>
        </aside>
      </section>

      <section className="product-detail-benefits">
        <div className="product-detail-container">
          {benefits.map(([Icon, title, text]) => (
            <div key={title}>
              <Icon size={24} />

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

export default ProductDetail;