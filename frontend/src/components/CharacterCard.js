import React, { useState, useContext } from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const CharacterCard = (props) => {
  const name = props.character.character.name;
  const imageURL = props.character.character.images.jpg.image_url;
  const mal_id = props.character.character.mal_id;

  const navigate = useNavigate();
  const search = useContext(SearchContext);

  const handleOnClick = (event) => {};

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
          <img src={imageURL} alt={name} style={{ height: 300, width: 200 }} />

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
              {name}
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

export default CharacterCard;
