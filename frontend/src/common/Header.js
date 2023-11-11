import React from "react";
import { Box, Typography } from "@mui/material";

const Header = (props) => {
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
        src={props.jpg}
        alt={props.title}
        style={{ height: 30, width: props.width }}
      />
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase", margin: "0 10px 0 10px" }}
      >
        {props.title}
      </Typography>
      <img
        src={props.jpg}
        alt={props.title}
        style={{ height: 30, width: props.width }}
      />
    </Box>
  );
};

export default Header;
