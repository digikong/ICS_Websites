import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Leaf,
  MessageCircle,
  FlaskConical,
  Sparkles,
  Home,
  Search,
  Truck,
  UsersRound,
  Utensils,
  

} from "lucide-react";


import { useNavigate } from "react-router-dom";


import flask from "../assets/flask.png";
import PersonalCare from "../assets/PersonalCare.png";
import HomeCare from "../assets/HomeCare.png";
import Supplements from "../assets/Supplements.png";
import manufacturingplant from "../assets/manufacturingplant.png";


import "./IndustriesPage.css";

const industries = [
{
  name: "Pharmaceuticals",
  icon: FlaskConical,
  image: flask,
  text: "High-purity chemicals and specialty ingredients for APIs, pharmaceutical formulations, excipients and drug manufacturing applications.",
  focus: "API manufacturing, excipients and pharmaceutical formulations",
  path: "/industries/pharmaceuticals",
},

{
  name: "Personal Care",
  icon: Sparkles,
  image: PersonalCare,
  text: "Specialty ingredients and cosmetic actives for skincare, haircare, personal hygiene and beauty formulations.",
  focus: "Skincare, haircare and cosmetic formulations",
  path: "/industries/personalcare",
},

{
  name: "Home Care",
  icon: Home,
  image: HomeCare,
  text: "Performance ingredients and specialty chemicals for household cleaning, fabric care and home hygiene formulations.",
  focus: "Cleaning, fabric care and home hygiene products",
  path: "/industries/homecare",
},
{
  name: "Foods & Nutraceuticals",
  icon: Utensils,
  image: Supplements,
  text: "Food-grade ingredients and specialty chemicals for functional foods, nutritional products, dietary supplements and nutraceutical formulations.",
  focus: "Functional foods, dietary supplements and nutraceutical formulations",
  path: "/industries/food",
},

 ];

const benefits = [
  [
    CheckCircle2,
    "Consistent Quality",
    "Strict quality control and global standard compliance.",
  ],
  [
    FlaskConical,
    "Custom Solutions",
    "Tailored chemical solutions to meet your specific needs.",
  ],
  [
    UsersRound,
    "Technical Expertise",
    "Experienced team providing technical support at every step.",
  ],
  [
    Truck,
    "Reliable Supply",
    "Timely delivery and strong supply chain across the globe.",
  ],
  [
    Leaf,
    "Sustainability",
    "Responsible and safe chemical solutions for a greener future.",
  ],
  [
    MessageCircle,
    "Long-term Partnership",
    "Building trusted relationships for mutual growth.",
  ],
];

function IndustriesPage() {
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");
   const [page, setPage] = useState(1);

  const pageSize = 10;

  const filteredIndustries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return industries.filter(
      (industry) =>
        !query ||
        `${industry.name} ${industry.text} ${industry.focus}`
          .toLowerCase()
          .includes(query),
    );
  }, [searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredIndustries.length / pageSize),
  );

  const visibleIndustries = filteredIndustries.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const resetSearch = () => {
    setSearchTerm("");
    setPage(1);
  };

  return (
    <main className="industries-page">
      <section className="industries-page-hero">
        <img
          src={manufacturingplant}
          alt="CosmoChem industrial manufacturing facility"
        />

        <div className="industries-page-hero-overlay" />

        <div className="industries-page-container industries-page-hero-content">
          <div className="industries-page-breadcrumb">
            Home <span>›</span> Industries
          </div>

          <h1>
            Industries We <span>Serve</span>
          </h1>

          <p>
            Our high-quality chemicals are trusted across a wide range of
            industries.
            <br />
            We provide reliable solutions that meet critical performance,
            <br />
            safety and sustainability requirements.
          </p>

          <div className="industry-stats">
            <div>
              <Building2 />
              <strong>10+</strong>
              <span>Key Industries</span>
            </div>

            <div>
              <UsersRound />
              <strong>500+</strong>
              <span>Satisfied Clients</span>
            </div>

            <div>
              <GlobeIcon />
              <strong>20+</strong>
              <span>Countries Served</span>
            </div>

            <div>
              <CheckCircle2 />
              <strong>25+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="industries-page-container industries-directory"
        id="industry-directory"
      >
        <div className="industry-directory-heading">
          <div>
            <span className="industry-eyebrow">INDUSTRY SOLUTIONS</span>

            <h2>
              Solutions for Every <span>Industry</span>
            </h2>
          </div>

          <div className="industry-search">
            <Search size={16} />

            <input
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setPage(1);
              }}
              placeholder="Search industries"
            />
          </div>
        </div>

        <div className="industry-page-grid">
          {visibleIndustries.map((industry) => {
            const Icon = industry.icon;

            return (
              <button
                  className="industry-page-card"
                  key={industry.name}
                  onClick={() => navigate(industry.path)}
                >
                <img src={industry.image} alt={industry.name} />

                <span className="industry-page-icon">
                  <Icon size={30} />
                </span>

                <div className="industry-page-card-content">
                  <h2>{industry.name}</h2>

                  <p>{industry.text}</p>

                  <span>
                    Explore Industry <ArrowRight size={15} />
                  </span>
                </div>
              </button>
            );
          })}

          {!visibleIndustries.length && (
            <div className="industry-empty">
              <Search size={26} />

              <strong>No matching industry</strong>

              <span>Try a different search term.</span>

              <button onClick={resetSearch}>Reset Search</button>
            </div>
          )}
        </div>

        <div className="industry-pagination">
          <span>{filteredIndustries.length} industries available</span>

          <div>
            <button
              disabled={page === 1}
              onClick={() =>
                setPage((current) => Math.max(1, current - 1))
              }
            >
              <ChevronLeft size={15} />
            </button>

            <strong>
              {page} / {totalPages}
            </strong>

            <button
              disabled={page === totalPages}
              onClick={() =>
                setPage((current) =>
                  Math.min(totalPages, current + 1),
                )
              }
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="industry-benefits-section">
        <div className="industries-page-container">
          <h2>
            How We <span>Add Value</span> to Your Industry
          </h2>

          <div className="industry-benefits">
            {benefits.map(([Icon, title, text]) => (
              <div key={title}>
                <Icon size={30} />

                <strong>{title}</strong>

                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-page-cta">
        <div className="industries-page-container">
          <FlaskConical size={64} />

          <div>
            <h2>
              Industry-specific chemical solutions
              <br />
              <span>that drive your success.</span>
            </h2>

            <p>
              Let&apos;s connect and find the right chemicals for your
              business.
            </p>
          </div>

          <a href="#contact">
            Get a Quote <ArrowRight size={16} />
          </a>

          <a
            className="industry-whatsapp"
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      
    </main>
  );
}

function GlobeIcon() {
  return <span className="globe-icon">◎</span>;
}

export default IndustriesPage;