// Oferta.jsx
import styles from "./oferta.module.css";

export default function Oferta() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferta Educațională</h2>

      <div className={styles.cardsWrapper}>
        {/* BIO-CHIMIE */}
        <div className={styles.cardBio}>
          <div className={styles.halfCircle}>PROFILUL BIO-CHIMIE</div>
          <div className={styles.ovalLeft}>
            2 CLASE NORMALE
            <br />A CÂTE 32 DE LOCURI
          </div>
          <div className={styles.circleRight}>
            1 CLASĂ DE INTENSIV
            <br />
            ENGLEZĂ
          </div>
        </div>

        {/* MATE-INFO */}
        <div className={styles.cardMate}>
          <div className={styles.halfCircle}>
            PROFILUL MATEMATICĂ-INFORMATICĂ
          </div>
          <div className={styles.ovalLeft}>
            2 CLASE NORMALE
            <br />A CÂTE 32 DE LOCURI
          </div>
          <div className={styles.circleRight}>
            1 CLASĂ DE INTENSIV
            <br />
            ENGLEZĂ
          </div>
        </div>

        {/* FILO */}
        <div className={styles.cardFilo}>
          <div className={styles.halfCircle}>PROFILUL FILOLOGIE</div>
          <div className={styles.singleCircle}>
            1 CLASĂ
            <br />
            FĂRĂ INTENSIV
          </div>
        </div>
      </div>
    </div>
  );
}
