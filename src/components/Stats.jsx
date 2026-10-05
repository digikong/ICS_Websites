import { useEffect, useState } from "react";
import { Award, FlaskConical, UsersRound } from "lucide-react";

const stats = [
  {
    icon: Award,
    target: 9,
    lines: ["Years of", "Experience"],
  },
  {
    icon: FlaskConical,
    target: 200,
    lines: ["Quality", "Products"],
  },
  {
    icon: UsersRound,
    target: 500,
    lines: ["Happy", "Clients"],
  },
];

function Stats() {
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const animateCounters = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut =
        1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.target * easeOut)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setCounts(
          stats.map((stat) => stat.target)
        );
      }
    };

    requestAnimationFrame(animateCounters);
  }, []);

  return (
    <section className="stats-section">
      <div className="site-container">
        <div className="stats-box">

          {stats.map(({ icon: Icon, target, lines }, index) => (
            <div
              className="stat-item"
              key={target}
            >

              <Icon
                size={50}
                strokeWidth={1.6}
              />

              <div className="stat-content">

                <strong>
                  {counts[index]}+
                </strong>

                <p>
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;