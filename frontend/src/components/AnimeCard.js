import React from "react";
import { Paper, Grid } from "@mui/material";

const AnimeCard = (props) => {
  const title = props.anime.title;
  const imageURL = props.anime.images.jpg.image_url;
  return (
    <Grid item>
      <Grid container item xs={12}>
        <Paper>
          <img src={imageURL} alt={title} style={{ maxHeight: 300 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnimeCard;
