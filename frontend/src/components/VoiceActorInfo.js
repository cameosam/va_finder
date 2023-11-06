import React from "react";
import { Box, Typography } from "@mui/material";

const VoiceActorInfo = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <img
        src={props.data.images.jpg.image_url}
        alt={props.data.name}
        style={{ height: 30, width: 20 }}
      />
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase", margin: "0 10px 0 10px" }}
      >
        IT'S {props.data.name}
      </Typography>
      <img
        src={props.data.images.jpg.image_url}
        alt={props.data.name}
        style={{ height: 30, width: 20 }}
      />
    </Box>
  );
};

export default VoiceActorInfo;
