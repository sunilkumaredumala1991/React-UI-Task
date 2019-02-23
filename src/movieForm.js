import React from "react";
import { Formik } from "formik";
import Yup from "yup";

const MovieForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h1>Favorite Movie Directory</h1>
      <div className="form-group">
        <label>Movie Name</label>
        <input
          id="name-input"
          name="name"
          type="text"
          className={`form-control ${errors.name &&
            touched.name &&
            "is-invalid"}`}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className="invalid-feedback">{errors.name}</div>
        )}
      </div>
      <div className="form-group">
        <label>Rating</label>
        <input
          id="ratings-input"
          name="rating"
          type="number"
          className={`form-control ${errors.rating &&
            touched.rating &&
            "is-invalid"}`}
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.rating && touched.rating && (
          <div className="invalid-feedback">{errors.rating}</div>
        )}
      </div>

      <div className="form-group">
        <label>Duration</label>
        <input
          id="duration-input"
          name="duration"
          type="number"
          className={`form-control ${errors.duration &&
            touched.duration &&
            "is-invalid"}`}
          value={values.duration}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.duration && touched.duration && (
          <div className="invalid-feedback">{errors.duration}</div>
        )}
      </div>

      <button
        id="submit-button"
        type="submit"
        className="btn btn-outline-primary"
        disabled={
          (errors.name || !touched.name) &&
          (errors.rating || !touched.rating) &&
          (errors.duration || !touched.duration)
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Formik({
  mapPropsToValues: props => ({
    name: props.data.name,
    rating: props.data.rating,
    duration: props.data.duration
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    rating: Yup.string().required("Rating is required!"),
    duration: Yup.string().required("Duration is required!")
  }),

  handleSubmit: (values, bag) => {
    debugger;
    bag.props.onsubmithandler(values);
    bag.resetForm();
  }
})(MovieForm);
