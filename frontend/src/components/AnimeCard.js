import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import "./AnimeCard.css";

const AnimeCard = (props) => {
  const title =
    props.anime.title.length > 15
      ? `${props.anime.title.substring(0, 15)}...`
      : props.anime.title;
  const imageURL = props.anime.images.jpg.image_url;
  return (
    <Grid item className="animeCard__container">
      <Grid>
        <Paper className="animeCard__paper">
          <img src={imageURL} alt={title} style={{ height: 300, width: 200 }} />
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnimeCard;
