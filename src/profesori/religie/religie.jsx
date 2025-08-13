import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./religie.module.css";
import { useNavigate } from "react-router-dom";

export default function Religie() {
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
      {/* cartea magică apare aici */}
      <div className={styles.book}>
        <div className={styles.book__pgShadow}></div>
        <div className={styles.book__pg}></div>
        <div className={`${styles.book__pg} ${styles.book__pg2}`}></div>
        <div className={`${styles.book__pg} ${styles.book__pg3}`}></div>
        <div className={`${styles.book__pg} ${styles.book__pg4}`}></div>
        <div className={`${styles.book__pg} ${styles.book__pg5}`}></div>
      </div>
      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Ciprian Popescu - director adjunct </li>
          <li>Gabriel Nicolae Radu </li>
          <li>Gabriel Petcu </li>
        </ul>
      </div>
    </div>
  );
}
