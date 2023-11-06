import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const AnimeSearchBar = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

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
      <SearchBar
        label={props.label ? props.label : "Search anime"}
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
    </Box>
  );
};

export default AnimeSearchBar;
