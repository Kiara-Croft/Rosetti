import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./geo.module.css";
import { useNavigate } from "react-router-dom";

export default function Geo() {
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

      <div className={styles.planetContainer}>
        <div className={styles.night}></div>
        <div className={styles.day}></div>
        <div className={styles.clouds}></div>
        <div className={styles.innerShadow}></div>
      </div>
      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Eugenia Bucur</li>
          <li>Valentin Cocârlea</li>
          <li>Elena Dinicuțu</li>
        </ul>
      </div>
    </div>
  );
}
