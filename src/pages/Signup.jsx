import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  FileText,
  Headphones,
  Heart,
  LockKeyhole,
  MessageCircle,

  ShieldCheck,
  Truck,
  UserPlus,
  UsersRound,
} from "lucide-react";

import SignupImg from "../assets/Signup.png";
import "./Signup.css";
import ContactInfo from "../components/ContactInfo";
import { getUsers, saveUsers, ensureSystemUsers } from "../lib/cosmochemStore";

const heroBenefits = [
  [
    ShieldCheck,
    "Secure & Safe",
    "Your information is protected with us.",
  ],
  [
    Headphones,
    "Dedicated Support",
    "Our team is always here to help you.",
  ],
  [
    CheckCircle2,
    "Quick Access",
    "Manage all your enquiries in one place.",
  ],
];

const signupBenefits = [
  [
    FileText,
    "Request Quotes",
    "Request quotes for bulk orders and custom solutions.",
  ],
  [
    Truck,
    "Track Enquiries & Orders",
    "Track status of your enquiries, quotes and orders.",
  ],
  [
    FileText,
    "Access Documents",
    "Download TDS, SDS, COA and other technical documents.",
  ],
  [
    Heart,
    "Save to Wishlist",
    "Save your favorite products and request later.",
  ],
  [
    Bell,
    "Stay Updated",
    "Get latest updates and product offers.",
  ],
  [
    ShieldCheck,
    "Secure & Reliable",
    "We ensure the highest standards of data security.",
  ],
];

const successPoints = [
  [
    ShieldCheck,
    "Premium Quality",
    "High quality chemicals that you can trust.",
  ],
  [
    FlaskIcon,
    "Wide Range",
    "A comprehensive range for every industry.",
  ],
  [
    Truck,
    "On-time Delivery",
    "Timely delivery across India.",
  ],
  [
    UsersRound,
    "Technical Expertise",
    "Expert support for all your requirements.",
  ],
  [
    MessageCircle,
    "Customer Satisfaction",
    "Your satisfaction is our top priority.",
  ],
];

function Signup() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "Select User Type",
    password: "",
    confirm: "",
    agree: false,
  });

  const [message, setMessage] = useState("");

  const update = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();

    ensureSystemUsers();

    const normalizedEmail = form.email.trim().toLowerCase();
    const users = getUsers();

    if (users.some((user) => user.email === normalizedEmail)) {
      setMessage("An account with this email already exists. Please login.");
      return;
    }

    if (form.password !== form.confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    saveUsers([
      ...users,
      {
        id: Date.now().toString(),
        name: form.name,
        company: form.company,
        email: normalizedEmail,
        password: form.password,
        role: "customer",
        active: true,
        createdAt: new Date().toISOString(),
      },
    ]);

    setMessage("Account created successfully. Welcome to CosmoChem!");
  };

  return (
    <main className="signup-page">
      {/* Hero Section */}
      <section className="signup-hero">
        <img src={SignupImg} alt="CosmoChem laboratory" />

        <div className="signup-hero-overlay" />

        <div className="signup-container signup-hero-content">
          <div className="signup-breadcrumb">
            Home <span>›</span> Sign Up
          </div>

          <h1>
            Create Your <span>Account</span>
          </h1>

          <p>
            Join CosmoChem today and get access to our premium products,
            <br />
            exclusive services and excellent support.
          </p>

          <div className="signup-hero-benefits">
            {heroBenefits.map(([Icon, title, text]) => (
              <div key={title}>
                <Icon size={23} />

                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Panel */}
      <section className="signup-container signup-panel">
        <div className="signup-form-side">
          <h2>Create Your Account</h2>

          <div className="signup-line" />

          <p className="signup-intro">
            Please fill in the details below to create your account.
          </p>

          <form onSubmit={submit}>
            <div className="signup-form-row">
              <input
                required
                placeholder="Full Name *"
                value={form.name}
                onChange={(event) =>
                  update("name", event.target.value)
                }
              />

              <input
                required
                placeholder="Company Name *"
                value={form.company}
                onChange={(event) =>
                  update("company", event.target.value)
                }
              />
            </div>

            <div className="signup-form-row">
              <input
                required
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(event) =>
                  update("email", event.target.value)
                }
              />

              <input
                required
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(event) =>
                  update("phone", event.target.value)
                }
              />
            </div>

            <select
              required
              value={form.type}
              onChange={(event) =>
                update("type", event.target.value)
              }
            >
              <option disabled>Select User Type</option>
              <option>Business / Procurement</option>
              <option>Distributor</option>
              <option>Individual Customer</option>
            </select>

            <PasswordInput
              placeholder="Password *"
              value={form.password}
              onChange={(value) => update("password", value)}
            />

            <PasswordInput
              placeholder="Confirm Password *"
              value={form.confirm}
              onChange={(value) => update("confirm", value)}
            />

            <label className="signup-privacy">
              <input
                required
                type="checkbox"
                checked={form.agree}
                onChange={(event) =>
                  update("agree", event.target.checked)
                }
              />

              I agree to the{" "}
              <strong>Privacy Policy</strong> and{" "}
              <strong>Terms &amp; Conditions.</strong>
            </label>

            <button className="signup-submit" type="submit">
              <UserPlus size={14} />
              Create Account
            </button>

            {message && (
              <p
                className={`signup-message ${
                  message.includes("successfully")
                    ? "success"
                    : "error"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="signup-login-link">
            Already have an account?
            <a href="/login">Login here</a>
          </div>
        </div>


        <div className="signup-benefits-side">
          <h2>Why Create an Account?</h2>

          <div className="signup-line" />

          <p>
            Create an account and enjoy a better experience
            <br />
            with CosmoChem.
          </p>

          <ul>
            {signupBenefits.map(([Icon, title, text]) => (
              <li key={title}>
                <Icon size={30} />

                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success Section */}
      <section className="signup-success signup-container">
        <h2>
          <span />
          Your <b>Success</b>, Our Commitment
          <span />
        </h2>

        <div>
          {successPoints.map(([Icon, title, text]) => (
            <div key={title}>
              <Icon size={25} />
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="signup-support signup-container">
        <div>
          <Headphones size={27} />

          <span>
            <strong>Need Help?</strong>
            Our support team is here to assist you.
          </span>
        </div>

        <ContactInfo compact showCompany />
      </section>
    </main>
  );
}

function PasswordInput({ placeholder, value, onChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="signup-password">
      <LockKeyhole size={15} />

      <input
        required
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      <button
        type="button"
        onClick={() => setVisible(!visible)}
        aria-label="Toggle password visibility"
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

function FlaskIcon(props) {
  return <CheckCircle2 {...props} />;
}

export default Signup;