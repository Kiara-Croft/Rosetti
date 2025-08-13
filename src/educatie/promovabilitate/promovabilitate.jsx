import styles from "./promavibilitate.module.css";

export default function Promavibilitate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* TABEL 1 - Specializări */}
        <h1>Informaţii utile pentru admitere 2025</h1>
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollInner}>
            <table className={styles.tabel}>
              <thead>
                <tr>
                  <th rowSpan="2">SPECIALIZARE</th>
                  <th rowSpan="2">
                    COD
                    <br />
                    2025
                  </th>
                  <th rowSpan="2">
                    LOCURI
                    <br />
                    2025
                  </th>
                  <th colSpan="2">NR. LOCURI SPECIALE</th>
                  <th rowSpan="2">
                    FORMA
                    <br />
                    ÎNVĂȚĂMÂNT
                  </th>
                  <th rowSpan="2">FILIERA</th>
                  <th rowSpan="2">PROFIL</th>
                  <th rowSpan="2">INTENSIV</th>
                  <th rowSpan="2">
                    LIMBA DE
                    <br />
                    PREDARE
                  </th>
                  <th rowSpan="2">BILINGV</th>
                  <th rowSpan="2">
                    MA
                    <br />
                    2024
                  </th>
                </tr>
                <tr>
                  <th>ROMI</th>
                  <th>R.MOLDOVA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matematică-Informatică</td>
                  <td>224</td>
                  <td>78</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Teoretică</td>
                  <td>Real</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Limba română</td>
                  <td>-</td>
                  <td>8.80</td>
                </tr>
                <tr>
                  <td>Științe ale Naturii</td>
                  <td>225</td>
                  <td>78</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Teoretică</td>
                  <td>Real</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Limba română</td>
                  <td>-</td>
                  <td>8.75</td>
                </tr>
                <tr>
                  <td>Filologie</td>
                  <td>226</td>
                  <td>26</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Teoretică</td>
                  <td>Uman</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Limba română</td>
                  <td>-</td>
                  <td>8.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABEL 2 - Medii și promovabilitate */}
        <h1>Rezultatele la BAC 2024 din prima sesiune</h1>
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollInner}>
            <table className={styles.tabel}>
              <thead>
                <tr>
                  <th>SPECIALIZARE</th>
                  <th>FORMA DE ÎNVĂȚĂMÂNT</th>
                  <th>MEDIA PE LICEU</th>
                  <th>PROMOVABILITATE</th>
                  <th>NUMĂR NOTE DE 10</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Filologie</td>
                  <td>Zi</td>
                  <td>8.78</td>
                  <td>100.00%</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Matematică-Informatică</td>
                  <td>Zi</td>
                  <td>8.05</td>
                  <td>93.94%</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Științe ale Naturii</td>
                  <td>Zi</td>
                  <td>7.68</td>
                  <td>91.67%</td>
                  <td>0</td>
                </tr>
                <tr className={styles.total}>
                  <td colSpan="2">
                    <strong>Total medie liceu</strong>
                  </td>
                  <td>
                    <strong>8.00</strong>
                  </td>
                  <td>
                    <strong>93.81%</strong>
                  </td>
                  <td>
                    <strong>0</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
