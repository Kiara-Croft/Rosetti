import styles from "./locatie.module.css";

export default function Locatie() {
  return (
    <div>
      <img
        src="/imagini/harta.png"
        alt="Hartă liceu"
        className={styles.harta}
      />

      <span className={styles.text1}>
        Mai precis la adresa Strada Giuseppe Garibaldi 11, București 014192
      </span>
      <span className={styles.text2}>
        Autobuzele care circula pe langa liceu sunt 282 461 605 330 135 343 N119
      </span>
      <span className={styles.text3}>
        Dar daca nu recunosti niciun autobuz din cele de mai sus liceul este
        aproape de linia de metro M2 , cea mai apropiata statie find Aurel
        Vlaicu
      </span>
    </div>
  );
}
