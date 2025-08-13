import {
  Newspaper,
  School,
  GraduationCap,
  UserPen,
  BookMarked,
  BookOpen,
  BookText,
  BookOpenText,
  Book,
  Binary,
  Sigma,
  TestTubes,
  Leaf,
  CircuitBoard,
  History,
  Earth,
  BrainCircuit,
  MessageCircleQuestionMark,
  PersonStanding,
  HandCoins,
  Church,
  Volleyball,
  MicVocal,
  Pen,
  Home,
} from "lucide-react";
import styles from "./profesori.module.css";
import { useNavigate } from "react-router-dom";

export default function Profesori() {
  const navigate = useNavigate();

  return (
    <div className={styles.gradientGalben}>
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
          <div className={styles.iconItem}>
            <GraduationCap
              size={50}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/educatie")}
            />
            <p>Promovabilitate / Oferte / Medalii / Calendar</p>
          </div>
          <div className={`${styles.iconItem} ${styles.active}`}>
            <UserPen
              size={50}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/profesori")}
            />
            <p>Profesori / Diriginți</p>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles.cadrane}>
          <div className={styles.cadru}>
            <h2>Limbi Străine & Clasice</h2>
            <ul>
              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/romana")}
              >
                <BookMarked
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Română{" "}
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/franceza")}
              >
                <BookOpen
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Franceză
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/engleza")}
              >
                <BookText
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Engleză
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/germana")}
              >
                <BookOpenText
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Germană
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/latina")}
              >
                <Book
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Latină
              </li>
            </ul>
          </div>

          <div className={styles.cadru}>
            <h2>Real</h2>
            <ul>
              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/mate")}
              >
                <Sigma
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Matematică
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/info")}
              >
                <Binary
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Informatică
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/chimie")}
              >
                <TestTubes
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Chimie
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/bio")}
              >
                <Leaf
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Biologie
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/fizica")}
              >
                <CircuitBoard
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Fizică
              </li>
            </ul>
          </div>

          <div className={styles.cadru}>
            <h2>Uman</h2>
            <ul>
              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/istorie")}
              >
                <History
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Istorie
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/geo")}
              >
                <Earth
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Geografie
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/logica")}
              >
                <BrainCircuit
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Logică
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/filosofie")}
              >
                <MessageCircleQuestionMark
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Filosofie
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/psiho")}
              >
                <PersonStanding
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Psihologie
              </li>
            </ul>
          </div>

          <div className={styles.cadru}>
            <h2>Opționale & Arte</h2>
            <ul>
              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/ant")}
              >
                <HandCoins
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Antreprenorială
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/religie")}
              >
                <Church
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Religie
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/sport")}
              >
                <Volleyball
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Sport
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/muzica")}
              >
                <MicVocal
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Muzică
              </li>

              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/desen")}
              >
                <Pen
                  size={30}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
                Desen
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.claseContainer}>
        <div className={styles.cadruSimplu}>
          <h2>Clasa a IX-a</h2>
          <ul>
            <li>IX A – Prof. </li>
            <li>IX B – Prof. </li>
            <li>IX C – Prof. </li>
            <li>IX D – Prof. </li>
            <li>IX E – Prof. </li>
            <li>IX F – Prof. </li>
            <li>IX G – Prof. </li>
          </ul>
        </div>

        <div className={styles.cadruSimplu}>
          <h2>Clasa a X-a</h2>
          <ul>
            <li>X A – Prof.Ștefan Daniela </li>
            <li>X B – Prof. Roxana Prodan </li>
            <li>X C – Prof. Valentin Cocârlea</li>
            <li>X D – Prof. Adriana Enescu </li>
            <li>X E – Prof. Dan Mânatu </li>
            <li>X F – Prof. Alexandra Puiu</li>
            <li>X G – Prof.Oana Stoian </li>
          </ul>
        </div>

        <div className={styles.cadruSimplu}>
          <h2>Clasa a XI-a</h2>
          <ul>
            <li>XI A – Prof.Oana Pruteanu </li>
            <li>XI B – Prof.Mariana Ruță </li>
            <li>XI C – Prof. Elena Palaga </li>
            <li>XI D – Prof. Carmen Limbau </li>
            <li>XI E – Prof.Alina Stoica </li>
            <li>XI F – Prof. Georgeta Deaconu </li>
            <li>XI G – Prof.Vasile Patricia </li>
          </ul>
        </div>

        <div className={styles.cadruSimplu}>
          <h2>Clasa a XII-a</h2>
          <ul>
            <li>XII A – Prof.Doina Vișan </li>
            <li>XII B – Prof.Mădălina Crăciunescu </li>
            <li>XII C – Prof.Petruța Neagu </li>
            <li>XII D – Prof. Cristina Șiola </li>
            <li>XII E – Prof.Daniela Bădiță </li>
            <li>XII F – Prof.Cătălina Gergely </li>
            <li>XII G – Prof.Camelia Marin </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
