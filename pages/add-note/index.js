import { useEffect } from "react";
import * as yup from "yup";
import { addNote } from "../../redux/actions/noteActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

const index = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    title: yup.string().required("Please enter a title"),
    description: yup.string().required("Please enter a description"),
  });
  return (
    <div>
      <h3>Add Note</h3>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ title: "", description: "" }}
        onSubmit={(values) => {
          //   console.log(values);
          dispatch(addNote(values));
        }}
      >
        {(props) => {
          return (
            <form>
              <input
                type="text"
                value={props.values.title}
                onChange={props.handleChange("title")}
                onBlur={props.handleBlur("title")}
              />
              {props.touched.title && <p>{props.errors.title}</p>}
              <textarea
                value={props.values.description}
                onChange={props.handleChange("description")}
                onBlur={props.handleBlur("description")}
              />
              {props.touched.description && <p>{props.errors.description}</p>}
              <button type="submit" onClick={props.handleSubmit}>
                Save
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default index;
