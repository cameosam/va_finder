import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Alert from "@mui/material/Alert";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { SearchContext } from "../context/search";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const MalButton = () => {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [username, setUsername] = React.useState("");
  const search = useContext(SearchContext);
  const [error, setError] = React.useState(false);

  const handleClickOpen = () => {
    setInput("");
    setOpen(true);
  };

  const handleClose = () => {
    setError(false);
    setOpen(false);
  };

  const addUsername = () => {
    if (input.length != 0) {
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
    } else {
      setError(true);
    }
  };

  const removeUsername = () => {
    setUsername("");
    search.setDataMal([]);
    localStorage.removeItem("malData");
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClickOpen}
        sx={{
          margin: "0 0 0 10px",
        }}
      >
        {username ? (
          <CheckCircleOutlineIcon fontSize="large" />
        ) : (
          <AddCircleOutlineIcon fontSize="large" />
        )}
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {(username ? "Update" : "Add") + " MyAnimeList username"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {username
              ? "Current username: " + username
              : "Only view anime that you've seen!"}
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
          <Button onClick={addUsername}>{username ? "Update" : "Add"}</Button>
          {username && <Button onClick={removeUsername}>Remove</Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default MalButton;
