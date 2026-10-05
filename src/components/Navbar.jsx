/* =========================================================
   1. NAVBAR
========================================================= */

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  UserRound,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { getSessionUser } from "../lib/cosmochemStore";

/* =========================================================
   1.1 INDUSTRY NAVIGATION
========================================================= */

const industryCategories = [
  { label: "Pharmaceuticals", path: "/industries/pharmaceuticals" },
  { label: "Personal Care", path: "/industries/personalcare" },
  { label: "Home Care", path: "/industries/homecare" },
  { label: "Food", path: "/industries/food" },
];

/* =========================================================
   1.2 NAVBAR COMPONENT
========================================================= */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => getSessionUser());

  useEffect(() => {
    const refreshUser = () => setCurrentUser(getSessionUser());

    window.addEventListener("cosmochem-auth-change", refreshUser);
    window.addEventListener("storage", refreshUser);

    return () => {
      window.removeEventListener("cosmochem-auth-change", refreshUser);
      window.removeEventListener("storage", refreshUser);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const accountPath =
    currentUser?.role === "superadmin"
      ? "/superadmin"
      : currentUser?.role === "admin"
      ? "/admin"
      : currentUser?.role === "accountant"
      ? "/accountant"
      : "/account";

  const navLinkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar">
      <div className="site-container navbar-inner">
        {/* ===================================================
            2. BRANDING
        =================================================== */}

        <NavLink to="/" className="brand" onClick={closeMenu}>
          <strong className="brand-company">
            InnoVision CosmoChem Solutions Pvt. Ltd.
          </strong>
          <span className="brand-tagline">
            Enriching Lives With Innovative Chemistry
          </span>
        </NavLink>

        {/* ===================================================
            3. NAVIGATION
        =================================================== */}

        <nav className={"nav-menu " + (menuOpen ? "nav-open" : "")}>
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/products" className={navLinkClass} onClick={closeMenu}>
            Products
          </NavLink>

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
                <NavLink
                  to={industry.path}
                  key={industry.label}
                  onClick={closeMenu}
                >
                  {industry.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/certifications" className={navLinkClass} onClick={closeMenu}>
            Certifications
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
            Contact Us
          </NavLink>

          <NavLink to="/careers" className={navLinkClass} onClick={closeMenu}>
            Careers
          </NavLink>
        </nav>

        {/* ===================================================
            4. USER ACTIONS
        =================================================== */}

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
          </NavLink>
        </div>

        {/* ===================================================
            5. MOBILE MENU
        =================================================== */}

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
