import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../redux/actions/noteActions";
import EditNote from "../components/EditNote";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
} from "@material-ui/core";

const NoteCard = ({ note }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClickOpen = () => setOpen(true);
  const dispatch = useDispatch();
  return (
    <Grid item key={note._id}>
      <Card elevation={10} variant="elevation">
        <CardContent>
          <Typography variant="h5">{note.title}</Typography>
          <Typography variant="body2">{note.description}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Edit
          </Button>
          <EditNote note={note} open={open} handleClose={handleClose} />
          <Button
            onClick={() => dispatch(deleteNote(note._id))}
            variant="contained"
            color="secondary"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NoteCard;
