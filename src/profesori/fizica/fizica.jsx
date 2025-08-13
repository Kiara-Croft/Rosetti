import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";
import styles from "./fizica.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Fizica() {
  const navigate = useNavigate();

  useEffect(() => {
    const opts = {
      n: "spin", //Animation Name
      t: 3, //Animation Duration (sec)
      i: 50, //Max Step Iterations
      v: 40, //Initial Velocity (deg)
      f: 0.75, //Friction Coefficient
    };

    function animation(o) {
      var string =
        "animation:" +
        o.n +
        " " +
        o.t +
        "s linear infinite;\n@keyframes " +
        o.n +
        "{\n" +
        keyframes(o) +
        "\n}";
      console.log(string);
    }

    function keyframes(o) {
      var string = "";
      var v = o.v;
      for (var i = 1; i <= o.i; i++) {
        v = v * o.f; //Calculate Instant Velocity
        var p = (i / o.i) * 100; //Percentage of Duration
        var t = (i / o.i) * o.t * 100; //Actual Time of Step
        var d = v * t; //Calculate Final Rotation
        string +=
          "\n" +
          r(p) +
          "%{ transform:rotateZ(" +
          r(d) +
          "deg) translateZ(0); }";
      }
      return string;
    }

    function r(n) {
      return Math.round(n * 100000) / 100000;
    }

    animation(opts);
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

      {/* Gear Animation */}
      <div id={styles.gear}>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div className={styles.tooth}></div>
        <div id={styles.cover}>F=ma</div>
      </div>

      <div className={styles.containerRotundTransparent}>
        <h1>Cadrele didactice</h1>
        <ul>
          <li>Cristina Argintaru</li>
          <li>Teodora Ștefănescu</li>
          <li>Didona Avramescu</li>
          <li>Alexandra Șerban</li>
          <li>Emilia Boicu</li>
        </ul>
      </div>
    </div>
  );
}
