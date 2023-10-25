import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import MainNavigation from "./components/MainNavigation";
import { SearchContext } from "./context/search";

function App() {
  const [animeData, setAnimeData] = useState([]);

  const setData = (data) => {
    setAnimeData(data);
  };

  const search = (searchTerm) => {
    return fetch(`http://127.0.0.1:8000/anime/${searchTerm}`).then((response) =>
      response.json()
    );
  };

  return (
    <SearchContext.Provider value={{ search, animeData, setData }}>
      <MainNavigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
