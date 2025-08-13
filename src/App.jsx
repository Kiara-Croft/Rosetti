import { Routes, Route } from "react-router-dom";
import { Prezentare } from "./prezentare/prezentare";
import DespreNoi from "./despre-noi/despreNoi";
import Acasa from "./acasa/acasa";
import Educatie from "./educatie/educatie";
import Profesori from "./profesori/profesori";
import Ant from "./profesori/ant/ant";
import Bio from "./profesori/bio/bio";
import Chimie from "./profesori/chimie/chimie";
import Desen from "./profesori/desen/desen";
import Engleza from "./profesori/engleza/engleza";
import Filosofie from "./profesori/filosofie/filosofie";
import Fizica from "./profesori/fizica/fizica";
import Franceza from "./profesori/franceza/franceza";
import Geo from "./profesori/geo/geo";
import Germana from "./profesori/germana/germana";
import Info from "./profesori/info/info";
import Istorie from "./profesori/istorie/istorie";
import Latina from "./profesori/latina/latina";
import Logica from "./profesori/logica/logica";
import Mate from "./profesori/mate/mate";
import Muzica from "./profesori/muzica/muzica";
import Psiho from "./profesori/psiho/psiho";
import Religie from "./profesori/religie/religie";
import Romana from "./profesori/romana/romana";
import Sport from "./profesori/sport/sport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prezentare />} />
      <Route path="/prezentare" element={<Prezentare />} />
      <Route path="/acasa" element={<Acasa />} />
      <Route path="/despre-noi" element={<DespreNoi />} />
      <Route path="/educatie" element={<Educatie />} />
      <Route path="/profesori" element={<Profesori />} />
      <Route path="/ant" element={<Ant />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/chimie" element={<Chimie />} />
      <Route path="/desen" element={<Desen />} />
      <Route path="/engleza" element={<Engleza />} />
      <Route path="/filosofie" element={<Filosofie />} />
      <Route path="/fizica" element={<Fizica />} />
      <Route path="/franceza" element={<Franceza />} />
      <Route path="/geo" element={<Geo />} />
      <Route path="/germana" element={<Germana />} />
      <Route path="/info" element={<Info />} />
      <Route path="/istorie" element={<Istorie />} />
      <Route path="/latina" element={<Latina />} />
      <Route path="/logica" element={<Logica />} />
      <Route path="/mate" element={<Mate />} />
      <Route path="/muzica" element={<Muzica />} />
      <Route path="/psiho" element={<Psiho />} />
      <Route path="/religie" element={<Religie />} />
      <Route path="/romana" element={<Romana />} />
      <Route path="/sport" element={<Sport />} />
    </Routes>
  );
}

export default App;
