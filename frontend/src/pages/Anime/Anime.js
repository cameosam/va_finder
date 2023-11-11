import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../context/search";
import AnimeList from "./AnimeList";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../common/SearchBar";
import BackButton from "../../common/BackButton";
import Header from "../../common/Header";

const Anime = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    search.searchAnime(input).then((data) => {
      search.setDataAnime(data.data);
      localStorage.setItem("animeData", JSON.stringify(data.data));
    });
  };

  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setDataAnime(JSON.parse(localStorage.getItem("animeData")));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
  }, [search]);

  return (
    <Box mt={1}>
      <Header
        title="WHO'S THAT VOICE ACTOR"
        jpg={`${process.env.PUBLIC_URL}/question_mark.png`}
        width={30}
      />
      <BackButton path="/" />
      <SearchBar
        label="Search anime"
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
      <Box mt={1}>
        {(dataExists && (
          <AnimeList data={search.animeData} input={input} />
        )) || <Typography variant="h4">"Data does not exist"</Typography>}
      </Box>
    </Box>
  );
};

export default Anime;
