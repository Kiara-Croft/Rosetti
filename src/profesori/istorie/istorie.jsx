import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./istorie.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Istorie() {
  const navigate = useNavigate();
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const button = document.getElementById("sword");
    if (button) {
      const handleShake = () => {
        setIsShaking(true);
        setTimeout(() => {
          setIsShaking(false);
        }, 500);
      };
      button.addEventListener("click", handleShake);
      return () => {
        button.removeEventListener("click", handleShake);
      };
    }
  }, []);

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

      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Carmen Limbău</li>
          <li>Petruța Neagu</li>
        </ul>
      </div>

      <div className={styles.backgroundContent}>
        <div className={`${styles.container} ${styles.start}`}></div>
        <div className={`${styles.container} ${styles.start}`}>
          <div className={styles.sky}></div>
        </div>
        <div className={`${styles.container} ${styles.end}`}>
          <div className={styles.grass}></div>
        </div>
        <div className={`${styles.container} ${styles.end}`}>
          <div className={`${styles.crack} ${styles.shadow}`}></div>
        </div>
        <div className={`${styles.container} ${styles.end}`}>
          <div className={`${styles.crack2} ${styles.shadow}`}></div>
        </div>
        <div className={`${styles.container} ${styles.end}`}>
          <div className={`${styles.stone} ${styles.back}`}></div>
        </div>
        <div className={`${styles.container} ${styles.end}`}>
          <div className={`${styles.stone} ${styles.front}`}></div>
        </div>
        <div className={`${styles.container} ${styles.center}`}>
          <div
            className={`${styles.sword} ${isShaking ? styles.shaking : ""}`}
            id="sword"
          >
            <div className={styles.pommel}></div>
            <div className={styles.grip}></div>
            <div className={styles.guard}></div>
            <div className={styles.blade}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
