import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";

import Stiri from "./stiri/stiri/";
import Evenimente from "./evenimente/evenimente";
import Concursuri from "./concursuri/concursuri";

import { Newspaper, School, GraduationCap, UserPen, Home } from "lucide-react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { onSnapshot } from "firebase/firestore";
import styles from "./acasa.module.css";

export default function Acasa() {
  const [tabActiv, setTabActiv] = useState("stiri");
  const [editMode, setEditMode] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [carduri, setCarduri] = useState([]);
  const navigate = useNavigate();

  // 🔥 Fetch carduri din Firestore
  useEffect(() => {
    const unsub1 = onSnapshot(collection(db, "card1"), (snap) => {
      setCarduri((prev) => {
        // Păstrăm doar cardurile care NU sunt din "stiri"
        const rest = prev.filter((c) => c.tab !== "stiri");
        // Adăugăm cardurile noi din stiri
        return [
          ...rest,
          ...snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            tab: "stiri",
          })),
        ];
      });
    });

    const unsub2 = onSnapshot(collection(db, "card2"), (snap) => {
      setCarduri((prev) => {
        const rest = prev.filter((c) => c.tab !== "evenimente");
        return [
          ...rest,
          ...snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            tab: "evenimente",
          })),
        ];
      });
    });

    const unsub3 = onSnapshot(collection(db, "card3"), (snap) => {
      setCarduri((prev) => {
        const rest = prev.filter((c) => c.tab !== "concursuri");
        return [
          ...rest,
          ...snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            tab: "concursuri",
          })),
        ];
      });
    });

    return () => {
      unsub1();
      unsub2();
      unsub3();
    };
  }, []);

  // 🧠 Funcție pentru salvarea modificărilor în Firebase
  const confirmChanges = async () => {
    for (let card of carduri) {
      // Alegem colecția în funcție de tab
      let collectionName;
      if (card.tab === "stiri") collectionName = "card1";
      else if (card.tab === "evenimente") collectionName = "card2";
      else if (card.tab === "concursuri") collectionName = "card3";

      const cardRef = doc(db, collectionName, card.id);
      await updateDoc(cardRef, {
        titlu: card.titlu,
        descriere: card.descriere,
        imagine: card.imagine,
        textButonDetalii: card.textButonDetalii,
        linkButonDetalii: card.linkButonDetalii,
        textButonAflaMaiMult: card.textButonAflaMaiMult,
        linkButonAflaMaiMult: card.linkButonAflaMaiMult,
      });
    }
    alert("Modificările au fost salvate în Firebase 🎉");
  };

  // 🔄 Carduri filtrate după tab activ
  const randCarduri = (
    <div className={styles.cardContainer}>
      {carduri
        .filter((card) => card.tab === tabActiv)
        .map((card, index) => (
          <Card key={card.id} className={styles.card}>
            {editMode ? (
              <div className={styles.cardImageEdit}>
                <input
                  type="text"
                  placeholder="URL imagine"
                  defaultValue={card.imagine || ""}
                  className={styles.imageInput}
                  onChange={(e) => {
                    const updatedCards = [...carduri];
                    updatedCards[index].imagine = e.target.value;
                    setCarduri(updatedCards);
                  }}
                />
                <div className={styles.imagePreview}>
                  Previzualizare Imagine
                </div>
              </div>
            ) : (
              <CardMedia
                className={styles.cardMedia}
                image={card.imagine || ""}
              />
            )}

            <CardContent>
              {editMode ? (
                <>
                  <input
                    defaultValue={card.titlu || ""}
                    className={styles.editInput}
                    onChange={(e) => {
                      const updatedCards = [...carduri];
                      updatedCards[index].titlu = e.target.value;
                      setCarduri(updatedCards);
                    }}
                  />
                  <textarea
                    defaultValue={card.descriere || ""}
                    className={styles.editTextarea}
                    onChange={(e) => {
                      const updatedCards = [...carduri];
                      updatedCards[index].descriere = e.target.value;
                      setCarduri(updatedCards);
                    }}
                  />
                </>
              ) : (
                <>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.titlu || "Fără titlu"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.descriere || "Fără descriere"}
                  </Typography>
                </>
              )}
            </CardContent>

            <CardActions>
              {editMode ? (
                <>
                  <input
                    type="text"
                    placeholder="Text buton Detalii"
                    defaultValue={card.textButonDetalii || "Detalii"}
                    className={styles.buttonInput}
                    onChange={(e) => {
                      const updatedCards = [...carduri];
                      updatedCards[index].textButonDetalii = e.target.value;
                      setCarduri(updatedCards);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Link buton Detalii"
                    defaultValue={card.linkButonDetalii || "#"}
                    className={styles.buttonInput}
                    onChange={(e) => {
                      const updatedCards = [...carduri];
                      updatedCards[index].linkButonDetalii = e.target.value;
                      setCarduri(updatedCards);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Text buton Află mai mult"
                    defaultValue={card.textButonAflaMaiMult || "Află mai mult"}
                    className={styles.buttonInput}
                    onChange={(e) => {
                      const updatedCards = [...carduri];
                      updatedCards[index].textButonAflaMaiMult = e.target.value;
                      setCarduri(updatedCards);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Link buton Află mai mult"
                    defaultValue={card.linkButonAflaMaiMult || "#"}
                    className={styles.buttonInput}
                    onChange={(e) => {
                      const updatedCards = [...carduri];
                      updatedCards[index].linkButonAflaMaiMult = e.target.value;
                      setCarduri(updatedCards);
                    }}
                  />
                </>
              ) : (
                <>
                  <Button size="small">
                    {card.textButonDetalii || "Detalii"}
                  </Button>
                  <Button size="small">
                    {card.textButonAflaMaiMult || "Află mai mult"}
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        ))}
    </div>
  );

  return (
    <div
      className={`${styles.gradientContent} ${
        tabActiv === "stiri"
          ? styles.gradientStiri
          : tabActiv === "evenimente"
          ? styles.gradientEvenimente
          : styles.gradientConcursuri
      }`}
    >
      {/* NAVBAR */}
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
          <div className={`${styles.iconItem} ${styles.active}`}>
            <Newspaper size={50} />
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

      {/* TABURI */}
      <div className={styles.taburi}>
        <span
          className={`${styles.tab} ${
            tabActiv === "stiri" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("stiri")}
        >
          Știri
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "evenimente" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("evenimente")}
        >
          Evenimente
        </span>
        <span
          className={`${styles.tab} ${
            tabActiv === "concursuri" ? styles.tabActiv : ""
          }`}
          onClick={() => setTabActiv("concursuri")}
        >
          Concursuri
        </span>
      </div>

      {/* CONȚINUT */}
      <div className={styles.continut}>
        {randCarduri}
        {tabActiv === "stiri" && <Stiri />}
        {tabActiv === "evenimente" && <Evenimente />}
        {tabActiv === "concursuri" && <Concursuri />}
      </div>

      {/* POPUP PAROLĂ */}
      {showPasswordInput && (
        <div className={styles.passwordPopup}>
          <input
            type="password"
            placeholder="Parolă..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => {
              if (password === "123") {
                setEditMode(true);
                setShowPasswordInput(false);
              } else {
                alert("Parolă incorectă 🫢");
              }
            }}
          >
            Confirmă
          </button>
        </div>
      )}

      {/* BUTOANE EDITARE */}
      <div className={styles.editButtonsContainer}>
        <button
          className={styles.editButton}
          onClick={() => setShowPasswordInput(true)}
        >
          Editare
        </button>
        {editMode && (
          <button
            className={styles.confirmButton}
            onClick={async () => {
              await confirmChanges();
              setEditMode(false);
            }}
          >
            Confirmă
          </button>
        )}
      </div>
    </div>
  );
}
