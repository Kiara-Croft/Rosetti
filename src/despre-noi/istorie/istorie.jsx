import styles from "./istorie.module.css";

export default function Istorie() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titlu}>
        Scurta istorie a Liceului Teoretic C.A. Rosetti
      </h1>

      <div className={styles.card}>
        <div className={styles.poza}>poza</div>
        <div className={styles.info}>
          Liceul Teoretic „C.A. Rosetti” din București este o instituție de
          învățământ cu tradiție și performanță, fondată în anul 1957. Situat în
          cartierul Floreasca, liceul s-a remarcat de-a lungul timpului prin
          rezultate academice solide și un mediu educațional modern și
          echilibrat. Începând cu 1968, liceul a fost primul din capitală cu
          predare intensivă a limbii engleze, consolidându-și reputația în
          domeniul umanist și științific. Elevii au la dispoziție profiluri
          diverse (real și uman), laboratoare moderne și una dintre cele mai
          mari săli de sport din București. Cu o infrastructură recent
          reabilitată și profesori dedicați, Liceul „C.A. Rosetti” oferă un
          cadru ideal pentru formarea unor tineri responsabili, creativi și bine
          pregătiți pentru viitor.
        </div>
      </div>
    </div>
  );
}
