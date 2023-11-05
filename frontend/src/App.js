import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { SearchContext } from "./context/search";
import Header from "./components/Header";

function App() {
  const [animeData, setAnimeData] = useState([]);

  const setData = (data) => {
    setAnimeData(data);
  };

  const search = async (searchTerm) => {
    const response = await fetch(`http://127.0.0.1:8000/anime/${searchTerm}`);
    return await response.json();
  };

  return (
    <SearchContext.Provider value={{ search, animeData, setData }}>
      <Header />
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
