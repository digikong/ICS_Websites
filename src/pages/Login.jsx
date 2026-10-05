import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  Headphones,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageCircle,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

import LoginImg from "../assets/Login.png";
import "./Login.css";

const benefits = [
  [
    ShieldCheck,
    "Secure & Safe",
    "Your data is protected with advanced security.",
  ],
  [
    Headphones,
    "Dedicated Support",
    "Our team is always here to help you.",
  ],
  [
    CheckCircle2,
    "Quick Access",
    "Manage all your requests in one place.",
  ],
];

const accountFeatures = [
  [MessageCircle, "Request Quotes & Custom Solutions"],
  [FileText, "Track Enquiries & Orders"],
  [FileText, "Access Documents (TDS, SDS, COA)"],
  [CheckCircle2, "Save Products to Wishlist"],
  [CheckCircle2, "Get Latest Updates & Offers"],
];

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [forgot, setForgot] = useState(false);

  const submitLogin = (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    const normalizedEmail = form.email.trim().toLowerCase();

    const isAdmin =
      normalizedEmail === "admin@cosmochem.com" &&
      form.password === "Admin@123";

    const users = JSON.parse(
      localStorage.getItem("cosmochem-users") || "[]"
    );

    const customer = users.find(
      (user) =>
        user.email === normalizedEmail &&
        user.password === form.password
    );

    if (!isAdmin && !customer) {
      setMessage(
        "Account not found or password is incorrect. Please sign up first."
      );
      return;
    }

    const loggedInUser = {
      name: isAdmin ? "Admin" : customer.name,
      email: normalizedEmail,
      role: isAdmin ? "admin" : "customer",
    };

    localStorage.setItem(
      "cosmochem-auth-role",
      loggedInUser.role
    );

    localStorage.setItem(
      "cosmochem-current-user",
      JSON.stringify(loggedInUser)
    );

    window.dispatchEvent(new Event("cosmochem-auth-change"));

    setMessage(
      isAdmin
        ? "Admin login successful. Opening dashboard..."
        : "Login successful. Opening your account..."
    );

    window.setTimeout(
      () => navigate(isAdmin ? "/admin" : "/account"),
      500
    );
  };

  return (
    <main className="login-page">
      <section className="login-hero">
        <img src={LoginImg} alt="CosmoChem laboratory" />

        <div className="login-hero-overlay" />

        <div className="login-container login-hero-content">
          <div className="login-breadcrumb">
            Home <span>›</span> Login
          </div>

          <h1>
            Welcome <span>Back!</span>
          </h1>

          <p>
            Login to your account to manage enquiries, quotes,
            <br />
            orders and more.
          </p>

          <div className="login-benefits">
            {benefits.map(([Icon, title, text]) => (
              <div key={title}>
                <Icon size={32} />

                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="login-container login-panel">
        <div className="login-form-side">
          <h2>Login to Your Account</h2>

          <div className="login-line" />

          <form onSubmit={submitLogin}>
            <label>
              Email Address <b>*</b>

              <div className="login-input">
                <Mail size={15} />

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      email: event.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                />
              </div>
            </label>

            <label>
              Password <b>*</b>

              <div className="login-input">
                <LockKeyhole size={15} />

                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      password: event.target.value,
                    })
                  }
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={15} />
                  ) : (
                    <Eye size={15} />
                  )}
                </button>
              </div>
            </label>

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) =>
                    setRemember(event.target.checked)
                  }
                />
                Remember Me
              </label>

              <button
                type="button"
                onClick={() => setForgot(true)}
              >
                Forgot Password?
              </button>
            </div>

            <button className="login-submit" type="submit">
              <LockKeyhole size={14} />
              Login
            </button>

            {message && (
              <p className="login-message">{message}</p>
            )}
          </form>

          <div className="register-divider">
            <span>Don&apos;t have an account?</span>
            <a href="/signup">Register Now</a>
          </div>
        </div>

        <div className="login-or">OR</div>

        <div className="register-side">
          <h2>New to CosmoChem?</h2>

          <div className="login-line" />

          <p>
            Create an account to access exclusive features
            <br />
            and manage your business easily.
          </p>

          <ul>
            {accountFeatures.map(([Icon, text]) => (
              <li key={text}>
                <Icon size={16} />
                {text}
              </li>
            ))}
          </ul>

          <a className="login-create-account" href="/signup">
            <UserPlus size={20} />
            Create New Account
          </a>
        </div>
      </section>

      <section className="login-security login-container">
        <div className="security-graphic">
          <ShieldCheck size={49} />
        </div>

        <div>
          <h2>
            <span />
            Your Security is Our Priority
            <span />
          </h2>

          <p>
            We use industry-standard encryption and security measures
            to ensure
            <br />
            that your information is safe with us.
          </p>
        </div>

        <div className="security-badges">
          <b>SSL</b>
          <b>GDPR</b>
          <b>
            ISO
            <br />
            27001
          </b>
        </div>
      </section>

      <section className="login-support login-container">
        <div>
          <Headphones size={27} />

          <span>
            <strong>Need Help?</strong>
            Our support team is here to assist you.
          </span>
        </div>

        <div>
          <KeyRound size={27} />

          <span>
            {/* <strong>+91 6395468419</strong> */}
            Mon - Fri (9:30 AM - 6:30 PM)
          </span>
        </div>

        <div>
          <MessageCircle size={27} />

          <span>
            <strong>Chat on WhatsApp</strong>
            Get instant support
          </span>
        </div>
      </section>

      {forgot && (
        <div
          className="login-modal-backdrop"
          onClick={() => setForgot(false)}
        >
          <div
            className="login-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setForgot(false)}
              aria-label="Close"
            >
              ×
            </button>

            <KeyRound size={28} />

            <h2>Reset Your Password</h2>

            <p>
              Enter your email and we will send reset instructions.
            </p>

            <input
              type="email"
              placeholder="Your email address"
            />

            <button
              onClick={() => {
                setForgot(false);
                setMessage("Password reset instructions sent.");
              }}
            >
              Send Instructions
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Login;