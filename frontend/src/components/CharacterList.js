import React from "react";
import CharacterCard from "./CharacterCard";
import { Grid } from "@mui/material";

const CharacterList = (props) => {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {props.data.map((character) => (
        <CharacterCard character={character} key={character.mal_id} />
      ))}
    </Grid>
  );
};

export default CharacterList;
