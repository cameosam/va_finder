import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import CharacterList from "../components/CharacterList";
import { Box, Typography } from "@mui/material";
import Home from "./Home";

const Characters = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (
      search.characterData === undefined ||
      search.characterData.length === 0
    ) {
      try {
        search.setDataCharacters(
          JSON.parse(localStorage.getItem("characterData"))
        );
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
    console.log(search.characterData);
  }, [search]);

  return (
    <div>
      <Home label="Pick a character or search a different anime" />
      <Box mt={1}>
        {(dataExists && <CharacterList data={search.characterData} />) || (
          <Typography variant="h4">"Data does not exist"</Typography>
        )}
      </Box>
    </div>
  );
};

export default Characters;
