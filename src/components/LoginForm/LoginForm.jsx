import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { apiLoginUser } from "../../redux/auth/operations.js";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data, formActions) => {
    dispatch(apiLoginUser(data));
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Login:</h2>
        <label className={css.label}>
          <span className={css.text}>Email:</span>
          <Field
            className={css.input}
            placeholder="mail@domain.com"
            type="text"
            name="email"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.text}>Password:</span>
          <Field
            className={css.input}
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button
          className={css.button}
          type="submit"
          title="Click to log in"
          aria-label="Log in"
        >
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;