import React from "react";
import AnimeCard from "./AnimeCard";
import { Grid } from "@mui/material";

const AnimeList = (props) => {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {props.data.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </Grid>
  );
};

export default AnimeList;
