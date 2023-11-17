import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonlistPage from "./pages/PokemonlistPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/pokemonlist" element={<PokemonlistPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
