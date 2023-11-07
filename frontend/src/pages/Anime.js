import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import AnimeList from "../components/AnimeList";
import { Box, Typography } from "@mui/material";
import AnimeSearchBar from "./AnimeSearchBar";

const Anime = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

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
    <div>
      <AnimeSearchBar label="Pick anime or search different anime" />
      <Box mt={1}>
        {(dataExists && <AnimeList data={search.animeData} />) || (
          <Typography variant="h4">"Data does not exist"</Typography>
        )}
      </Box>
    </div>
  );
};

export default Anime;
