import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Alert from "@mui/material/Alert";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";
import { SearchContext } from "../context/search";

const MalButton = () => {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [username, setUsername] = React.useState("");
  const search = useContext(SearchContext);
  const [error, setError] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setError(false);
    setOpen(false);
  };

  const addUsername = () => {
    search.searchMal(input).then((data) => {
      if (data.data) {
        const mal_anime_ids = data.data.map((x) => x["node"]["id"]);
        search.setDataMal(mal_anime_ids);
        localStorage.setItem("malData", JSON.stringify(mal_anime_ids));
        setUsername(input);
        handleClose();
      } else {
        setError(true);
      }
    });
  };

  return (
    <React.Fragment>
      <Button
        endIcon={<PersonIcon />}
        onClick={handleClickOpen}
        sx={{
          display: "inline-flex",
          position: "absolute",
          top: "0",
          right: "0",
          margin: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        {username ? username : "Add MAL Username"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add MyAnimeList username</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Only view anime that you've seen!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="username"
            fullWidth
            variant="standard"
            onChange={(event) => setInput(event.target.value)}
          />
        </DialogContent>
        {error && (
          <Alert variant="outlined" severity="error">
            Could not find username
          </Alert>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addUsername}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default MalButton;
