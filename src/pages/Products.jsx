import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import {
  Grid2X2,
  Factory,
  Droplets,
  Search,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  List,
  FlaskConical,
  ShieldCheck,
  BadgeDollarSign,
  Truck,
  Headphones,
  MessageCircle,
  ArrowRight,
  Globe,
  FileCheck,

  // RM CATEGORY ICONS
  SunMedium,
  Clock3,
  Layers3,
  Bubbles,
  Snowflake,
  Atom,
  Sparkles,
  ShieldPlus,
  Sun,
  CircleDot,
  Waves,
  Flower2,
  Droplet,
} from "lucide-react";

import productsHero from "../assets/products-hero.png";


import biosaccharideGum1 from "../assets/biosaccharide-gum-1.png";









import "./Products.css";
import { getProducts } from "../lib/cosmochemStore";
import { PRODUCT_SEED } from "../data/productData";

function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const categoryMap = {
    "skin-lightening": "Skin Lightening / Anti-Pigmentation Actives",
    "anti-ageing": "Anti-Ageing / Anti-Wrinkle Actives",
    moisturizers: "Moisturizers / Emollients / Soothing Actives",
    thickeners: "Thickeners / Rheology Modifiers",
    surfactants: "Surfactants",
    "anti-acne": "Anti-Acne / Sebum Control",
    "cold-processable":
      "Cold Processable Inverse Emulsions for Skin and Hair Care Formulations",
    "nano-encapsulated": "Nano Encapsulated Actives / Bio Actives",
    conditioning: "Conditioning Agents",
    "anti-microbial": "Anti-Microbial / Anti-Dandruff",
    sunscreen: "Sunscreen / UV Filters",
    preservatives: "Preservatives & Anti Oxidants",
    "body-polishing": "Body Polishing Agent",
    "specialty-products": "Specialty Products",
    silicones: "Silicones",
    "korean-products": "Korean Product Range",
    "sodium-hyaluronate": "Range of Sodium Hyaluronate",
  };

  const initialCategory =
    categoryMap[categoryParam] || "All Products";

  const categories = [
    ["All Products", Grid2X2, "all"],
    ["Skin Lightening", SunMedium, "skin-lightening"],
    ["Anti-Ageing", Clock3, "anti-ageing"],
    ["Moisturizers", Droplets, "moisturizers"],
    ["Thickeners", Layers3, "thickeners"],
    ["Surfactants", Bubbles, "surfactants"],
    ["Anti-Acne", ShieldCheck, "anti-acne"],
    ["Cold Processable", Snowflake, "cold-processable"],
    ["Nano Encapsulated", Atom, "nano-encapsulated"],
    ["Conditioning", Sparkles, "conditioning"],
    ["Anti-Microbial", ShieldPlus, "anti-microbial"],
    ["Sunscreen", Sun, "sunscreen"],
    ["Preservatives", ShieldCheck, "preservatives"],
    ["Body Polishing", CircleDot, "body-polishing"],
    ["Specialty Products", FlaskConical, "specialty-products"],
    ["Silicones", Waves, "silicones"],
    ["Korean Product Range", Flower2, "korean-products"],
    ["Sodium Hyaluronate", Droplet, "sodium-hyaluronate"],
  ];

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [products, setProducts] = useState(() => getProducts(PRODUCT_SEED));

  useEffect(() => {
    const refreshProducts = () => setProducts(getProducts(PRODUCT_SEED));
    refreshProducts();
    window.addEventListener("cosmochem-content-change", refreshProducts);
    return () => window.removeEventListener("cosmochem-content-change", refreshProducts);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [casNumber, setCasNumber] = useState("");
  const [grade, setGrade] = useState("All Grades");
  const [application, setApplication] = useState("All Applications");
  const [form, setForm] = useState("All Forms");
  const [sortBy, setSortBy] = useState("Popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquirySent, setInquirySent] = useState(false);

  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    requirement: "",
  });

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        !normalizedSearch ||
        `${product.name} ${product.cas}`
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCas =
        !casNumber.trim() ||
        product.cas.includes(casNumber.trim());

      // const matchesGrade =
      //   grade === "All Grades" || product.grade === grade;

      // const matchesApplication =
      //   application === "All Applications" ||
      //   product.application === application;

      const matchesForm =
        form === "All Forms" || product.form === form;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesCas &&
        // matchesGrade &&
        // matchesApplication &&
        matchesForm
      );
    });

    return [...filtered].sort((firstProduct, secondProduct) => {
      if (sortBy === "Name") {
        return firstProduct.name.localeCompare(secondProduct.name);
      }

      if (sortBy === "Grade") {
        return firstProduct.grade.localeCompare(secondProduct.grade);
      }

      return secondProduct.popularity - firstProduct.popularity;
    });
  }, [
    activeCategory,
    application,
    casNumber,
    form,
    grade,
    searchTerm,
    sortBy,
  ]);

  const resetFilters = () => {
    setActiveCategory("All Products");
    setSearchTerm("");
    setCasNumber("");
    // setGrade("All Grades");
    // setApplication("All Applications");
    setForm("All Forms");
    setPage(1);

    window.history.replaceState({}, "", "/products");
  };

  const pageSize = viewMode === "grid" ? 8 : 6;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / pageSize)
  );

  const visibleProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // const downloadCatalogue = () => {
  //   const catalogue = products
  //     .map(
  //       (product) =>
  //         `${product.name}\t${product.grade}\tCAS ${product.cas}`
  //     )
  //     .join("\n");

    // const blob = new Blob(
    //   [`CosmoChem Product Catalogue\n\n${catalogue}`],
    //   { type: "text/plain" }
    // );

    // const link = document.createElement("a");
    // const url = URL.createObjectURL(blob);

    // link.href = url;
    // link.download = "cosmochem-product-catalogue.txt";
    // link.click();

    // URL.revokeObjectURL(url);
  // };

  const handleCategoryChange = (slug) => {
    const selectedCategory =
      slug === "all" ? "All Products" : categoryMap[slug];

    setActiveCategory(selectedCategory);
    setPage(1);

    if (slug === "all") {
      window.history.replaceState({}, "", "/products");
    } else {
      window.history.replaceState(
        {},
        "",
        `/products?category=${slug}`
      );
    }
  };

  return (
    <>
     {/* ================= HERO ================= */}

      <section
        className="products-hero"
        style={{
          backgroundImage: `url(${productsHero})`,
        }}
      >
        <div className="products-hero-overlay">
          <div className="products-container">
            <div className="products-breadcrumb">
              Home <span>›</span> Products
            </div>

            <h1>
              Our <span>Products</span>
            </h1>

            <p>
              We manufacture and supply a wide range of high-quality
              industrial,
              <br />
              specialty and pharmaceutical chemicals that meet global
              standards
              <br />
              and support diverse industries.
            </p>

            <div className="hero-feature-box">
              <div className="hero-feature">
                <ShieldCheck />
                <span>
                  Premium
                  <br />
                  Quality
                </span>
              </div>

              <div className="hero-feature">
                <FileCheck />
                <span>
                  ISO Certified
                  <br />
                  Products
                </span>
              </div>

              <div className="hero-feature">
                <Factory />
                <span>
                  Bulk Supply
                  <br />
                  Available
                </span>
              </div>

              <div className="hero-feature">
                <Globe />
                <span>
                  Worldwide
                  <br />
                  Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY ================= */}

      <section
        className="products-category-section"
        id="categories"
      >
        <div className="products-container">
          <div className="category-box">
            {categories.map(([title, Icon, slug]) => (
              <button
                key={slug}
                className={`category-item ${
                  activeCategory ===
                  (slug === "all"
                    ? "All Products"
                    : categoryMap[slug])
                    ? "category-active"
                    : ""
                }`}
                onClick={() => handleCategoryChange(slug)}
              >
                <Icon size={30} />
                <span>{title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="products-main">
        <div className="products-container">
          <div className="products-layout">
            {/* FILTER */}

            <aside className="filter-box">
              <div className="filter-title">
                <strong>Filter Products</strong>

                <button onClick={resetFilters}>
                  <RotateCcw size={17} />
                  Reset
                </button>
              </div>

              <label>Search Products</label>

              <div className="filter-search-input">
                <input
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search by product name or CAS No..."
                />

                <Search size={17} />
              </div>

              <label>Category</label>

              <select
                value={activeCategory}
                onChange={(event) => {
                  setActiveCategory(event.target.value);
                  setPage(1);
                }}
              >
                <option value="All Products">All Products</option>

                {categories.slice(1).map(([title, , slug]) => (
                  <option
                    key={slug}
                    value={categoryMap[slug]}
                  >
                    {title}
                  </option>
                ))}
              </select>

              {/* <label>Chemical Grade</label> */}

              {/* <select
                value={grade}
                onChange={(event) => {
                  setGrade(event.target.value);
                  setPage(1);
                }}
              >
                <option>All Grades</option>
                <option>Industrial Grade</option>
                <option>Technical Grade</option>
                <option>Cosmetic Grade</option>
                <option>IP / Cosmetic Grade</option>
              </select> */}

              <label>CAS Number</label>

              <input
                value={casNumber}
                onChange={(event) => {
                  setCasNumber(event.target.value);
                  setPage(1);
                }}
                placeholder="Enter CAS Number"
              />
{/* 
              <label>Application / Industry</label>

              <select
                value={application}
                onChange={(event) => {
                  setApplication(event.target.value);
                  setPage(1);
                }}
              >
                <option>All Applications</option>
                <option>Skin Care</option>
                <option>Textile</option>
                <option>Manufacturing</option>
                <option>Water Treatment</option>
                <option>Agriculture</option>
                <option>Pharmaceuticals</option>
              </select> */}

              <label>Form</label>

              <select
                value={form}
                onChange={(event) => {
                  setForm(event.target.value);
                  setPage(1);
                }}
              >
                <option>All Forms</option>
                <option>Powder</option>
                <option>Liquid</option>
                <option>Solid</option>
              </select>

              <button
                className="filter-search-btn"
                onClick={() => setPage(1)}
              >
                <Search size={17} />
                Search
              </button>

              <button
                className="filter-reset-btn"
                onClick={resetFilters}
              >
                <RotateCcw size={17} />
                Reset Filters
              </button>
            </aside>

            {/* RESULTS */}

            <div className="product-results">
              <div className="products-toolbar">
                <span>
                  Showing{" "}
                  {filteredProducts.length
                    ? (page - 1) * pageSize + 1
                    : 0}{" "}
                  to{" "}
                  {Math.min(
                    page * pageSize,
                    filteredProducts.length
                  )}{" "}
                  of {filteredProducts.length} products
                </span>

                <div className="sort-box">
                  <span>Sort by:</span>

                  <select
                    value={sortBy}
                    onChange={(event) => {
                      setSortBy(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option>Popularity</option>
                    <option>Name</option>
                    <option>Grade</option>
                  </select>

                  <button
                    className={
                      viewMode === "grid" ? "grid-btn" : ""
                    }
                    onClick={() => {
                      setViewMode("grid");
                      setPage(1);
                    }}
                    aria-label="Grid view"
                  >
                    <Grid2X2 size={17} />
                  </button>

                  <button
                    className={
                      viewMode === "list" ? "grid-btn" : ""
                    }
                    onClick={() => {
                      setViewMode("list");
                      setPage(1);
                    }}
                    aria-label="List view"
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              <div
                className={`product-grid ${
                  viewMode === "list" ? "product-list" : ""
                }`}
              >
                {!visibleProducts.length && (
                  <div className="products-empty-state">
                    <Search size={24} />
                    <strong>No products found</strong>
                    <span>
                      Try changing your filters or search term.
                    </span>

                    <button onClick={resetFilters}>
                      Reset Filters
                    </button>
                  </div>
                )}

                {visibleProducts.map((product) => (
                  <div
                    className="product-card"
                    key={product.slug}
                  >
                    <div className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="product-round-icon">
                        <FlaskConical size={30} />
                      </div>
                    </div>

                    <div className="product-card-content">
                      <h2>{product.name}</h2>

                      <strong>{product.grade}</strong>

                      <small>CAS No. {product.cas}</small>

                      <p>{product.text}</p>

                      <div className="product-actions">
                        <Link
                          to={`/products/${product.slug}`}
                          className="product-link"
                        >
                          View Details
                          <ArrowRight size={20} />
                        </Link>

                        <Link
                          to="/quote"
                          className="quote-btn"
                        >
                          Get Quote
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}

              <div className="pagination-row">
                <div className="pagination">
                  <button
                    disabled={page === 1}
                    onClick={() =>
                      setPage((currentPage) =>
                        Math.max(1, currentPage - 1)
                      )
                    }
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      className={
                        page === pageNumber
                          ? "pagination-active"
                          : ""
                      }
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  <button
                    disabled={page === totalPages}
                    onClick={() =>
                      setPage((currentPage) =>
                        Math.min(totalPages, currentPage + 1)
                      )
                    }
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>

                {/* <button
                  className="catalog-btn"
                  onClick={downloadCatalogue}
                >
                  Download Product Catalogue
                  <ArrowRight size={20} />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}

      <section className="product-quality-section">
        <div className="products-container">
          <div className="quality-box">
            <div>
              <ShieldCheck />

              <span>
                <strong>Premium Quality</strong>
                We ensure the highest quality standards in every
                product.
              </span>
            </div>

            <div>
              <BadgeDollarSign />

              <span>
                <strong>Competitive Pricing</strong>
                Best market prices with consistent quality.
              </span>
            </div>

            <div>
              <Truck />

              <span>
                <strong>Timely Delivery</strong>
                Efficient logistics for on-time delivery across
                the globe.
              </span>
            </div>

            <div>
              <Headphones />

              <span>
                <strong>Technical Support</strong>
                Our experts are always ready to assist you.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INQUIRY ================= */}

      <section
        className="product-inquiry-section"
        id="inquiry"
      >
        <div className="products-container">
          <div className="inquiry-box">
            <div className="inquiry-content">
              <FlaskConical size={65} />

              <div>
                <h2>
                  Can’t find the product
                  <br />
                  you are <span>looking for?</span>
                </h2>

                <p>
                  Share your requirement with us.
                  <br />
                  Our experts will get back to you.
                </p>
              </div>
            </div>

            <div className="inquiry-form">
              <input
                required
                value={inquiryForm.name}
                onChange={(event) =>
                  setInquiryForm({
                    ...inquiryForm,
                    name: event.target.value,
                  })
                }
                placeholder="Your Name"
              />

              <input
                required
                type="email"
                value={inquiryForm.email}
                onChange={(event) =>
                  setInquiryForm({
                    ...inquiryForm,
                    email: event.target.value,
                  })
                }
                placeholder="Your Email"
              />

              <input
                className="full-input"
                required
                value={inquiryForm.requirement}
                onChange={(event) =>
                  setInquiryForm({
                    ...inquiryForm,
                    requirement: event.target.value,
                  })
                }
                placeholder="Product / Requirement"
              />
            </div>

            <div className="inquiry-buttons">
              <button
                className="submit-btn"
                type="button"
                onClick={() =>
                  setInquirySent(
                    Boolean(
                      inquiryForm.name &&
                        inquiryForm.email &&
                        inquiryForm.requirement
                    )
                  )
                }
              >
                {inquirySent ? "Inquiry Sent" : "Submit Inquiry"}
                <ArrowRight size={16} />
              </button>

              <span>or</span>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT MODAL ================= */}

      {selectedProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div>
              <span className="modal-kicker">
                {selectedProduct.category}
              </span>

              <h2>{selectedProduct.name}</h2>

              <p>{selectedProduct.text}</p>

              <dl>
                <div>
                  <dt>Grade</dt>
                  <dd>{selectedProduct.grade}</dd>
                </div>

                <div>
                  <dt>CAS Number</dt>
                  <dd>{selectedProduct.cas}</dd>
                </div>

                <div>
                  <dt>Form</dt>
                  <dd>{selectedProduct.form}</dd>
                </div>
              </dl>

              <button
                className="modal-quote"
                onClick={() => {
                  setSelectedProduct(null);
                  document
                    .getElementById("inquiry")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Request a Quote
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;