import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Eye,
  FileDown,
  FileText,
  Filter,
  Heart,
  History,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react";

import EnquiryImage from "../assets/Enquiry.png";

import "./Enquiries.css";

const sidebar = [
  ["Dashboard", ClipboardList],
  ["My Profile", UserRound],
  ["My Enquiries", MessageCircle],
  // ["My Quotes", FileText],
  // ["My Orders", Truck],
  // ["Order History", History],
  // ["Downloads (TDS / SDS / COA)", FileDown],
  // ["Wishlist", Heart],
  // ["Notifications", Bell],
  ["Address Book", MapPin],
  ["Change Password", LockKeyhole],
  ["Logout", ArrowRight],
];

const enquiryData = [
  [
    "ENQ-000123",
    "Acetic Acid Glacial",
    "1,000 kg",
    "12 May 2024",
    "Pending",
    "12 May 2024",
  ],
  [
    "ENQ-000122",
    "Caustic Soda Flakes",
    "2,000 kg",
    "10 May 2024",
    "In Progress",
    "11 May 2024",
  ],
  [
    "ENQ-000121",
    "Hydrochloric Acid",
    "500 Ltr",
    "08 May 2024",
    "Replied",
    "09 May 2024",
  ],
  [
    "ENQ-000120",
    "Sodium Hypochlorite",
    "1,000 Ltr",
    "06 May 2024",
    "In Progress",
    "07 May 2024",
  ],
  [
    "ENQ-000119",
    "Sodium Sulphate",
    "5,000 kg",
    "02 May 2024",
    "Replied",
    "03 May 2024",
  ],
  [
    "ENQ-000118",
    "Acetic Anhydride",
    "500 kg",
    "28 Apr 2024",
    "Closed",
    "30 Apr 2024",
  ],
  [
    "ENQ-000117",
    "Ethyl Acetate",
    "1,000 Ltr",
    "25 Apr 2024",
    "Closed",
    "28 Apr 2024",
  ],
  [
    "ENQ-000116",
    "Copper Sulphate",
    "2,500 kg",
    "20 Apr 2024",
    "Replied",
    "22 Apr 2024",
  ],
];

