import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Download,
  Eye,
  FileText,
  FolderKanban,
  Grid2X2,
  LayoutDashboard,
  Mail,
  Menu,
  MessageCircle,
  Package,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Tags,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";

import "./AdminDashboard.css";

// Sidebar navigation
const sideGroups = [
  [
    "MANAGE",
    [
      ["Products", Package],
      ["Categories", Tags],
      ["Industries", Building2],
      ["Customers", UsersRound],
    ],
  ],
  [
    "BUSINESS",
    [
      ["Enquiries", MessageCircle, "18"],
      ["Quotes", FileText, "7"],
      ["Orders", ShoppingCart, "12"],
      ["Order History", ClipboardList],
    ],
  ],
  [
    "DOCUMENTS",
    [
      ["Documents (TDS / SDS / COA)", FileText],
      ["Gallery", Grid2X2],
      ["Certifications", FolderKanban],
    ],
  ],
  [
    "COMMUNICATION",
    [
      ["Contact Messages", Mail, "9"],
      ["Notifications", Bell],
    ],
  ],
  [
    "USERS & SETTINGS",
    [
      ["Admin Users", UserRound],
      ["Roles & Permissions", Settings],
      ["Settings", Settings],
    ],
  ],
  [
    "SESSION",
    [["Logout", ArrowRight]],
  ],
];

// Recent activities
const activities = [
  [
    "New enquiry received for",
    "Acetic Acid Glacial",
    "2 mins ago",
    MessageCircle,
  ],
  [
    "Quote #Q-2024-007 sent to",
    "ABC Pharma Pvt. Ltd.",
    "15 mins ago",
    FileText,
  ],
  [
    "Order #ORD-2024-012 confirmed by",
    "Gujarat Chemicals",
    "1 hour ago",
    ShoppingCart,
  ],
  [
    "New customer registered",
    "ChemTech Industries",
    "3 hours ago",
    UsersRound,
  ],
  [
    "Document (SDS) uploaded for",
    "Sodium Hypochlorite",
    "5 hours ago",
    FileText,
  ],
];

// Enquiries data
const enquiries = [
  [
    "ENQ-000123",
    "Acetic Acid Glacial",
    "ABC Pharma Pvt. Ltd.",
    "16 May 2024",
    "Pending",
  ],
  [
    "ENQ-000122",
    "Caustic Soda Flakes",
    "Gujarat Chemicals",
    "16 May 2024",
    "In Progress",
  ],
  [
    "ENQ-000121",
    "Hydrochloric Acid",
    "Shree Industries",
    "15 May 2024",
    "Pending",
  ],
  [
    "ENQ-000120",
    "Sodium Hypochlorite",
    "Kavit Chemicals",
    "15 May 2024",
    "Replied",
  ],
  [
    "ENQ-000119",
    "Sodium Sulphate",
    "Omkar Traders",
    "14 May 2024",
    "In Progress",
  ],
];

// Top products
const topProducts = [
  ["Acetic Acid Glacial", 24],
  ["Caustic Soda Flakes", 20],
  ["Hydrochloric Acid", 16],
  ["Sodium Hypochlorite", 14],
  ["Sodium Sulphate", 10],
];

function AdminDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("Dashboard");
  const [dateRange, setDateRange] = useState(
    "10 May 2024 - 16 May 2024"
  );
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");

  // Check admin authentication
  useEffect(() => {
    if (localStorage.getItem("cosmochem-auth-role") !== "admin") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  // Filter enquiries based on search text
  const filteredEnquiries = useMemo(
    () =>
      enquiries.filter((row) =>
        row.join(" ").toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  // Display toast notification
  const notify = (message) => {
    setToast(message);

    window.setTimeout(() => {
      setToast("");
    }, 2300);
  };

  return (
    <main className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>✦</span>

          <strong>
            CosmoChem
            <small>Admin</small>
          </strong>
        </div>

        <button className="admin-mobile-menu">
          <Menu size={17} />
        </button>

        <nav>
          {/* Dashboard navigation */}
          <button
            className={activeSection === "Dashboard" ? "active" : ""}
            onClick={() => setActiveSection("Dashboard")}
          >
            <LayoutDashboard size={14} />
            Dashboard
          </button>

          {/* Navigation groups */}
          {sideGroups.map(([group, items]) => (
            <div key={group}>
              <label>{group}</label>

              {items.map(([name, Icon, count]) => (
                <button
                  key={name}
                  className={activeSection === name ? "active" : ""}
                  onClick={() => {
                    if (name === "Logout") {
                      localStorage.removeItem("cosmochem-auth-role");
                      localStorage.removeItem("cosmochem-current-user");

                      window.dispatchEvent(
                        new Event("cosmochem-auth-change")
                      );

                      navigate("/login");
                      return;
                    }

                    setActiveSection(name);
                    notify(`${name} section selected`);
                  }}
                >
                  <Icon size={14} />

                  {name}

                  {count && <em>{count}</em>}

                  {!count && (
                    <ChevronRight
                      size={11}
                      className="admin-nav-arrow"
                    />
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Help section */}
        <div className="admin-help">
          <strong>Need Help?</strong>

          <p>Our support team is here to assist you.</p>

          <a href="/contact">
            <CircleHelp size={13} />
            Contact Support
          </a>
        </div>
      </aside>

      {/* Main content */}
      <section className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <PanelLeft size={18} />

          <label>
            <Search size={13} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products, enquiries, orders..."
            />
          </label>

          <div className="admin-header-actions">
            <Bell size={17} />
            <Mail size={17} />

            <div className="admin-avatar">A</div>

            <span>
              Admin
              <small>Super Admin⌄</small>
            </span>
          </div>
        </header>

        {/* Page content */}
        <div className="admin-content">
          {/* Page title and actions */}
          <div className="admin-title-row">
            <div>
              <h1>{activeSection}</h1>

              <p>
                {activeSection === "Dashboard"
                  ? "Welcome back, Admin! Here's what's happening with your business today."
                  : `${activeSection} management overview.`}
              </p>
            </div>

            <div className="admin-date">
              <button
                onClick={() =>
                  setDateRange(
                    dateRange === "10 May 2024 - 16 May 2024"
                      ? "01 May 2024 - 07 May 2024"
                      : "10 May 2024 - 16 May 2024"
                  )
                }
              >
                <CalendarDays size={13} />
                {dateRange}
              </button>

              <button
                onClick={() =>
                  notify("Report exported successfully")
                }
              >
                <Download size={13} />
                Export Report
              </button>
            </div>
          </div>

          {/* Dashboard or placeholder content */}
          {activeSection === "Dashboard" ? (
            <Dashboard
              onAction={notify}
              enquiries={filteredEnquiries}
            />
          ) : (
            <AdminPlaceholder
              section={activeSection}
              onAction={notify}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="admin-footer">
          <span>© 2024 CosmoChem. All Rights Reserved.</span>
          <span>Version 1.0.0</span>
        </footer>
      </section>

      {/* Toast notification */}
      {toast && <div className="admin-toast">{toast}</div>}
    </main>
  );
}

function Dashboard({ onAction, enquiries }) {
  const kpis = [
    [
      MessageCircle,
      "18",
      "Total Enquiries",
      "12.5%",
      "green",
    ],
    [FileText, "7", "New Quotes", "16.7%", "blue"],
    [
      ShoppingCart,
      "12",
      "Orders Received",
      "20.0%",
      "orange",
    ],
    [
      UsersRound,
      "256",
      "Total Customers",
      "8.9%",
      "purple",
    ],
    [Package, "142", "Products", "5.2%", "cyan"],
    [
      ClipboardList,
      "9",
      "Pending Tasks",
      "10.0%",
      "red",
    ],
  ];

  const quickActions = [
    [Package, "Add Product"],
    [Tags, "Add Category"],
    [Building2, "Add Industry"],
    [FileText, "Add Document"],
    [Grid2X2, "Add Gallery"],
    [MessageCircle, "View Enquiries"],
    [ShoppingCart, "View Orders"],
    [Bell, "Send Notification"],
  ];

  return (
    <>
      {/* KPI cards */}
      <div className="admin-kpis">
        {kpis.map(
          ([Icon, value, label, growth, color]) => (
            <div key={label}>
              <Icon className={color} size={22} />

              <strong>{value}</strong>
              <span>{label}</span>

              <small className={color === "red" ? "down" : ""}>
                <TrendingUp size={9} />
                {growth}
              </small>

              <em>vs last 7 days</em>
            </div>
          )
        )}
      </div>

      {/* Analytics cards */}
      <div className="admin-analytics">
        {/* Enquiries overview */}
        <section className="admin-chart-card">
          <PanelHeader
            title="Enquiries Overview"
            action="This Week"
          />

          <div className="chart-legend">
            <span>● Enquiries</span>
            <span>● Replied</span>
          </div>

          <div className="line-chart">
            <div className="chart-lines" />

            {[24, 31, 49, 33, 38, 29, 32].map(
              (height, index) => (
                <i
                  key={index}
                  style={{
                    height: `${height * 2.3}px`,
                  }}
                >
                  <b>{height}</b>
                </i>
              )
            )}
          </div>

          <div className="chart-labels">
            10 May 11 May 12 May 13 May 14 May 15 May 16 May
          </div>
        </section>

        {/* Enquiries status */}
        <section className="admin-chart-card status-card">
          <PanelHeader title="Enquiries by Status" />

          <div className="donut">
            <span>
              60
              <small>Total</small>
            </span>
          </div>

          <ul>
            <li className="pending">
              Pending <b>18 (30%)</b>
            </li>

            <li className="progress">
              In Progress <b>20 (33.3%)</b>
            </li>

            <li className="replied">
              Replied <b>16 (26.7%)</b>
            </li>

            <li className="closed">
              Closed <b>6 (10%)</b>
            </li>
          </ul>
        </section>

        {/* Recent activities */}
        <section className="admin-chart-card activities">
          <PanelHeader
            title="Recent Activities"
            action="View All Activities"
          />

          {activities.map(([first, second, time, Icon]) => (
            <div key={second}>
              <Icon size={13} />

              <span>
                {first}
                <strong>{second}</strong>
              </span>

              <small>{time}</small>
            </div>
          ))}
        </section>
      </div>

      {/* Data tables */}
      <div className="admin-data-grid">
        {/* Latest enquiries */}
        <section className="admin-table-card">
          <PanelHeader
            title="Latest Enquiries"
            action="View All"
          />

          <table>
            <thead>
              <tr>
                <th>Enquiry ID</th>
                <th>Product / Chemical</th>
                <th>Company</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>
                      {index === 4 ? (
                        <span
                          className={`admin-status ${cell
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {cell}
                        </span>
                      ) : index === 5 ? (
                        <Eye size={12} />
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Top products */}
        <section className="admin-table-card top-products">
          <PanelHeader
            title="Top Products (By Enquiries)"
            action="View All"
          />

          {topProducts.map(([name, count], index) => (
            <div key={name}>
              <b>{index + 1}</b>
              <span>{name}</span>

              <i>
                <em
                  style={{
                    width: `${count * 3.5}%`,
                  }}
                />
              </i>

              <small>{count} Enquiries</small>
            </div>
          ))}
        </section>
      </div>

      {/* Quick actions */}
      <section className="admin-quick">
        <h3>Quick Actions</h3>

        <div>
          {quickActions.map(([Icon, label]) => (
            <button
              onClick={() =>
                onAction(`${label} action opened`)
              }
              key={label}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function PanelHeader({ title, action }) {
  return (
    <div className="admin-panel-header">
      <h3>{title}</h3>

      {action && (
        <button>
          {action}
          <ChevronDown size={11} />
        </button>
      )}
    </div>
  );
}

function AdminPlaceholder({ section, onAction }) {
  return (
    <section className="admin-placeholder">
      <FolderKanban size={38} />

      <h2>{section}</h2>

      <p>
        Manage your {section.toLowerCase()} from this admin
        workspace.
      </p>

      <button
        onClick={() => onAction(`${section} action opened`)}
      >
        Open {section}
        <ArrowRight size={14} />
      </button>
    </section>
  );
}

export default AdminDashboard;