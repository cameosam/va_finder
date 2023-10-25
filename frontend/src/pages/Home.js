import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import { FormControl, Input, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      search.setData(data.data);
      localStorage.setItem("myData", JSON.stringify(data.data));
      navigate("/results");
    });
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <img
          alt="question mark"
          src={`${process.env.PUBLIC_URL}/question_mark.png`}
          height={100}
          width={100}
        />
      </Grid>
      <Grid>
        <form className="home_form">
          <FormControl type="submit" className="home_formControl">
            <Input
              className="home_input"
              placeholder="search anime title..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            ></Input>
            <IconButton
              className="home_iconButton"
              varient="contained"
              color="primary"
              ype="submit"
              disabled={!input}
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default Home;
