import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import CharacterList from "../components/CharacterList";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Typography variant="h4">WHO'S THAT VOICE ACTOR</Typography>
        <img
          alt="question mark"
          src={`${process.env.PUBLIC_URL}/question_mark.png`}
          height={40}
          width={40}
        />
      </Box>
      <BackButton path="/anime" />
      <SearchBar label="Search character" input={input} setInput={setInput} />
      <Box mt={1}>
        {(dataExists && (
          <CharacterList data={search.characterData} input={input} />
        )) || <Typography variant="h4">"Data does not exist"</Typography>}
      </Box>
    </Box>
  );
};

export default Characters;
