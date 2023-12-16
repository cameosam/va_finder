import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../context/search";
import CharacterList from "./CharacterList";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../common/SearchBar";

const Characters = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);
  const [input, setInput] = useState("");

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
  }, [search]);

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
        Select a character to find the voice actor
      </Typography>
      <SearchBar
        label="Search character"
        input={input}
        setInput={setInput}
        includeBack={true}
      />
      <Box mt={1}>
        {(dataExists && (
          <CharacterList data={search.characterData} input={input} />
        )) || <Typography variant="h4">"Data does not exist"</Typography>}
      </Box>
    </Box>
  );
};

export default Characters;
