import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../common/SearchBar";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/search";
import Header from "../../common/Header";

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
      <Header
        title="WHO'S THAT VOICE ACTOR"
        jpg={`${process.env.PUBLIC_URL}/question_mark.png`}
        width={30}
      />
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        Figure out where you've heard that voice before!
      </Typography>
      <SearchBar
        label={props.label ? props.label : "Search anime"}
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
    </Box>
  );
};

export default Home;
