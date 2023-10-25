import React from "react";
import AnimeCard from "./AnimeCard";
import { Grid } from "@mui/material";

const AnimeList = (props) => {
  return (
    <Grid>
      {props.data.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </Grid>
  );
};

export default AnimeList;
