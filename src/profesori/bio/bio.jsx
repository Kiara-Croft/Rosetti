import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./bio.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Bio() {
  const navigate = useNavigate();

  useEffect(() => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  }, []);

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

      <div className={styles.flowersContainer}>
        <div className={styles.night}></div>
        <div className={styles.flowers}>
          <div className={`${styles.flower} ${styles.flower1}`}>
            <div className={`${styles.flowerLeafs} ${styles.flowerLeafs1}`}>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf4}`}
              ></div>
              <div className={styles.flowerWhiteCircle}></div>

              <div
                className={`${styles.flowerLight} ${styles.flowerLight1}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight2}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight3}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight4}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight5}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight6}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight7}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight8}`}
              ></div>
            </div>
            <div className={styles.flowerLine}>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf4}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf5}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf6}`}
              ></div>
            </div>
          </div>

          <div className={`${styles.flower} ${styles.flower2}`}>
            <div className={`${styles.flowerLeafs} ${styles.flowerLeafs2}`}>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf4}`}
              ></div>
              <div className={styles.flowerWhiteCircle}></div>

              <div
                className={`${styles.flowerLight} ${styles.flowerLight1}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight2}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight3}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight4}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight5}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight6}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight7}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight8}`}
              ></div>
            </div>
            <div className={styles.flowerLine}>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf4}`}
              ></div>
            </div>
          </div>

          <div className={`${styles.flower} ${styles.flower3}`}>
            <div className={`${styles.flowerLeafs} ${styles.flowerLeafs3}`}>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerLeaf} ${styles.flowerLeaf4}`}
              ></div>
              <div className={styles.flowerWhiteCircle}></div>

              <div
                className={`${styles.flowerLight} ${styles.flowerLight1}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight2}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight3}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight4}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight5}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight6}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight7}`}
              ></div>
              <div
                className={`${styles.flowerLight} ${styles.flowerLight8}`}
              ></div>
            </div>
            <div className={styles.flowerLine}>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerLineLeaf} ${styles.flowerLineLeaf4}`}
              ></div>
            </div>
          </div>

          <div className={styles.growAns} style={{ "--d": "1.2s" }}>
            <div className={styles.flowerGLong}>
              <div className={styles.flowerGLongTop}></div>
              <div className={styles.flowerGLongBottom}></div>
            </div>
          </div>

          <div className={styles.growingGrass}>
            <div className={`${styles.flowerGrass} ${styles.flowerGrass1}`}>
              <div className={styles.flowerGrassTop}></div>
              <div className={styles.flowerGrassBottom}></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf4}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf5}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf6}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf7}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf8}`}
              ></div>
              <div className={styles.flowerGrassOverlay}></div>
            </div>
          </div>

          <div className={styles.growingGrass}>
            <div className={`${styles.flowerGrass} ${styles.flowerGrass2}`}>
              <div className={styles.flowerGrassTop}></div>
              <div className={styles.flowerGrassBottom}></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf4}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf5}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf6}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf7}`}
              ></div>
              <div
                className={`${styles.flowerGrassLeaf} ${styles.flowerGrassLeaf8}`}
              ></div>
              <div className={styles.flowerGrassOverlay}></div>
            </div>
          </div>

          <div className={styles.growAns} style={{ "--d": "2.4s" }}>
            <div className={`${styles.flowerGRight} ${styles.flowerGRight1}`}>
              <div className={styles.leaf}></div>
            </div>
          </div>

          <div className={styles.growAns} style={{ "--d": "2.8s" }}>
            <div className={`${styles.flowerGRight} ${styles.flowerGRight2}`}>
              <div className={styles.leaf}></div>
            </div>
          </div>

          <div className={styles.growAns} style={{ "--d": "2.8s" }}>
            <div className={styles.flowerGFront}>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper1}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper2}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper3}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper4}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper5}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper6}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper7}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div
                className={`${styles.flowerGFrontLeafWrapper} ${styles.flowerGFrontLeafWrapper8}`}
              >
                <div className={styles.flowerGFrontLeaf}></div>
              </div>
              <div className={styles.flowerGFrontLine}></div>
            </div>
          </div>

          <div className={styles.growAns} style={{ "--d": "3.2s" }}>
            <div className={styles.flowerGFr}>
              <div className={styles.leaf}></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf1}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf2}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf3}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf4}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf5}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf6}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf7}`}
              ></div>
              <div
                className={`${styles.flowerGFrLeaf} ${styles.flowerGFrLeaf8}`}
              ></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG0}`}>
            <div className={styles.growAns} style={{ "--d": "3s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "2.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.4s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG1}`}>
            <div className={styles.growAns} style={{ "--d": "3.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.8s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG2}`}>
            <div className={styles.growAns} style={{ "--d": "4s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.4s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG3}`}>
            <div className={styles.growAns} style={{ "--d": "4s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG4}`}>
            <div className={styles.growAns} style={{ "--d": "4s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG5}`}>
            <div className={styles.growAns} style={{ "--d": "4s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG6}`}>
            <div className={styles.growAns} style={{ "--d": "4.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.4s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "4.8s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>

          <div className={`${styles.longG} ${styles.longG7}`}>
            <div className={styles.growAns} style={{ "--d": "3s" }}>
              <div className={`${styles.leaf} ${styles.leaf0}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.2s" }}>
              <div className={`${styles.leaf} ${styles.leaf1}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.5s" }}>
              <div className={`${styles.leaf} ${styles.leaf2}`}></div>
            </div>
            <div className={styles.growAns} style={{ "--d": "3.6s" }}>
              <div className={`${styles.leaf} ${styles.leaf3}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Georgeta Cicea- dna directoare</li>
          <li>Liliana Mohorea</li>
          <li>Daniela Ștefan</li>
          <li>Maria Cătălina Stanciu</li>
        </ul>
      </div>
    </div>
  );
}
