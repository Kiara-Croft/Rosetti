import { useState, useEffect } from "react";
import styles from "./prezentare.module.css";
import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useLocation } from "react-router-dom";

export function Prezentare() {
  const [visits, setVisits] = useState(0);
  const [goToSlide, setGoToSlide] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedVisits = localStorage.getItem("visits");
    const newVisits = storedVisits ? parseInt(storedVisits) + 1 : 1;
    setVisits(newVisits);
    localStorage.setItem("visits", newVisits);
  }, []);

  const imaginiSiTexte = [
    {
      img: "/imagini/biologie.png",
      text: "Formăm caractere. Inspirăm viitorul.",
      className: "imgCarusel",
    },
    {
      img: "/imagini/chimie.svg",
      text: "Generații de gânditori, constructori de viitor.",
      className: "imgCarusel",
    },
    {
      img: "/imagini/matematica.svg",
      text: "Rosetti. Mai mult decât un liceu.",
      className: "imgCarusel",
    },
    {
      img: "/imagini/informatica.png",
      text: "Unde știința și literele se întâlnesc.",
      className: "imgCarusel",
    },
    {
      img: "/imagini/romana.png",
      text: "Viitorul începe cu o idee. Și un liceu.",
      className: "imgCarusel",
    },
    {
      img: "/imagini/engleza.png",
      text: "Educația te duce departe.",
      className: "imgCarusel",
    },
    {
      img: "/imagini/liceu.png",
      text: "Ratiune, cultura, inovatie.",
      className: "imgCarusel",
    },
  ];

  const slides = imaginiSiTexte.map((el, index) => ({
    key: uuidv4(),
    content: (
      <div style={{ textAlign: "center" }}>
        <img src={el.img} alt="" className={styles.imgCarusel} />
        <p className={styles.textCarusel}>{el.text}</p>
      </div>
    ),
    onClick: () => setGoToSlide(index),
  }));

  return (
    <div>
      {/* Navbar cu iconuri și etichete */}
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <div
            className={`${styles.iconItem} ${
              location.pathname === "/prezentare" ? styles.active : ""
            }`}
            onClick={() => navigate("/prezentare")}
          >
            <Home size={50} style={{ color: "#fff", cursor: "pointer" }} />
            <p>Prezentare</p>
          </div>

          <div
            className={`${styles.iconItem} ${
              location.pathname === "/acasa" ? styles.active : ""
            }`}
            onClick={() => navigate("/acasa")}
          >
            <Newspaper size={50} style={{ color: "#fff", cursor: "pointer" }} />
            <p>Știri / Evenimente / Concursuri</p>
          </div>

          <div
            className={`${styles.iconItem} ${
              location.pathname === "/despre-noi" ? styles.active : ""
            }`}
            onClick={() => navigate("/despre-noi")}
          >
            <School size={50} style={{ color: "#fff", cursor: "pointer" }} />
            <p>Locație / Istorie / Contact / QR</p>
          </div>

          <div
            className={`${styles.iconItem} ${
              location.pathname === "/educatie" ? styles.active : ""
            }`}
            onClick={() => navigate("/educatie")}
          >
            <GraduationCap
              size={50}
              style={{ color: "#fff", cursor: "pointer" }}
            />
            <p>Promovabilitate / Oferte / Medalii / Calendar</p>
          </div>

          <div
            className={`${styles.iconItem} ${
              location.pathname === "/profesori" ? styles.active : ""
            }`}
            onClick={() => navigate("/profesori")}
          >
            <UserPen size={50} style={{ color: "#fff", cursor: "pointer" }} />
            <p>Profesori / Diriginți</p>
          </div>
        </div>
      </nav>

      {/* Titlu liceu */}
      <div className={styles.container}>
        <div className={styles.glass}>
          <h1 className={styles.h}>Liceul Teoretic C.A.Rosetti</h1>
        </div>
      </div>

      {/* Carusel */}
      <div style={{ width: "80vw", height: "40vh", margin: "5rem auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={{ tension: 120, friction: 14 }}
        />
      </div>

      {/* Vizualizări */}
      <div className={styles.counter}>👀 Vizualizări: {visits}</div>
    </div>
  );
}
