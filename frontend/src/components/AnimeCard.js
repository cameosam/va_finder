import React, { useState, useContext } from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const AnimeCard = (props) => {
  const title = props.anime.title;
  const imageURL = props.anime.images.jpg.image_url;
  const mal_id = props.anime.mal_id;

  const navigate = useNavigate();
  const search = useContext(SearchContext);

  const handleOnClick = (event) => {
    event.preventDefault();
    search.searchCharacters(mal_id).then((data) => {
      search.setDataCharacters(data.data);
      localStorage.setItem("characterData", JSON.stringify(data.data));
      navigate("/characters");
    });
  };

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
                  margin: "5px 0 0 0",
                  width: "85%",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
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
            onClick={handleOnClick}
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
