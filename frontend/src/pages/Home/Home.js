import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../common/SearchBar";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/search";
import AnimeList from "../../common/AnimeList";

const Home = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");
  const [topAnime, setTopAnime] = useState([]);

  async function searchTopAnime() {
    const response = await fetch(`http://127.0.0.1:8000/top_anime`);
    return await response.json();
  }

  useEffect(() => {
    if (topAnime.length === 0) {
      const localData = JSON.parse(localStorage.getItem("topAnime"));
      if (localData) {
        setTopAnime(localData);
      } else {
        searchTopAnime().then((data) => {
          setTopAnime(data.data);
          localStorage.setItem("topAnime", JSON.stringify(data.data));
        });
      }
    }
  }, [topAnime]);

  const handleSearch = (event) => {
    event.preventDefault();
    search.searchAnime(input).then((data) => {
      search.setDataAnime(data.data);
      localStorage.setItem("animeData", JSON.stringify(data.data));
      navigate("/anime");
    });
  };

  return (
    <Box mt={1}>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        Figure out where you've heard that voice before! Search or select an
        anime to start
      </Typography>
      <SearchBar
        label="Search anime"
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />

      <AnimeList data={topAnime} input="" />
    </Box>
  );
};

export default Home;
