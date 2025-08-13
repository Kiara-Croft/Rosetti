import styles from "./educatie.module.css";
import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import Calendar from "./calendar/calendar";
import Medalii from "./medalii/medalii";
import Oferta from "./oferta/oferta";
import Promavibilitate from "./promovabilitate/promovabilitate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Educatie() {
  //setez tabul de baza
  const [tabActiv, setTabActiv] = useState("promovabilitate");
  const navigate = useNavigate();
  return (
    <div className={styles.gradientMov} style={{ minHeight: "100vh" }}>
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
          <div className={styles.iconItem}>
            <School
              size={50}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/despre-noi")}
            />
            <p>Locație / Istorie / Contact / QR</p>
          </div>
          <div className={`${styles.iconItem} ${styles.active}`}>
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
            tabActiv === "calendar" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("calendar")}
        >
          Calendar scolar
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "medalii" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("medalii")}
        >
          Medalii obtinute
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "oferta" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("oferta")}
        >
          Oferta educationala
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "promovabilitate" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("promovabilitate")}
        >
          Promovabilitate
        </span>
        <div className={styles.continut}>
          {tabActiv === "calendar" && <Calendar />}
          {tabActiv === "medalii" && <Medalii />}
          {tabActiv === "oferta" && <Oferta />}
          {tabActiv === "promovabilitate" && <Promavibilitate />}
        </div>
      </div>
    </div>
  );
}
