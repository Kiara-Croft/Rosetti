import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./ant.module.css";
import { useNavigate } from "react-router-dom";

export default function Ant() {
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
          <li>Patricia Vasile </li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div
            className={styles.card__side + " " + styles["card__side--front"]}
          >
            <div className={styles.card__cont}>
              <span className={styles.blue}></span>
              <span>
                <span className={styles.green}>
                  Cartea de vizita a liceului
                </span>
              </span>
            </div>
          </div>
          <div className={styles.card__side + " " + styles["card__side--back"]}>
            <div className={styles.card__cta}>
              <p>
                <span className={styles.purple}>
                  Tu esti viitorul , noi doar te pregatim{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
