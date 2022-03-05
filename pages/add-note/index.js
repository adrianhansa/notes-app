import * as yup from "yup";
import { addNote } from "../../redux/actions/noteActions";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const validationSchema = yup.object({
    title: yup.string().required("Please enter a title"),
    description: yup.string().required("Please enter a description"),
  });
  return (
    <div>
      <Typography variant="h3">Add Note</Typography>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ title: "", description: "" }}
        onSubmit={(values) => {
          dispatch(addNote(values));
          router.push("/");
        }}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                value={props.values.title}
                onChange={props.handleChange("title")}
                onBlur={props.handleBlur("title")}
              />
              {props.touched && <p>{props.errors.title}</p>}
              <textarea
                value={props.values.description}
                onChange={props.handleChange("description")}
                onBlur={props.handleBlur("description")}
              />
              {props.touched && <p>{props.errors.description}</p>}
              <button type="submit">Save</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default index;
