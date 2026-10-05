/* =========================================================
   1. ROLE MANAGEMENT PAGE
========================================================= */

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  MessageCircle,
  FileImage,
  LayoutDashboard,
  LogOut,
  Package,
  Save,
  Trash2,
  UserPlus,
  UsersRound,
} from "lucide-react";

import { PRODUCT_SEED } from "./Products";
import { CAREER_SEED } from "./Careers";
import { GALLERY_SEED } from "./Gallery";
import {
  clearActivityLogs,
  ensureSystemUsers,
  getActivityLogs,
  getArchivedLogs,
  getEnquiries,
  saveEnquiries,
  getCareers,
  getGallery,
  getPresence,
  getProducts,
  getSessionUser,
  getSiteConfig,
  getUsers,
  logActivity,
  saveCareers,
  saveGallery,
  saveProducts,
  saveSiteConfig,
  saveUsers,
  clearSessionUser,
} from "../lib/cosmochemStore";
import "./RoleManagementPage.css";

/* =========================================================
   1.1 ROLE CONFIGURATION
========================================================= */

const ROLE_CONFIG = {
  superadmin: {
    label: "Superadmin",
    tabs: ["Dashboard", "Products", "Careers", "Gallery", "Enquiries", "Users", "Activities", "Settings"],
  },
  admin: {
    label: "Admin",
    tabs: ["Dashboard", "Products"],
  },
  accountant: {
    label: "Accountant",
    tabs: ["Dashboard", "Careers", "Gallery"],
  },
};

/* =========================================================
   1.2 PAGE COMPONENT
========================================================= */

function RoleManagementPage({ role = "superadmin" }) {
  const navigate = useNavigate();
  const config = ROLE_CONFIG[role] || ROLE_CONFIG.superadmin;
  const [activeTab, setActiveTab] = useState(config.tabs[0]);
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [presence, setPresenceState] = useState({});
  const [toast, setToast] = useState("");

  const refresh = () => {
    setUsers(ensureSystemUsers());
    setActivities(getActivityLogs());
    setPresenceState(getPresence());
  };

  useEffect(() => {
    const session = getSessionUser();

    if (!session || session.role !== role) {
      navigate("/login", { replace: true });
      return undefined;
    }

    refresh();
    setPresence("online");
    const heartbeat = window.setInterval(() => setPresence("online"), 30000);
    const offline = () => setPresence("offline");

    window.addEventListener("beforeunload", offline);

    const onChange = () => refresh();
    window.addEventListener("cosmochem-activity-change", onChange);
    window.addEventListener("cosmochem-users-change", onChange);
    window.addEventListener("cosmochem-presence-change", onChange);
    window.addEventListener("cosmochem-content-change", onChange);

    return () => {
      window.clearInterval(heartbeat);
      window.removeEventListener("beforeunload", offline);
      window.removeEventListener("cosmochem-activity-change", onChange);
      window.removeEventListener("cosmochem-users-change", onChange);
      window.removeEventListener("cosmochem-presence-change", onChange);
      window.removeEventListener("cosmochem-content-change", onChange);
    };
  }, [navigate, role]);

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  const logout = () => {
    clearSessionUser();
    navigate("/login", { replace: true });
  };

  return (
    <main className="role-page">
      {/* ===================================================
          2. SIDEBAR
      =================================================== */}

      <aside className="role-sidebar">
        <div className="role-brand">
          <strong>InnoVision CosmoChem</strong>
          <span>{config.label} Workspace</span>
        </div>

        <nav className="role-nav" aria-label="Management navigation">
          {config.tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Dashboard" && <LayoutDashboard size={16} />}
              {tab === "Products" && <Package size={16} />}
              {tab === "Careers" && <BriefcaseBusiness size={16} />}
              {tab === "Gallery" && <FileImage size={16} />}
              {tab === "Users" && <UsersRound size={16} />}
              {tab === "Activities" && <Activity size={16} />}
              {tab}
            </button>
          ))}
        </nav>

        <div className="role-help">
          <CircleHelp size={16} />
          <span>Need help?</span>
          <a href="/contact">Contact Support</a>
        </div>

        <button className="role-logout" type="button" onClick={logout}>
          <LogOut size={16} />
          Logout
        </button>
      </aside>

      {/* ===================================================
          3. MAIN WORKSPACE
      =================================================== */}

      <section className="role-main">
        <header className="role-header">
          <div>
            <span className="role-eyebrow">{config.label}</span>
            <h1>{activeTab}</h1>
          </div>

          <div className="role-header-user">
            <span>{getSessionUser()?.name}</span>
            <small>{getSessionUser()?.email}</small>
          </div>
        </header>

        <div className="role-content">
          {activeTab === "Dashboard" && (
            <RoleDashboardHome
              role={role}
              users={users}
              activities={activities}
              presence={presence}
              onOpen={setActiveTab}
            />
          )}

          {activeTab === "Products" && (
            <ProductManager
              seed={PRODUCT_SEED}
              notify={notify}
            />
          )}

          {activeTab === "Careers" && (
            <CareerManager
              seed={CAREER_SEED}
              notify={notify}
            />
          )}

          {activeTab === "Gallery" && (
            <GalleryManager
              seed={GALLERY_SEED}
              notify={notify}
            />
          )}

          {activeTab === "Enquiries" && role === "superadmin" && (
            <EnquiryManager notify={notify} />
          )}

          {activeTab === "Users" && role === "superadmin" && (
            <UserManager
              users={users}
              refresh={refresh}
              notify={notify}
            />
          )}

          {activeTab === "Settings" && role === "superadmin" && (
            <SiteConfigManager notify={notify} />
          )}

          {activeTab === "Activities" && role === "superadmin" && (
            <ActivityManager
              activities={activities}
              presence={presence}
              refresh={refresh}
              notify={notify}
            />
          )}
        </div>

        <footer className="role-footer">
          <span>Role-based workspace</span>
          <span>Access is limited to the logged-in role.</span>
        </footer>
      </section>

      {toast && <div className="role-toast">{toast}</div>}
    </main>
  );
}

