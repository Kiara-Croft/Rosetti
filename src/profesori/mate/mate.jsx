import { useEffect } from "react";
import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./mate.module.css";
import { useNavigate } from "react-router-dom";

export default function Mate() {
  const navigate = useNavigate();

  useEffect(() => {
    function createShapes() {
      const background = document.getElementById("geometric-background");
      const shapeTypes = ["square", "circle", "triangle", "rectangle"];

      for (let i = 0; i < 40; i++) {
        const shape = document.createElement("div");
        const shapeClass =
          shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `shape ${styles[shapeClass]}`;

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;

        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.animationDelay = `${delay}s`;
        shape.style.animationDuration = `${duration}s`;

        background.appendChild(shape);
      }
    }

    function createParticles() {
      const particlesContainer = document.getElementById("particles");

      for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.className = styles.particle;

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 4 + 4;

        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
      }
    }

    function addMouseInteraction() {
      document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const shapes = document.querySelectorAll(`.${styles.shape}`);
        shapes.forEach((shape) => {
          const speed = 0.05;
          const shapeX = parseFloat(shape.style.left);
          const shapeY = parseFloat(shape.style.top);

          shape.style.left = `${shapeX + (x - 0.5) * speed}%`;
          shape.style.top = `${shapeY + (y - 0.5) * speed}%`;
        });
      });
    }

    createShapes();
    createParticles();
    addMouseInteraction();
  }, []);

  return (
    <div className={styles.gradientGalben}>
      <div
        id="geometric-background"
        className={styles.geometricBackground}
      ></div>
      <div id="particles" className={styles.particles}></div>
      <div className={styles.gradientOverlay}></div>

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
          <li>Oana Pruteanu</li>
          <li>Roxana Prodan</li>
          <li>Radu Mihai</li>
          <li>Sorin Ionescu</li>
          <li>Ileana Presură</li>
          <li>Traian Gîdea</li>
        </ul>
      </div>
    </div>
  );
}
