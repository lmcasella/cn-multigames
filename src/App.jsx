import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Memotest from "./pages/memotest/Memotest";
import PokemonQuiz from "./pages/quiz/PokemonQuiz";
import FastWords from "./pages/fastwords/FastWords";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memotest" element={<Memotest />} />
      <Route path="/pncquiz" element={<PokemonQuiz />} />
      <Route path="/fastwords" element={<FastWords />} />
    </Routes>
  );
}

export default App;
