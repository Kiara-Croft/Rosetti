import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./filosofie.module.css";
import { useNavigate } from "react-router-dom";

export default function Filosofie() {
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
      <div className={styles.scene}>
        <div className={styles.butterfly} style={{ "--random": 0.73428 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.8213 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.46092 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.05981 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.20235 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.91763 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.3448 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.27659 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.08087 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.6667 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.39124 }}></div>
        <div className={styles.butterfly} style={{ "--random": 0.15907 }}></div>
      </div>
      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Alexandru Dan Mănatu </li>
        </ul>
      </div>
    </div>
  );
}
