import * as yup from "yup";
import { addNote } from "../redux/actions/noteActions";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  Button,
  TextField,
  TextareaAutosize,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const index = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    title: yup.string().required("Please enter a title"),
    description: yup.string().required("Please enter a description"),
  });
  return (
    <Dialog open={open} onClose={handleClose}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ title: "", description: "" }}
        onSubmit={(values) => {
          dispatch(addNote(values));
          // router.push("/");
          handleClose();
        }}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <DialogTitle>Add Note</DialogTitle>
              <DialogContent>
                <TextField
                  autofocus
                  label="Note Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={props.values.title}
                  onChange={props.handleChange("title")}
                  onBlur={props.handleBlur("title")}
                />
                {props.touched && <p>{props.errors.title}</p>}
                <TextareaAutosize
                  minRows={3}
                  placeholder="Note description"
                  style={{ width: 240 }}
                  value={props.values.description}
                  onChange={props.handleChange("description")}
                  onBlur={props.handleBlur("description")}
                />
                {props.touched && <p>{props.errors.description}</p>}
              </DialogContent>
              <DialogActions>
                <Button type="submit" variant="outlined" color="success">
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default index;
