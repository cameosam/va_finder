import React from "react";
import { Paper, Grid, Typography, Tooltip } from "@mui/material";

const AnimeCard = (props) => {
  const title = props.anime.title;
  const short_title =
    title.length > 15 ? `${title.substring(0, 15)}...` : title;
  const imageURL = props.anime.images.jpg.image_url;
  return (
    <Grid item sx={{ padding: "5px" }}>
      <Tooltip title={title}>
        <Grid>
          <Paper
            sx={[
              {
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "10px",
              },
              {
                "&:hover": {
                  backgroundColor: "lightgray",
                  opacity: "0.8",
                },
              },
            ]}
          >
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
