import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <Typography>WHO'S THAT VOICE ACTOR</Typography>
      <img
        alt="question mark"
        src={`${process.env.PUBLIC_URL}/question_mark.png`}
        height={25}
        width={25}
      />
    </div>
  );
};

export default Header;