function Enquiries() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All Status");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const pageSize = 8;

  const filtered = useMemo(
    () =>
      enquiryData.filter(
        (row) =>
          (!query ||
            row
              .join(" ")
              .toLowerCase()
              .includes(query.toLowerCase())) &&
          (status === "All Status" || row[4] === status)
      ),
    [query, status]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / pageSize)
  );

  const rows = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const chooseStatus = (value) => {
    setStatus(value);
    setPage(1);
  };

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("cosmochem-auth-role");
    localStorage.removeItem("cosmochem-current-user");

    window.dispatchEvent(new Event("cosmochem-auth-change"));

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <main className="enquiries-page">
      {/* Hero Section */}
      <section className="enquiries-hero">
        <img
          src={EnquiryImage}
          alt="CosmoChem laboratory"
        />

        <div className="enquiries-hero-overlay" />

        <div className="enquiries-container enquiries-hero-content">
          <div className="enquiries-breadcrumb">
            Home <span>›</span> My Account <span>›</span> My Enquiries
          </div>

          <h1>My Enquiries</h1>

          <p>
            Track and manage all your product enquiries in one place.
          </p>

          <i />
        </div>
      </section>

      {/* Main Enquiries Layout */}
      <section className="enquiries-container enquiries-layout">
        {/* Sidebar */}
        <aside className="enquiries-sidebar">
          <div className="enquiry-user">
            <div>◯</div>

            <span>
              Welcome,
              <strong>John Doe</strong>
              <small>john.doe@example.com</small>
            </span>
          </div>

          <nav>
            {sidebar.map(([label, Icon]) => (
              <a
                key={label}
                className={
                  label === "My Enquiries" ? "active" : ""
                }
                href={
                  label === "My Enquiries"
                    ? "/account/enquiries"
                    : label === "Dashboard"
                    ? "/account"
                    : label === "Logout"
                    ? "/login"
                    : "#enquiry-table"
                }
              >
                <Icon size={20} />

                {label}

                {label === "Notifications" && <em>3</em>}
              </a>
            ))}
          </nav>

          <div className="enquiry-help">
            <strong>Need Help?</strong>

            <p>
              Our support team is here to assist you.
            </p>

            <a href="/contact">
              <MessageCircle size={13} />
              Contact Support
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={13} />
              Chat on WhatsApp
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <div className="enquiries-content">
          {/* Page Heading */}
          <div className="enquiries-heading">
            <div>
              <h2>My Enquiries</h2>

              <p>
                Track and manage all your product enquiries in one place.
              </p>
            </div>

            <span>
              Customer ID: <strong>CCM10025</strong>
            </span>
          </div>

          {/* Enquiry Statistics */}
          <div className="enquiry-stats">
            {[
              [MessageCircle, "18", "Total Enquiries", "All"],
              [FileText, "5", "Pending", "Pending"],
              [Truck, "7", "In Progress", "In Progress"],
              [CheckCircle2, "4", "Replied", "Replied"],
              [ShieldCheck, "2", "Closed", "Closed"],
            ].map(([Icon, number, label, filter]) => (
              <button
                key={label}
                className={
                  status === filter ||
                  (filter === "All" && status === "All Status")
                    ? "active"
                    : ""
                }
                onClick={() =>
                  chooseStatus(
                    filter === "All" ? "All Status" : filter
                  )
                }
              >
                <Icon size={19} />

                <strong>{number}</strong>

                <span>{label}</span>

                <small>
                  View All <ArrowRight size={9} />
                </small>
              </button>
            ))}
          </div>

          {/* Enquiry Table */}
          <section
            className="enquiry-table-card"
            id="enquiry-table"
          >
            <div className="enquiry-table-header">
              <h3>All Enquiries</h3>

              <div>
                <label>
                  <Search size={13} />

                  <input
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setPage(1);
                    }}
                    placeholder="Search enquiries..."
                  />
                </label>

                <select
                  value={status}
                  onChange={(event) =>
                    chooseStatus(event.target.value)
                  }
                >
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Replied</option>
                  <option>Closed</option>
                </select>

                <Filter size={15} />
              </div>
            </div>

            <div className="enquiry-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Enquiry ID</th>
                    <th>Product / Chemical</th>
                    <th>Quantity</th>
                    <th>Enquiry Date</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${index}`}>
                          {index === 4 ? (
                            <span
                              className={`enquiry-status ${cell
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            >
                              {cell}
                            </span>
                          ) : index === 6 ? (
                            <button
                              className="enquiry-view"
                              onClick={() => setSelected(row)}
                              aria-label={`View ${row[0]}`}
                            >
                              <Eye size={13} />
                            </button>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {!rows.length && (
                <div className="enquiry-empty">
                  <Search size={22} />

                  <strong>No enquiries found</strong>

                  <button
                    onClick={() => {
                      setQuery("");
                      chooseStatus("All Status");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="enquiry-pagination">
              <span>
                Showing{" "}
                {rows.length
                  ? (page - 1) * pageSize + 1
                  : 0}{" "}
                to {Math.min(page * pageSize, filtered.length)} of{" "}
                {filtered.length} entries
              </span>

              <div>
                <button
                  disabled={page === 1}
                  onClick={() =>
                    setPage((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                >
                  <ChevronLeft size={13} />
                </button>

                <strong>{page}</strong>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                )
                  .slice(1, 3)
                  .map((number) => (
                    <button
                      key={number}
                      onClick={() => setPage(number)}
                    >
                      {number}
                    </button>
                  ))}

                <button
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((current) =>
                      Math.min(totalPages, current + 1)
                    )
                  }
                >
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          </section>

          {/* Status Guide */}
          <StatusGuide />

          {/* Enquiry CTA */}
          {/* <section className="enquiry-cta">
            <div>
              <FlaskIcon />

              <span>
                <strong>
                  Looking for Bulk Quantity or Custom Solution?
                </strong>

                Get the best price, quality and support for your business.
              </span>
            </div>

            <a href="/quote">
              Request a Quote <ArrowRight size={14} />
            </a>

            <a
              className="enquiry-whatsapp"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </section> */}

          {/* Bottom Benefits */}
          <div className="enquiry-bottom-benefits">
            {[
              [
                ShieldCheck,
                "Secure & Safe",
                "Your data is protected with us.",
              ],
              [
                MessageCircle,
                "Quick Response",
                "We typically respond within 24 hours.",
              ],
              [
                CheckCircle2,
                "Best Price",
                "Competitive & transparent pricing.",
              ],
              [
                UserRound,
                "Expert Support",
                "Our team is always here to help you.",
              ],
              [
                ShieldCheck,
                "Trusted by Industry",
                "Quality you can rely on.",
              ],
            ].map(([Icon, title, text]) => (
              <div key={title}>
                <Icon size={40} />

                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Details Modal */}
      {selected && (
        <div
          className="enquiry-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="enquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <FileText size={27} />

            <h2>{selected[0]}</h2>

            <strong>{selected[1]}</strong>

            <p>
              Quantity: {selected[2]}
              <br />
              Enquiry date: {selected[3]}
              <br />
              Status: {selected[4]}
            </p>

            <a href="/contact">
              Contact Support <ArrowRight size={13} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

function StatusGuide() {
  return (
    <section className="status-guide">
      <h3>Enquiry Status Guide</h3>

      <p>Know what each status means.</p>

      <div>
        {[
          [
            "Pending",
            "Your enquiry has been received and is pending for review.",
          ],
          [
            "In Progress",
            "Our team is working on your enquiry and preparing the best solution.",
          ],
          [
            "Replied",
            "We have sent you a response for your enquiry.",
          ],
          [
            "Closed",
            "Your enquiry has been closed.",
          ],
        ].map(([title, text]) => (
          <span key={title}>
            <b className={title.toLowerCase().replace(" ", "-")}>
              {title}
            </b>

            {text}
          </span>
        ))}
      </div>
    </section>
  );
}

function FlaskIcon() {
  return <span className="enquiry-flask">♢</span>;
}

export default Enquiries;