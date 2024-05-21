import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import {
  selectPhonebookIsLoading,
  selectPhonebookIsError,
} from "../../redux/contacts/selectors.js";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={styles.list}>
        {contacts &&
          contacts !== null &&
          contacts.map((contact) => (
            <li className={styles.item} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;