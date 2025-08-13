import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./psiho.module.css";
import { useNavigate } from "react-router-dom";

export default function Psiho() {
  const navigate = useNavigate();

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
      <div className={styles.pendulumContainer}>
        <div className={styles.pendulum}>
          <div className={styles.pendulum_box}>
            <div className={`${styles.ball} ${styles.first}`}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={`${styles.ball} ${styles.last}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Anca Matache</li>
        </ul>
      </div>
    </div>
  );
}
