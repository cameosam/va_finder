import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{
          display: "inline-flex",
          position: "absolute",
          top: "0",
          left: "0",
          margin: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Box>
  );
};

export default BackButton;
