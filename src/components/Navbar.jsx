import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  UserRound,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";



const industryCategories = [
  { label: "Pharmaceuticals", path: "/industries/pharmaceuticals" },
  { label: "Personal Care", path: "/industries/personalcare" },
  { label: "Home Care", path: "/industries/homecare" },
  { label: "Food", path: "/industries/food" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("cosmochem-current-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const refreshUser = () => {
      const savedUser = localStorage.getItem("cosmochem-current-user");
      setCurrentUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener("cosmochem-auth-change", refreshUser);
    window.addEventListener("storage", refreshUser);

    return () => {
      window.removeEventListener("cosmochem-auth-change", refreshUser);
      window.removeEventListener("storage", refreshUser);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const accountPath =
    currentUser?.role === "admin" ? "/admin" : "/account";

  const navLinkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar">
      <div className="site-container navbar-inner">
        {/* LOGO */}
        <a href="/home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="CosmoChem" />
        </a>

        {/* NAVIGATION */}
        <nav className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" 
          className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={closeMenu}
          >
            About Us
          </NavLink>

          {/* PRODUCTS DROPDOWN */}
          {/* <div className="nav-dropdown"> */}
            {/* <div className="products-nav"> */}
              <NavLink
                to="/products"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Products
              </NavLink>
{/* 
              <button
                type="button"
                className="dropdown-toggle"
                aria-label="Toggle products menu"
              >
                <ChevronDown size={13} />
              </button>
            </div> */}

            {/* <div className="dropdown-menu">
              {productCategories.map((category) => (
                <a
                  href="/products#categories"
                  key={category}
                  onClick={closeMenu}
                >
                  {category}
                </a>
              ))}
            </div>
          </div> */}

          {/* INDUSTRIES DROPDOWN */}
          <div className="nav-dropdown">
            <div className="industries-nav">
              <NavLink
                to="/industries"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Industries
              </NavLink>

              <button
                type="button"
                className="dropdown-toggle"
                aria-label="Toggle industries menu"
              >
                <ChevronDown size={13} />
              </button>
            </div>

            <div className="dropdown-menu">
              {industryCategories.map((industry) => (
                <a
                  href={industry.path}
                  key={industry.label}
                  onClick={closeMenu}
                >
                  {industry.label}
                </a>
              ))}
            </div>
          </div>

          <NavLink
            to="/certifications"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Certifications
          </NavLink>

          <NavLink
            to="/gallery"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/careers"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Careers
          </NavLink>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">
          <NavLink
            className="login-btn"
            to={currentUser ? accountPath : "/login"}
          >
            <UserRound size={16} />
            <span>{currentUser?.name || "Login"}</span>
          </NavLink>

          <NavLink to="/quote" className="quote-btn">
            <span>Get Quote</span>
            {/* <ArrowRight size={16} /> */}
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;