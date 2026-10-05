import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  Eye,
  FileDown,
  FileText,
  Heart,
  History,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Package,
  Send,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Truck,
  UserRound,
} from "lucide-react";

import AccountImg from "../assets/Account.png";

import "./Account.css";

// =========================================================
// ACCOUNT SIDEBAR NAVIGATION
// =========================================================

const navItems = [
  ["Dashboard", ClipboardList],
  ["My Profile", UserRound],
  ["Address Book", MapPin],
  ["My Enquiries", FileText],
  ["My Quotes", FileText],
  // ["My Orders", ShoppingBag],
  // ["Order History", History],
  // ["Downloads", FileDown],
  // ["Wishlist", Heart],
  // ["Notifications", Bell],
  ["Change Password", LockKeyhole],
  ["Logout", ArrowRight],
];

// =========================================================
// ENQUIRIES DATA
// =========================================================

const enquiries = [
  [
    "ENQ-000123",
    "Product Inquiry",
    "Acetic Acid Glacial",
    "12 May 2024",
    "Pending",
  ],
  [
    "ENQ-000122",
    "Bulk Order Inquiry",
    "Caustic Soda Flakes",
    "10 May 2024",
    "In Progress",
  ],
  [
    "ENQ-000121",
    "Custom Requirement",
    "Specialty Chemical",
    "08 May 2024",
    "Replied",
  ],
  [
    "ENQ-000120",
    "Product Inquiry",
    "Hydrochloric Acid",
    "06 May 2024",
    "Closed",
  ],
];

// =========================================================
// ORDERS DATA
// =========================================================

// const orders = [
//   [
//     "ORD-000456",
//     "14 May 2024",
//     "Caustic Soda Flakes",
//     "₹ 24,750.00",
//     "Delivered",
//   ],
//   [
//     "ORD-000455",
//     "09 May 2024",
//     "Sodium Hypochlorite",
//     "₹ 18,900.00",
//     "In Transit",
//   ],
//   [
//     "ORD-000454",
//     "02 May 2024",
//     "Acetic Acid Glacial",
//     "₹ 15,600.00",
//     "Delivered",
//   ],
//   [
//     "ORD-000453",
//     "28 Apr 2024",
//     "Hydrochloric Acid",
//     "₹ 11,300.00",
//     "Delivered",
//   ],
// ];

// =========================================================
// ACCOUNT COMPONENT
// =========================================================

