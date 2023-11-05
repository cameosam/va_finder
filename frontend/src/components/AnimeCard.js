import React from "react";
import { Paper, Grid, Typography, Tooltip } from "@mui/material";
import "./AnimeCard.css";

const AnimeCard = (props) => {
  const title = props.anime.title;
  const short_title =
    title.length > 15 ? `${title.substring(0, 15)}...` : title;
  const imageURL = props.anime.images.jpg.image_url;
  return (
    <Grid item className="animeCard__container">
      <Tooltip title={title}>
        <Grid>
          <Paper className="animeCard__paper">
            <img
              src={imageURL}
              alt={title}
              style={{ height: 300, width: 200 }}
            />
            <Typography variant="h6" component="h2">
              {short_title}
            </Typography>
          </Paper>
        </Grid>
      </Tooltip>
    </Grid>
  );
};

export default AnimeCard;
