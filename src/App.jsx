import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Memotest from "./pages/memotest/Memotest";
import AdivinaElCartoon from "./pages/adivinaelcartoon/AdivinaElCartoon";
import PalabrasPorMinuto from "./pages/palabrasporminuto/PalabrasPorMinuto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memotest" element={<Memotest />} />
      <Route path="/adivinaelcartoon" element={<AdivinaElCartoon />} />
      <Route path="/palabrasporminuto" element={<PalabrasPorMinuto />} />
    </Routes>
  );
}

export default App;
