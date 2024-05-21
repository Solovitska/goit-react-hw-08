import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../LoginForm/LoginForm.module.css";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = ({ onRegister }) => {
  const handleSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Register</h2>
        <label className={css.label}>
          <span className={css.text}>User name</span>
          <Field
            className={css.input}
            placeholder="John Dow"
            type="text"
            name="name"
          />
          <ErrorMessage 
          className={css.error}
          name="password"
          component="span"/>
        </label>
        <label className={css.label}>
          <span className={css.text}>Email</span>
          <Field
            className={css.input}
            placeholder="mail@domain.com"
            type="text"
            name="email"
          />
          <ErrorMessage 
          className={css.error}
          name="password"
          component="span"/>
        </label>
        <label className={css.label}>
          <span className={css.text}>Password</span>
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
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;