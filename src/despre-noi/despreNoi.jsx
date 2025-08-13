import styles from "./despreNoi.module.css";
import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import Istorie from "./istorie/istorie";
import Locatie from "./locatie/locatie";
import Contactare from "./contactare/contactare";
import Qr from "./qr/qr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DespreNoi() {
  //setez tabul de baza
  const [tabActiv, setTabActiv] = useState("istorie");
  const navigate = useNavigate();
  return (
    <div className={styles.gradientVerde} style={{ minHeight: "100vh" }}>
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <div className={styles.iconItem}>
            <Home
              size={50}
              style={{ color: "#ffffff", cursor: "pointer" }}
              onClick={() => navigate("/prezentare")}
            />
            <p>Prezentare</p>
          </div>
          <div className={styles.iconItem}>
            <Newspaper
              size={50}
              style={{ color: "#ffffff", cursor: "pointer" }}
              onClick={() => navigate("/acasa")}
            />
            <p>Știri / Evenimente / Concursuri</p>
          </div>
          <div className={`${styles.iconItem} ${styles.active}`}>
            <School size={50} />
            <p>Locație / Istorie / Contact / QR</p>
          </div>
          <div className={styles.iconItem}>
            <GraduationCap
              size={50}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/educatie")}
            />
            <p>Promovabilitate / Oferte / Medalii / Calendar</p>
          </div>
          <div className={styles.iconItem}>
            <UserPen
              size={50}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/profesori")}
            />
            <p>Profesori / Diriginți</p>
          </div>
        </div>
      </nav>

      <div className={styles.taburi}>
        {/* 🧠 butoanele de tab – îți dau voie să schimbi între componente */}
        <span
          className={`${styles.tab} ${
            tabActiv === "istorie" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("istorie")}
        >
          Istorie
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "locatie" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("locatie")}
        >
          Locatie
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "contactare" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("contactare")}
        >
          Contact
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "qr" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("qr")}
        >
          Qr
        </span>
        <div className={styles.continut}>
          {tabActiv === "istorie" && <Istorie />}
          {tabActiv === "locatie" && <Locatie />}
          {tabActiv === "contactare" && <Contactare />}
          {tabActiv === "qr" && <Qr />}
        </div>
      </div>
    </div>
  );
}
