import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apiAddUserContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(
      /^[\+]?([0-9]{2})?[(]?([0-9]{3})?[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(apiAddUserContact(data));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Name</label>
          <Field type="text" className={styles.input} name="name"></Field>
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.inputContainer}>
          <label>Number</label>
          <Field type="tel" className={styles.input} name="number"></Field>
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;