/* Section 1: Shared application data */
export const ROLE_PERMISSIONS = {
  superadmin: ["dashboard", "products", "careers", "gallery", "users", "activities", "settings"],
  admin: ["products"],
  accountant: ["careers", "gallery"],
  customer: ["account"],
};

const USERS_KEY = "cosmochem-users";
const SESSION_KEY = "cosmochem-current-user";
const LOGS_KEY = "cosmochem-activity-logs";
const PRESENCE_KEY = "cosmochem-presence";
const TEN_DAYS = 10 * 24 * 60 * 60 * 1000;

const readJson = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getUsers = () => readJson(USERS_KEY, []);
export const saveUsers = (users) => writeJson(USERS_KEY, users);

export const getSessionUser = () => readJson(SESSION_KEY, null);
export const setSessionUser = (user) => {
  writeJson(SESSION_KEY, user);
  localStorage.setItem("cosmochem-auth-role", user.role);
};
export const clearSessionUser = () => {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("cosmochem-auth-role");
};

export const normalizeLogs = () => {
  const now = Date.now();
  const active = [];
  const archived = readJson("cosmochem-activity-archive", []);
  const logs = readJson(LOGS_KEY, []);

  logs.forEach((log) => {
    if (now - new Date(log.createdAt).getTime() >= TEN_DAYS) archived.push(log);
    else active.push(log);
  });

  writeJson(LOGS_KEY, active);
  writeJson("cosmochem-activity-archive", archived);
  return active;
};

export const logActivity = (action, details = "") => {
  const user = getSessionUser();
  if (!user) return;
  const logs = normalizeLogs();
  logs.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
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
export const clearActivityLogs = () => {
  localStorage.removeItem(LOGS_KEY);
  window.dispatchEvent(new Event("cosmochem-activity-change"));
};

export const setPresence = (status = "online") => {
  const user = getSessionUser();
  if (!user) return;
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

export const getPresence = () => readJson(PRESENCE_KEY, {});
