import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Characters from "./pages/Characters";
import { SearchContext } from "./context/search";
import Header from "./components/Header";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [characterData, setCharacterData] = useState([]);

  const setDataAnime = (data) => {
    setAnimeData(data);
  };

  const setDataCharacters = (data) => {
    setCharacterData(data);
  };

  const searchAnime = async (searchTerm) => {
    const response = await fetch(`http://127.0.0.1:8000/anime/${searchTerm}`);
    return await response.json();
  };

  const searchCharacters = async (animeId) => {
    const response = await fetch(`http://127.0.0.1:8000/characters/${animeId}`);
    return await response.json();
  };

  return (
    <SearchContext.Provider
      value={{
        searchAnime,
        animeData,
        setDataAnime,
        searchCharacters,
        characterData,
        setDataCharacters,
      }}
    >
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
