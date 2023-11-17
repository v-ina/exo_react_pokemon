import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonlistPage from "./pages/PokemonlistPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/pokemonlist" element={<PokemonlistPage />}/>
        <Route path="/pokemonlist/:pokemonID/details" element={<PokemonDetailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
