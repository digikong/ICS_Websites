/* =========================================================
   1. SHARED COSMOCHEM APPLICATION STORE
========================================================= */

export const ROLE_PERMISSIONS = {
  superadmin: ["dashboard", "products", "careers", "gallery", "users", "activities", "settings"],
  admin: ["products"],
  accountant: ["careers", "gallery"],
  customer: ["account"],
};

export const CONTACT_INFO = {
  company: "InnoVision CosmoChem Solutions Pvt. Ltd.",
  address: "D-124 Noida-sector:07, UP-201302",
  email: "sales@innovisioncosmochem.com",
  hours: "Mon - Fri, 9:30 AM - 6:30 PM",
  whatsapp: "+91 9876543210",
  whatsappUrl: "https://wa.me/919876543210",
  mapsUrl: "https://maps.app.goo.gl/segzWVpxiCkwPWxK7",
};

/* =========================================================
   1.1 STORAGE HELPERS
========================================================= */

const USERS_KEY = "cosmochem-users";
const SESSION_KEY = "cosmochem-current-user";
const LOGS_KEY = "cosmochem-activity-logs";
const ARCHIVE_KEY = "cosmochem-activity-archive";
const PRESENCE_KEY = "cosmochem-presence";
const PRODUCTS_KEY = "cosmochem-products";
const CAREERS_KEY = "cosmochem-careers";
const GALLERY_KEY = "cosmochem-gallery";
const ENQUIRIES_KEY = "cosmochem-enquiries";
const TEN_DAYS = 10 * 24 * 60 * 60 * 1000;
const PRESENCE_TIMEOUT = 90 * 1000;

const readJson = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* =========================================================
   1.2 AUTHENTICATION
========================================================= */

export const getUsers = () => readJson(USERS_KEY, []);

export const saveUsers = (users) => {
  writeJson(USERS_KEY, users);
  window.dispatchEvent(new Event("cosmochem-users-change"));
};

export const ensureSystemUsers = () => {
  const users = getUsers();
  const hasSuperadmin = users.some((user) => user.role === "superadmin");

  if (hasSuperadmin) return users;

  const seeded = [
    ...users,
    {
      id: "system-superadmin",
      name: "Superadmin",
      email: "superadmin@innovisioncosmochem.com",
      password: "Superadmin@123",
      role: "superadmin",
      active: true,
      system: true,
      createdAt: new Date().toISOString(),
    },
  ];

  saveUsers(seeded);
  return seeded;
};

export const getSessionUser = () => readJson(SESSION_KEY, null);

export const setSessionUser = (user) => {
  writeJson(SESSION_KEY, user);
  localStorage.setItem("cosmochem-auth-role", user.role);
  window.dispatchEvent(new Event("cosmochem-auth-change"));
};

export const clearSessionUser = () => {
  const user = getSessionUser();

  if (user) logActivity("Logout", "User logged out");

  clearPresence(user?.email);
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("cosmochem-auth-role");
  window.dispatchEvent(new Event("cosmochem-auth-change"));
};

/* =========================================================
   1.3 DYNAMIC CONTENT COLLECTIONS
========================================================= */

export const getCollection = (key, fallback = []) =>
  getJsonCollection(key, fallback);

const getJsonCollection = (key, fallback) =>
  readJson(key, fallback);

export const saveCollection = (key, items) => {
  writeJson(key, items);
  window.dispatchEvent(new Event("cosmochem-content-change"));
};

export const getProducts = (fallback = []) => getCollection(PRODUCTS_KEY, fallback);
export const saveProducts = (items) => saveCollection(PRODUCTS_KEY, items);

export const getCareers = (fallback = []) => getCollection(CAREERS_KEY, fallback);
export const saveCareers = (items) => saveCollection(CAREERS_KEY, items);

export const getGallery = (fallback = []) => getCollection(GALLERY_KEY, fallback);
export const saveGallery = (items) => saveCollection(GALLERY_KEY, items);

export const getEnquiries = (fallback = []) => getCollection(ENQUIRIES_KEY, fallback);
export const saveEnquiries = (items) => saveCollection(ENQUIRIES_KEY, items);

/* =========================================================
   1.4 ACTIVITY LOGGING + 10-DAY ARCHIVE
========================================================= */

export const normalizeLogs = () => {
  const now = Date.now();
  const active = [];
  const archived = readJson(ARCHIVE_KEY, []);

  readJson(LOGS_KEY, []).forEach((log) => {
    const time = new Date(log.createdAt).getTime();

    if (Number.isFinite(time) && now - time >= TEN_DAYS) {
      archived.unshift({ ...log, archivedAt: new Date().toISOString() });
    } else {
      active.push(log);
    }
  });

  writeJson(LOGS_KEY, active);
  writeJson(ARCHIVE_KEY, archived);

  return active;
};

export const logActivity = (action, details = "") => {
  const user = getSessionUser();

  if (!user || !["superadmin", "admin", "accountant"].includes(user.role)) {
    return;
  }

  const logs = normalizeLogs();

  logs.unshift({
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 8),
    name: user.name,
    email: user.email,
    role: user.role,
    action,
    details,
    createdAt: new Date().toISOString(),
  });

  writeJson(LOGS_KEY, logs);
  window.dispatchEvent(new Event("cosmochem-activity-change"));
};

export const getActivityLogs = () => normalizeLogs();
export const getArchivedLogs = () => readJson(ARCHIVE_KEY, []);

export const clearActivityLogs = () => {
  localStorage.removeItem(LOGS_KEY);
  window.dispatchEvent(new Event("cosmochem-activity-change"));
};

/* =========================================================
   1.5 ONLINE / OFFLINE PRESENCE
========================================================= */

export const setPresence = (status = "online") => {
  const user = getSessionUser();

  if (!user || !["superadmin", "admin", "accountant"].includes(user.role)) {
    return;
  }

  const presence = readJson(PRESENCE_KEY, {});

  presence[user.email] = {
    name: user.name,
    email: user.email,
    role: user.role,
    status,
    updatedAt: new Date().toISOString(),
  };

  writeJson(PRESENCE_KEY, presence);
  window.dispatchEvent(new Event("cosmochem-presence-change"));
};

export const clearPresence = (email) => {
  if (!email) return;

  const presence = readJson(PRESENCE_KEY, {});
  delete presence[email];
  writeJson(PRESENCE_KEY, presence);
  window.dispatchEvent(new Event("cosmochem-presence-change"));
};

export const getPresence = () => {
  const presence = readJson(PRESENCE_KEY, {});
  const now = Date.now();

  return Object.fromEntries(
    Object.entries(presence).map(([email, value]) => {
      const updated = new Date(value.updatedAt).getTime();
      const online =
        value.status === "online" &&
        Number.isFinite(updated) &&
        now - updated < PRESENCE_TIMEOUT;

      return [
        email,
        {
          ...value,
          status: online ? "online" : "offline",
        },
      ];
    })
  );
};
