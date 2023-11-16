import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
      <Typography
        onClick={() => navigate("/")}
        variant="h4"
        sx={{
          textTransform: "uppercase",
          margin: "1rem",
          "&:hover": { cursor: "pointer" },
        }}
      >
        {"WHO'S THAT VOICE ACTOR "}
        <img
          src={`${process.env.PUBLIC_URL}/question_mark.png`}
          alt="question mark"
          style={{ height: 30, width: 30 }}
        />
      </Typography>
    </Box>
  );
};

export default Header;
