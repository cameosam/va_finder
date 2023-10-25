import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import AnimeList from "../components/AnimeList";
import { Box, Typography } from "@mui/material";

const Results = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem("myData")));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
    console.log(search.animeData);
  }, [search]);

  return (
    <Box mt={2}>
      {(dataExists && <AnimeList data={search.animeData} />) || (
        <Typography variant="h4">"Data does not exist"</Typography>
      )}
    </Box>
  );
};

export default Results;
