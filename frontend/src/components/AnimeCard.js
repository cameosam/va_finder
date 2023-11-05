import React, { useState } from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AnimeCard = (props) => {
  const title = props.anime.title;
  const imageURL = props.anime.images.jpg.image_url;

  const [show, setShow] = useState(false);
  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };
  return (
    <Grid item sx={{ padding: "5px" }}>
      <Grid>
        <Paper
          onMouseOver={showOverlay}
          onMouseLeave={hideOverlay}
          sx={[
            {
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            },
          ]}
        >
          <img src={imageURL} alt={title} style={{ height: 300, width: 200 }} />

          {show && (
            <Typography
              variant="h6"
              sx={[
                {
                  display: "inline-flex",
                  position: "absolute",
                  top: "0",
                  padding: "10px",
                  width: "85%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                },
              ]}
            >
              {title}
            </Typography>
          )}
          <Button
            size="small"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{ alignSelf: "stretch", margin: "5px 0 0 0" }}
          >
            Select
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnimeCard;
