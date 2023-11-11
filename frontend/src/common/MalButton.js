import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";

const MalButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        Add MAL Username
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add MAL username</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Only view anime that you've seen!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="username"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default MalButton;
