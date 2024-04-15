import { useState } from "react";
import { DialogCommentProps } from "./DialogCommentProps";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import axios from "../../data/Axios";
import request from "../../data/Requests";

export default function DialogComment(props: DialogCommentProps) {
  const { onClose, open, featureTitle, featureId } = props;
  const [comment, setComment] = useState("");
  const [showError, setShowError] = useState(false);
  const [helperText, setHeperText] = useState("");

  const handleClose = () => {
    setComment("");
    setShowError(false);
    setHeperText("");
    onClose();
  };

  const handleOnChangeComment = (event: any) => {
    setHeperText("");
    setShowError(false);
    setComment(event.target.value);
  };

  const fetcher = async () => {
    const response = await axios.post(request.fetchFeatureComments(featureId), {
      comment: comment,
    });
    return response;
  };

  const handleOnSaveComment = async () => {
    if (comment.length > 0) {
      const result = await fetcher();
      if (result.status == 200) handleClose();
      else {
        setHeperText(result.data.message);
        setShowError(true);
      }
    } else {
      setHeperText("El comentario no puede ir vacio");
      setShowError(true);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ padding: 0, textAlign: "center" }}>
        Agrega Comentario
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ marginBottom: 1 }}>
          <h5>{featureTitle}</h5>
        </Box>
        <TextField
          error={showError}
          id="outlined-multiline-static"
          label="Comentario"
          value={comment}
          multiline
          rows={4}
          helperText={helperText}
          onChange={handleOnChangeComment}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "coral", color: "white" }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleOnSaveComment}
          autoFocus
          sx={{ backgroundColor: "coral", color: "white" }}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
