import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./muzica.module.css";
import { useNavigate } from "react-router-dom";

export default function Muzica() {
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

      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Mariana Popovic</li>
        </ul>
      </div>

      {/* Notele muzicale animate */}
      <div className={styles.muzieknootjes}>
        <div className={styles.noot1}>&#9835; &#9833;</div>
        <div className={styles.noot2}>&#9833;</div>
        <div className={styles.noot3}>&#9839; &#9834;</div>
        <div className={styles.noot4}>&#9834;</div>
      </div>
    </div>
  );
}
