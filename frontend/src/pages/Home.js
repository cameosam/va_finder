import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const Home = (props) => {
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
      <SearchBar
        label={props.label ? props.label : "Search an Anime"}
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
    </Box>
  );
};

export default Home;
