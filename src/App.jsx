import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import IndustriesPage from "./pages/IndustriesPage";
import Certifications from "./pages/Certifications";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Account Pages
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Enquiries from "./pages/Enquiries";

import Pharmaceuticals from "./pages/Pharmaceuticals";
import PersonalCare from "./pages/PersonalCare";
import HomeCare from "./pages/HomeCare";
import Food from "./pages/Food";
import Careers from "./pages/Careers";

// Other Pages
import Quote from "./pages/Quote";
import AdminPage from "./pages/AdminPage";
import AccountantPage from "./pages/AccountantPage";
import SuperadminPage from "./pages/SuperadminPage";
import { ensureSystemUsers, getSessionUser, setPresence } from "./lib/cosmochemStore";

function App() {
  useEffect(() => {
    ensureSystemUsers();

    const session = getSessionUser();
    if (!session || !["superadmin", "admin", "accountant"].includes(session.role)) {
      return undefined;
    }

    setPresence("online");
    const heartbeat = window.setInterval(() => setPresence("online"), 30000);
    const offline = () => setPresence("offline");

    window.addEventListener("beforeunload", offline);
    return () => {
      window.clearInterval(heartbeat);
      window.removeEventListener("beforeunload", offline);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main>
        <Routes>
          {/* ================= HOME ================= */}
          <Route path="/" element={<Home />} />

          {/* ================= ABOUT ================= */}
          <Route path="/about" element={<About />} />

          {/* ================= PRODUCTS ================= */}
          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:slug"
            element={<ProductDetail />}
          />

          {/* ================= QUOTE ================= */}
          <Route path="/quote" element={<Quote />} />

          {/* ================= INDUSTRIES ================= */}
            <Route
              path="/industries"
              element={<IndustriesPage />}
            />
           <Route
              path="/industries/pharmaceuticals"
              element={<Pharmaceuticals />}
           />

            <Route
              path="/industries/personalcare"
              element={<PersonalCare />}
           />

            <Route
              path="/industries/homecare"
              element={<HomeCare />}
           />

             <Route
              path="/industries/food"
              element={<Food />}
           />

          {/* ================= CERTIFICATIONS ================= */}
          <Route
            path="/certifications"
            element={<Certifications />}
          />

           {/* ================= CARRERS ================= */}
          <Route
            path="/careers"
            element={<Careers />}
          />


          {/* ================= GALLERY ================= */}
          <Route path="/gallery" element={<Gallery />} />

          {/* ================= CONTACT ================= */}
          <Route path="/contact" element={<Contact />} />

          {/* ================= ACCOUNT ================= */}
          <Route path="/account" element={<Account />} />

          <Route
            path="/account/enquiries"
            element={<Enquiries />}
          />

          {/* ================= AUTHENTICATION ================= */}
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          {/* ================= ROLE MANAGEMENT ================= */}
          <Route path="/superadmin" element={<SuperadminPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/accountant" element={<AccountantPage />} />
        </Routes>


          
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= SCROLL TO TOP ================= */}
      <button
        className="scroll-top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </BrowserRouter>
  );
}

export default App;