/* =========================================================
   3.1 DASHBOARD
========================================================= */

function RoleDashboardHome({ role, users, activities, presence, onOpen }) {
  const productCount = getProducts(PRODUCT_SEED).length;
  const careerCount = getCareers(CAREER_SEED).length;
  const galleryCount = getGallery(GALLERY_SEED).length;

  const managedCount =
    role === "admin"
      ? productCount
      : role === "accountant"
      ? careerCount + galleryCount
      : productCount + careerCount + galleryCount;

  const onlineCount = Object.values(presence).filter(
    (item) => item.status === "online"
  ).length;

  const cards = [
    ["Managed Records", managedCount, Package],
    ["Active Staff", users.filter((user) => user.role !== "customer").length, UsersRound],
    ["Active Logs", activities.length, Activity],
    ["Online Staff", onlineCount, CheckCircle2],
  ];

  return (
    <section className="role-dashboard">
      <div className="role-kpis">
        {cards.map(([label, value, Icon]) => (
          <div className="role-kpi" key={label}>
            <Icon size={20} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="role-actions-card">
        <h2>Available Management</h2>
        <p>Choose a section to manage the content assigned to your role.</p>

        <div className="role-action-grid">
          {ROLE_CONFIG[role].tabs
            .filter((tab) => tab !== "Dashboard")
            .map((tab) => (
              <button type="button" key={tab} onClick={() => onOpen(tab)}>
                {tab === "Products" ? <Package size={19} /> : null}
                {tab === "Careers" ? <BriefcaseBusiness size={19} /> : null}
                {tab === "Gallery" ? <FileImage size={19} /> : null}
                {tab === "Users" ? <UsersRound size={19} /> : null}
                {tab === "Activities" ? <Activity size={19} /> : null}
                {tab === "Enquiries" ? <MessageCircle size={19} /> : null}
                {tab}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. PRODUCT MANAGER
========================================================= */

function ProductManager({ seed, notify }) {
  const [items, setItems] = useState(() => getProducts(seed));
  const [draft, setDraft] = useState({
    name: "",
    slug: "",
    category: "Specialty Products",
    application: "General",
    form: "Powder",
    popularity: 90,
    grade: "Commercial Grade",
    cas: "",
    text: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  const save = (event) => {
    event.preventDefault();

    if (!draft.name.trim() || !draft.category.trim()) {
      notify("Product name and category are required.");
      return;
    }

    const item = {
      ...draft,
      name: draft.name.trim(),
      slug: draft.slug.trim() || draft.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      popularity: Number(draft.popularity) || 0,
    };

    const next = editingId
      ? items.map((current) =>
          current.slug === editingId ? item : current
        )
      : [...items, item];

    saveProducts(next);
    setItems(next);
    setEditingId(null);
    setDraft({
      name: "",
      slug: "",
      category: "Specialty Products",
      application: "General",
      form: "Powder",
      popularity: 90,
      grade: "Commercial Grade",
      cas: "",
      text: "",
      image: "",
    });
    logActivity(editingId ? "Update Product" : "Create Product", item.name);
    notify(editingId ? "Product updated." : "Product added.");
  };

  const edit = (item) => {
    setDraft(item);
    setEditingId(item.slug);
  };

  const remove = (slug) => {
    const item = items.find((current) => current.slug === slug);
    const next = items.filter((current) => current.slug !== slug);
    saveProducts(next);
    setItems(next);
    logActivity("Delete Product", item?.name || slug);
    notify("Product removed.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Product Management</h2>
          <p>Add, edit or remove products shown on the Products page.</p>
        </div>
        <span>{items.length} products</span>
      </div>

      <form className="manager-form" onSubmit={save}>
        <input placeholder="Product name *" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
        <input placeholder="Category *" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
        <input placeholder="CAS Number" value={draft.cas} onChange={(e) => setDraft({ ...draft, cas: e.target.value })} />
        <input placeholder="Grade" value={draft.grade} onChange={(e) => setDraft({ ...draft, grade: e.target.value })} />
        <select value={draft.form} onChange={(e) => setDraft({ ...draft, form: e.target.value })}>
          <option>Powder</option>
          <option>Liquid</option>
          <option>Solid</option>
        </select>
        <input placeholder="Image URL (optional)" value={draft.image || ""} onChange={(e) => setDraft({ ...draft, image: e.target.value })} />
        <textarea placeholder="Product description" value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} />
        <button type="submit"><Save size={15} />{editingId ? "Update Product" : "Add Product"}</button>
        {editingId && (
          <button
            className="secondary"
            type="button"
            onClick={() => {
              setEditingId(null);
              setDraft({ name: "", slug: "", category: "Specialty Products", application: "General", form: "Powder", popularity: 90, grade: "Commercial Grade", cas: "", text: "", image: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="manager-list">
        {items.map((item) => (
          <article className="manager-row" key={item.slug}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.category}</span>
              <small>CAS: {item.cas || "—"} · {item.grade || "—"}</small>
            </div>
            <div className="manager-row-actions">
              <button type="button" onClick={() => edit(item)}><Save size={14} /> Edit</button>
              <button type="button" className="danger" onClick={() => remove(item.slug)}><Trash2 size={14} /> Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   5. CAREER MANAGER
========================================================= */

function CareerManager({ seed, notify }) {
  const [items, setItems] = useState(() => getCareers(seed));
  const [draft, setDraft] = useState({
    title: "",
    department: "",
    vacancies: "01",
    location: "Noida",
  });
  const [editingId, setEditingId] = useState(null);

  const save = (event) => {
    event.preventDefault();

    if (!draft.title.trim() || !draft.department.trim()) {
      notify("Job title and department are required.");
      return;
    }

    const next = editingId
      ? items.map((item, index) => (String(index) === editingId ? { ...draft } : item))
      : [...items, { ...draft }];

    saveCareers(next);
    setItems(next);
    logActivity(editingId ? "Update Career Opening" : "Create Career Opening", draft.title);
    setEditingId(null);
    setDraft({ title: "", department: "", vacancies: "01", location: "Noida" });
    notify(editingId ? "Career opening updated." : "Career opening added.");
  };

  const remove = (index) => {
    const item = items[index];
    const next = items.filter((_, itemIndex) => itemIndex !== index);
    saveCareers(next);
    setItems(next);
    logActivity("Delete Career Opening", item?.title || "");
    notify("Career opening removed.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Career Management</h2>
          <p>Manage the job openings visible on the Careers page.</p>
        </div>
        <span>{items.length} openings</span>
      </div>

      <form className="manager-form" onSubmit={save}>
        <input placeholder="Job title *" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
        <input placeholder="Department *" value={draft.department} onChange={(e) => setDraft({ ...draft, department: e.target.value })} />
        <input placeholder="Vacancies" value={draft.vacancies} onChange={(e) => setDraft({ ...draft, vacancies: e.target.value })} />
        <input placeholder="Location" value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })} />
        <button type="submit"><Save size={15} />{editingId !== null ? "Update Opening" : "Add Opening"}</button>
      </form>

      <div className="manager-list">
        {items.map((item, index) => (
          <article className="manager-row" key={item.title + index}>
            <div>
              <strong>{item.title}</strong>
              <span>{item.department}</span>
              <small>{item.vacancies} vacancies · {item.location}</small>
            </div>
            <div className="manager-row-actions">
              <button type="button" onClick={() => { setEditingId(String(index)); setDraft(item); }}><Save size={14} /> Edit</button>
              <button type="button" className="danger" onClick={() => remove(index)}><Trash2 size={14} /> Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   6. GALLERY MANAGER
========================================================= */

function GalleryManager({ seed, notify }) {
  const [items, setItems] = useState(() => getGallery(seed));
  const [draft, setDraft] = useState({ category: "", images: "" });
  const [editingId, setEditingId] = useState(null);

  const save = (event) => {
    event.preventDefault();

    if (!draft.category.trim()) {
      notify("Gallery category is required.");
      return;
    }

    const value = {
      category: draft.category.trim(),
      images: draft.images
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    const next = editingId
      ? items.map((item, index) => (String(index) === editingId ? value : item))
      : [...items, value];

    saveGallery(next);
    setItems(next);
    logActivity(editingId ? "Update Gallery" : "Create Gallery", value.category);
    setEditingId(null);
    setDraft({ category: "", images: "" });
    notify(editingId ? "Gallery updated." : "Gallery category added.");
  };

  const remove = (index) => {
    const item = items[index];
    const next = items.filter((_, itemIndex) => itemIndex !== index);
    saveGallery(next);
    setItems(next);
    logActivity("Delete Gallery", item?.category || "");
    notify("Gallery category removed.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Gallery Management</h2>
          <p>Manage gallery categories and image URLs.</p>
        </div>
        <span>{items.length} categories</span>
      </div>

      <form className="manager-form" onSubmit={save}>
        <input placeholder="Gallery category *" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
        <input placeholder="Image URLs separated by commas" value={draft.images} onChange={(e) => setDraft({ ...draft, images: e.target.value })} />
        <button type="submit"><Save size={15} />{editingId !== null ? "Update Gallery" : "Add Gallery"}</button>
      </form>

      <div className="manager-list">
        {items.map((item, index) => (
          <article className="manager-row" key={item.category + index}>
            <div>
              <strong>{item.category}</strong>
              <span>{item.images.length} image(s)</span>
              <small>{item.images.join(" · ") || "No images added"}</small>
            </div>
            <div className="manager-row-actions">
              <button type="button" onClick={() => { setEditingId(String(index)); setDraft({ category: item.category, images: item.images.join(", ") }); }}><Save size={14} /> Edit</button>
              <button type="button" className="danger" onClick={() => remove(index)}><Trash2 size={14} /> Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   7. USER MANAGER
========================================================= */

function UserManager({ users, refresh, notify }) {
  const [draft, setDraft] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const createUser = (event) => {
    event.preventDefault();

    const email = draft.email.trim().toLowerCase();

    if (!draft.name.trim() || !email || !draft.password) {
      notify("Name, email and password are required.");
      return;
    }

    if (users.some((user) => user.email === email)) {
      notify("A user with this email already exists.");
      return;
    }

    const next = [
      ...users,
      {
        id: Date.now().toString(),
        name: draft.name.trim(),
        email,
        password: draft.password,
        role: draft.role,
        active: true,
        system: false,
        createdAt: new Date().toISOString(),
      },
    ];

    saveUsers(next);
    logActivity("Create User", draft.name + " (" + draft.role + ")");
    setDraft({ name: "", email: "", password: "", role: "admin" });
    refresh();
    notify("Role credentials created.");
  };

  const toggleUser = (user) => {
    if (user.system) return;

    const next = users.map((item) =>
      item.id === user.id ? { ...item, active: item.active === false } : item
    );

    saveUsers(next);
    logActivity(user.active === false ? "Activate User" : "Deactivate User", user.email);
    refresh();
    notify(user.active === false ? "User activated." : "User deactivated.");
  };

  const removeUser = (user) => {
    if (user.system) return;

    saveUsers(users.filter((item) => item.id !== user.id));
    logActivity("Delete User", user.email);
    refresh();
    notify("User removed.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Create Admin & Accountant Credentials</h2>
          <p>Only Superadmin can create, disable or remove role credentials.</p>
        </div>
      </div>

      <form className="manager-form" onSubmit={createUser}>
        <input placeholder="Full name *" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
        <input type="email" placeholder="Email *" value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} />
        <input type="password" placeholder="Password *" value={draft.password} onChange={(e) => setDraft({ ...draft, password: e.target.value })} />
        <select value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value })}>
          <option value="admin">Admin — Products</option>
          <option value="accountant">Accountant — Careers & Gallery</option>
        </select>
        <button type="submit"><UserPlus size={15} />Create Credentials</button>
      </form>

      <div className="manager-list">
        {users.map((user) => (
          <article className="manager-row" key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.role}</span>
              <small>{user.email}</small>
            </div>
            <div className="manager-row-actions">
              <em className={user.active === false ? "offline" : "online"}>
                {user.active === false ? "Disabled" : "Active"}
              </em>
              {!user.system && (
                <>
                  <button type="button" onClick={() => toggleUser(user)}>
                    {user.active === false ? "Activate" : "Disable"}
                  </button>
                  <button type="button" className="danger" onClick={() => removeUser(user)}>
                    <Trash2 size={14} /> Delete
                  </button>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   8. SITE SETTINGS MANAGER
========================================================= */

function SiteConfigManager({ notify }) {
  const [form, setForm] = useState(() => getSiteConfig());

  const update = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const save = (event) => {
    event.preventDefault();
    saveSiteConfig(form);
    logActivity("Update Site Settings", "Company, contact and branding settings");
    notify("Site settings saved.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Site Settings</h2>
          <p>Update the common branding and contact details used across the website.</p>
        </div>
      </div>

      <form className="manager-form" onSubmit={save}>
        <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" />
        <input value={form.tagline} onChange={(e) => update("tagline", e.target.value)} placeholder="Tagline" />
        <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Sales email" />
        <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone" />
        <input value={form.hours} onChange={(e) => update("hours", e.target.value)} placeholder="Working hours" />
        <input value={form.whatsappUrl} onChange={(e) => update("whatsappUrl", e.target.value)} placeholder="WhatsApp URL" />
        <input value={form.mapsUrl} onChange={(e) => update("mapsUrl", e.target.value)} placeholder="Google Maps URL" />
        <input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Business address" />
        <button type="submit"><Save size={15} />Save Settings</button>
      </form>
    </section>
  );
}

/* =========================================================
   8. ENQUIRY MANAGER
========================================================= */

function EnquiryManager({ notify }) {
  const [items, setItems] = useState(() => getEnquiries([]));

  const updateStatus = (id, status) => {
    const next = items.map((item) =>
      item.id === id ? { ...item, status, updatedAt: new Date().toISOString() } : item
    );
    saveEnquiries(next);
    setItems(next);
    logActivity("Update Enquiry", id + " → " + status);
    notify("Enquiry status updated.");
  };

  const remove = (id) => {
    const next = items.filter((item) => item.id !== id);
    saveEnquiries(next);
    setItems(next);
    logActivity("Delete Enquiry", id);
    notify("Enquiry removed.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Enquiry Management</h2>
          <p>Review incoming quote requests and update their status.</p>
        </div>
        <span>{items.length} enquiries</span>
      </div>

      <div className="activity-table-wrap">
        <table className="activity-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Company</th>
              <th>Person</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.company}</td>
                <td>{item.person}</td>
                <td>{item.quantity} {item.unit}</td>
                <td>
                  <select
                    value={item.status || "Pending"}
                    onChange={(event) => updateStatus(item.id, event.target.value)}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Replied</option>
                    <option>Closed</option>
                  </select>
                </td>
                <td>
                  <button
                    className="danger-button"
                    type="button"
                    onClick={() => remove(item.id)}
                  >
                    <Trash2 size={13} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!items.length && <div className="manager-empty">No enquiries received yet.</div>}
      </div>
    </section>
  );
}

/* =========================================================
   8. ACTIVITY MANAGER
========================================================= */

function ActivityManager({ activities, presence, refresh, notify }) {
  const [roleFilter, setRoleFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const filtered = useMemo(
    () =>
      activities.filter((log) => {
        const byRole =
          roleFilter === "all" || log.role === roleFilter;

        const byName =
          !nameFilter.trim() ||
          log.name.toLowerCase().includes(nameFilter.trim().toLowerCase());

        const byDate =
          !dateFilter ||
          log.createdAt.slice(0, 10) === dateFilter;

        return byRole && byName && byDate;
      }),
    [activities, roleFilter, nameFilter, dateFilter]
  );

  const clear = () => {
    clearActivityLogs();
    refresh();
    notify("Active logs cleared.");
  };

  return (
    <section className="manager-section">
      <div className="manager-header">
        <div>
          <h2>Activity & Presence Tracking</h2>
          <p>Active logs stay visible for 10 days, then move to archive automatically.</p>
        </div>
        <button className="danger-button" type="button" onClick={clear}>
          <Trash2 size={14} /> Clear Active Logs
        </button>
      </div>

      <div className="activity-filters">
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="superadmin">Superadmin</option>
          <option value="admin">Admin</option>
          <option value="accountant">Accountant</option>
        </select>

        <input
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      <div className="presence-grid">
        {Object.values(presence).map((user) => (
          <div className="presence-card" key={user.email}>
            <span className={user.status === "online" ? "status-dot online" : "status-dot"} />
            <div>
              <strong>{user.name}</strong>
              <span>{user.role}</span>
            </div>
            <em>{user.status}</em>
          </div>
        ))}
        {!Object.keys(presence).length && <p>No staff presence recorded yet.</p>}
      </div>

      <div className="activity-table-wrap">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Activity</th>
              <th>Details</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((log) => (
              <tr key={log.id}>
                <td>{log.name}</td>
                <td>{log.role}</td>
                <td>{log.action}</td>
                <td>{log.details || "—"}</td>
                <td>{new Date(log.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtered.length && <div className="manager-empty">No activities match the selected filters.</div>}
      </div>

      <div className="archive-note">
        <Activity size={15} />
        <span>{getArchivedLogs().length} archived log(s) are retained separately.</span>
      </div>
    </section>
  );
}

export default RoleManagementPage;
