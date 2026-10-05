/* ========================================
   IMPORTS
======================================== */

import {
  FlaskConical,
  Sparkles,
  SprayCan,
  Apple,
} from "lucide-react";


/* ========================================
   INDUSTRIES DATA
======================================== */

const industries = [
  {
    name: "Pharmaceuticals",
    icon: FlaskConical,
    path: "/industries/pharmaceuticals",
  },
  {
    name: "Personal Care",
    icon: Sparkles,
    path: "/industries/personalcare",
  },
  {
    name: "Home Care",
    icon: SprayCan,
    path: "/industries/homecare",
  },
  {
    name: "Foods & Nutraceuticals",
    icon: Apple,
    path: "/industries/food",
  },
];


/* ========================================
   INDUSTRIES COMPONENT
======================================== */

function Industries() {
  return (
    <section
      className="industries"
      id="industries"
    >
      <div className="site-container">

        {/* SECTION TITLE */}

        <div className="section-title">
          <h2>
            INDUSTRIES WE <span>SERVE</span>
          </h2>

          <span></span>
        </div>


        {/* INDUSTRY GRID */}

        <div className="industry-grid">

          {industries.map(
            ({ name, icon: Icon, path }) => (
              <a
                href={path}
                className="industry-item"
                key={name}
              >

                <Icon
                  size={40}
                  strokeWidth={1.5}
                />

                <span>
                  {name}
                </span>

              </a>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Industries;