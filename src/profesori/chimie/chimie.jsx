import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./chimie.module.css";
import { useNavigate } from "react-router-dom";

export default function Chimie() {
  const navigate = useNavigate();

  // Helper component for bubbles
  const Bubbles = ({ count }) => {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={styles.bubble} />
        ))}
      </>
    );
  };

  // Helper component for markings
  const Markings = ({ count }) => {
    return (
      <div className={styles.markings}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={styles.marking} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.gradientGalben}>
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <Home
            size={50}
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={() => navigate("/prezentare")}
          />
          <Newspaper
            size={50}
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={() => navigate("/acasa")}
          />
          <School
            size={50}
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => navigate("/despre-noi")}
          />
          <GraduationCap
            size={50}
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => navigate("/educatie")}
          />
          <UserPen
            size={50}
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => navigate("/profesori")}
          />
        </div>
      </nav>

      {/* Chemistry Lab Equipment */}
      <div className={styles.container}>
        <div className={styles.clampStand}>
          <div className={styles.verticalBar}></div>

          <div className={styles.horizontalClamp}>
            <div className={styles.clampLever}></div>
            <div className={styles.clampEnd}></div>
            <div className={styles.roundFlask}>
              <div className={styles.flaskTop}>
                <div className={styles.topRight}></div>
                <div className={styles.topLeft}></div>
              </div>
              <div className={styles.circle}>
                <div className={styles.fill}></div>
                <Markings count={3} />
              </div>
              <div className={styles.bubbles}>
                <Bubbles count={6} />
              </div>
            </div>
          </div>

          <div className={styles.horizontalClamp}>
            <div className={styles.clampLever}></div>
            <div className={styles.clampEnd}></div>
            <div className={styles.testTube}>
              <div className={styles.topLeft}></div>
              <div className={styles.topRight}></div>
              <div className={styles.fill}></div>
              <Markings count={3} />
              <div className={styles.bubbles}>
                <Bubbles count={8} />
              </div>
            </div>
            <div className={styles.clampEnd}></div>
            <div className={styles.testTube}>
              <div className={styles.topLeft}></div>
              <div className={styles.topRight}></div>
              <div className={styles.fill}></div>
              <Markings count={3} />
              <div className={styles.bubbles}>
                <Bubbles count={8} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.roundFlask}>
          <div className={styles.flaskTop}>
            <div className={styles.topRight}></div>
            <div className={styles.topLeft}></div>
          </div>
          <div className={styles.circle}>
            <div className={styles.fill}></div>
            <Markings count={3} />
          </div>
          <div className={styles.bubbles}>
            <Bubbles count={6} />
          </div>
        </div>

        <div className={styles.floor}></div>
      </div>
      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Mădălina Crăciunescu</li>
          <li> Mariana Ruță</li>
          <li>Daniela Bădiță</li>
        </ul>
      </div>
    </div>
  );
}