function Account() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [profileSaved, setProfileSaved] = useState(false);

  // =======================================================
  // SIDEBAR TAB HANDLER
  // =======================================================

  const showTab = (tab) => {
    // ================= LOGOUT =================

    if (tab === "Logout") {
      localStorage.removeItem("cosmochem-auth-role");
      localStorage.removeItem("cosmochem-current-user");

      window.dispatchEvent(
        new Event("cosmochem-auth-change")
      );

      navigate("/login", {
        replace: true,
      });

      return;
    }

    // ================= MY ENQUIRIES =================

    if (tab === "My Enquiries") {
      navigate("/account/enquiries");
      return;
    }

    // ================= OTHER TABS =================

    setActiveTab(tab);
    setProfileSaved(false);
  };

  return (
    <main className="account-page">
      {/* =================================================
          #1 ACCOUNT HERO
      ================================================= */}

      <section className="account-hero">
        {/* ================= HERO IMAGE ================= */}

        <img
          src={AccountImg}
          alt="CosmoChem laboratory"
        />

        {/* ================= HERO OVERLAY ================= */}

        <div className="account-hero-overlay"></div>

        {/* ================= HERO CONTENT ================= */}

        <div className="account-container account-hero-content">
          {/* ================= BREADCRUMB ================= */}

          <div className="account-breadcrumb">
            Home <span>›</span> My Account
          </div>

          {/* ================= HERO TITLE ================= */}

          <h1>My Account</h1>

          {/* ================= HERO DESCRIPTION ================= */}

          <p>
            Manage your profile, orders, enquiries and more.
          </p>

          {/* ================= GREEN LINE ================= */}

          <i></i>
        </div>
      </section>

      {/* =================================================
          #2 ACCOUNT LAYOUT
      ================================================= */}

      <section className="account-container account-layout">
        {/* =================================================
            #3 ACCOUNT SIDEBAR
        ================================================= */}

        <aside className="account-sidebar">
          {/* ================= ACCOUNT USER ================= */}

          <div className="account-user">
            <div className="account-avatar">
              <CircleUserRound size={40} />
            </div>

            <div>
              <strong>Welcome,</strong>
              <b>John Doe</b>
              <span>john.doe@example.com</span>
            </div>
          </div>

          {/* ================= SIDEBAR NAVIGATION ================= */}

          <nav>
            {navItems.map(([label, Icon]) => (
              <button
                key={label}
                className={activeTab === label ? "active" : ""}
                onClick={() => showTab(label)}
              >
                <Icon size={15} />

                {label}

                {/* ================= NOTIFICATION COUNT ================= */}

                {/* {label === "Notifications" && <em>3</em>} */}
              </button>
            ))}
          </nav>

          {/* ================= SUPPORT BOX ================= */}

          <div className="account-support">
            <strong>Need Help?</strong>

            <p>
              Our support team is here to assist you.
            </p>

            {/* ================= CONTACT SUPPORT ================= */}

            <a href="/contact">
              <MessageCircle size={12} />
              Contact Support
            </a>

            {/* ================= WHATSAPP SUPPORT ================= */}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
            </a>
          </div>
        </aside>

        {/* =================================================
            #4 ACCOUNT CONTENT
        ================================================= */}

        <div className="account-content">
          {/* ================= CONTENT HEADING ================= */}

          <div className="account-content-heading">
            <div>
              <h2>{activeTab}</h2>

              <p>
                {activeTab === "Dashboard"
                  ? "Here's an overview of your account."
                  : `Manage your ${activeTab.toLowerCase()} here.`}
              </p>
            </div>

            {/* ================= CUSTOMER ID ================= */}

            <span>
              Customer ID: <strong>CCM10025</strong>
            </span>
          </div>

          {/* ================= DASHBOARD TAB ================= */}

          {activeTab === "Dashboard" && <Dashboard />}

          {/* ================= PROFILE TAB ================= */}

          {activeTab === "My Profile" && (
            <Profile
              onSave={() => setProfileSaved(true)}
              saved={profileSaved}
            />
          )}

          {/* ================= OTHER TABS ================= */}

          {activeTab !== "Dashboard" &&
            activeTab !== "My Profile" && (
              <TabPlaceholder tab={activeTab} />
            )}
        </div>
      </section>

      {/* =================================================
          #5 ACCOUNT BENEFITS
      ================================================= */}

      <section className="account-benefits">
        <div className="account-container">
          {/* ================= SECURE & SAFE ================= */}

          <div>
            <ShieldCheck size={27} />

            <span>
              <strong>Secure & Safe</strong>
              Your data is secure with us.
            </span>
          </div>

          {/* ================= BEST QUALITY ================= */}

          <div>
            <CheckCircle2 size={27} />

            <span>
              <strong>Best Quality</strong>
              Premium quality products.
            </span>
          </div>

          {/* ================= ON-TIME DELIVERY ================= */}

          <div>
            <Truck size={27} />

            <span>
              <strong>On-time Delivery</strong>
              Timely and reliable delivery.
            </span>
          </div>

          {/* ================= DEDICATED SUPPORT ================= */}

          <div>
            <MessageCircle size={27} />

            <span>
              <strong>Dedicated Support</strong>
              We're always here to help you.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

// =========================================================
// DASHBOARD COMPONENT
// =========================================================

function Dashboard() {
  return (
    <>
      {/* =================================================
          #6 ACCOUNT STATS
      ================================================= */}

      <div className="account-stats">
        {/* ================= TOTAL ENQUIRIES ================= */}

        <div>
          <MessageCircle size={20} />
          <strong>08</strong>
          <span>Total Enquiries</span>

          <a href="#account-table">
            View All <ArrowRight size={12} />
          </a>
        </div>

        {/* ================= QUOTES RECEIVED ================= */}

        <div>
          <FileText size={20} />
          <strong>05</strong>
          <span>Quotes Received</span>

          <a href="#account-table">
            View All <ArrowRight size={10} />
          </a>
        </div>

        {/* ================= TOTAL ORDERS ================= */}

        {/* <div>
          <Package size={20} />
          <strong>12</strong>
          <span>Total Orders</span>

          <a href="#account-table">
            View All <ArrowRight size={10} />
          </a>
        </div> */}

        {/* ================= ORDERS DELIVERED ================= */}

        {/* <div>
          <Truck size={20} />
          <strong>07</strong>
          <span>Orders Delivered</span>

          <a href="#account-table">
            View All <ArrowRight size={10} />
          </a>
        </div> */}
      </div>

      {/* =================================================
          #7 RECENT ENQUIRIES TABLE
      ================================================= */}

      <AccountTable
        title="Recent Enquiries"
        action="View All Enquiries"
        headers={[
          "Enquiry ID",
          "Enquiry Type",
          "Subject",
          "Date",
          "Status",
        ]}
        rows={enquiries}
      />

      {/* =================================================
          #8 RECENT ORDERS TABLE
      ================================================= */}

      {/* <AccountTable
        title="Recent Orders"
        action="View All Orders"
        headers={[
          "Order ID",
          "Order Date",
          "Products",
          "Total Amount",
          "Status",
        ]}
        rows={orders}
        order
      /> */}

      {/* =================================================
          #9 QUICK ACTIONS
      ================================================= */}

      <div className="account-quick-actions">
        <h3>Quick Actions</h3>

        <div>
          {/* ================= REQUEST NEW QUOTE ================= */}

          <a href="/contact">
            <FileText size={23} />

            <span>
              Request
              <br />
              <strong>New Quote</strong>
            </span>

            <ChevronRight size={13} />
          </a>

          {/* ================= MY QUOTES ================= */}

          <a href="#account-table">
            <FileText size={23} />

            <span>
              View
              <br />
              <strong>My Quotes</strong>
            </span>

            <ChevronRight size={13} />
          </a>

          {/* ================= TRACK MY ORDER ================= */}

          {/* <a href="#account-table">
            <Truck size={23} />

            <span>
              Track
              <br />
              <strong>My Order</strong>
            </span>

            <ChevronRight size={13} />
          </a> */}

          {/* ================= DOWNLOAD INVOICES ================= */}

          {/* <a href="#account-table">
            <FileDown size={23} />

            <span>
              Download
              <br />
              <strong>Invoices</strong>
            </span>

            <ChevronRight size={13} />
          </a> */}

          {/* ================= UPDATE PROFILE ================= */}

          <a href="#account-profile">
            <UserRound size={23} />

            <span>
              Update
              <br />
              <strong>Profile</strong>
            </span>

            <ChevronRight size={13} />
          </a>
        </div>
      </div>
    </>
 );
}


{/* // =========================================================
// ACCOUNT TABLE COMPONENT
// ========================================================= */}

function AccountTable({
  title,
  action,
  headers,
  rows,
  order = false,
}) {
  return (
    <section
      className="account-table-section"
      id="account-table"
    >
      {/* ================= TABLE HEADING ================= */}

      <div className="account-table-heading">
        <h3>{title}</h3>

        <a href="#account-table">
          {action} <ArrowRight size={11} />
        </a>
      </div>

      {/* ================= TABLE WRAPPER ================= */}

      <div className="account-table-wrap">
        <table>
          {/* ================= TABLE HEAD ================= */}

          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>

          {/* ================= TABLE BODY ================= */}

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${cell}`}>
                    {/* ================= STATUS CELL ================= */}

                    {index === row.length - 1 ? (
                      <span
                        className={`status ${cell
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}

                    {/* ================= ORDER EYE ICON ================= */}

                    {order &&
                      index === row.length - 1 && (
                        <Eye size={15} />
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// =========================================================
// PROFILE COMPONENT
// =========================================================

function Profile({ onSave, saved }) {
  return (
    <div
      className="profile-panel"
      id="account-profile"
    >
      {/* ================= PROFILE ICON ================= */}

      <div className="profile-panel-icon">
        <Settings size={25} />
      </div>

      {/* ================= PROFILE HEADING ================= */}

      <h3>Personal Information</h3>

      <p>
        Keep your account details up to date.
      </p>

      {/* ================= PROFILE FORM ================= */}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
      >
        {/* ================= FIRST FORM ROW ================= */}

        <div>
          {/* ================= FULL NAME ================= */}

          <label>
            Full Name

            <input
              required
              defaultValue="John Doe"
            />
          </label>

          {/* ================= EMAIL ADDRESS ================= */}

          <label>
            Email Address

            <input
              required
              type="email"
              defaultValue="john.doe@example.com"
            />
          </label>
        </div>

        {/* ================= SECOND FORM ROW ================= */}

        <div>
          {/* ================= PHONE NUMBER ================= */}

          <label>
            Phone Number

            <input
              required
              defaultValue="+91 98765 43210"
            />
          </label>

          {/* ================= COMPANY NAME ================= */}

          <label>
            Company Name

            <input
              defaultValue="CosmoChem Industries"
            />
          </label>
        </div>

        {/* ================= SAVE BUTTON ================= */}

        <button type="submit">
          {saved ? "Profile Updated" : "Save Changes"}
          <Send size={13} />
        </button>
      </form>
    </div>
  );
}

// =========================================================
// TAB PLACEHOLDER COMPONENT
// =========================================================

function TabPlaceholder({ tab }) {
  return (
    <div className="account-placeholder">
      {/* ================= PLACEHOLDER ICON ================= */}

      <ClipboardList size={32} />

      {/* ================= PLACEHOLDER TITLE ================= */}

      <h3>{tab}</h3>

      {/* ================= PLACEHOLDER DESCRIPTION ================= */}

      <p>
        Your {tab.toLowerCase()} will appear here.
      </p>

      {/* ================= BROWSE PRODUCTS ================= */}

      <a href="/products">
        Browse Products <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default Account;