import { DialogCommentProps } from "./DialogCommentProps";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export default function DialogComment(props: DialogCommentProps) {
  const { onClose, open, featureTitle } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ padding: 0, textAlign: "center" }}>
        Agrega Comentario
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ marginBottom: 1 }}>
          <h4>{featureTitle}</h4>
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          focused
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "coral", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          autoFocus
          sx={{ backgroundColor: "coral", color: "white" }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
