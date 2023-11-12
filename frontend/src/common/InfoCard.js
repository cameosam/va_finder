import React, { useState } from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const InfoCard = (props) => {
  const short_title =
    props.title.length > 34
      ? `${props.title.substring(0, 29)}...`
      : props.title;
  const [show, setShow] = useState(false);
  const showOverlay = () => {
    setShow(true);
  };

  const onClick = (event) => {
    props.handleOnClick(props.mal_id);
    event.preventDefault();
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
          <img
            src={props.imageURL}
            alt={props.title}
            style={{ height: 225, width: 150 }}
          />
          <Typography
            variant="caption"
            sx={[
              {
                display: "inline-flex",
                position: "absolute",
                top: "0",
                padding: "10px",
                margin: "10px 0 0 0",
                width: "85%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            ]}
          >
            {show ? props.title : short_title}
          </Typography>

          {props.mal_id != "-1" && (
            <Button
              size="small"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={onClick}
              sx={{ alignSelf: "stretch", margin: "5px 0 0 0" }}
              disabled={props.mal_id == "0"}
            >
              Select
            </Button>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InfoCard;
