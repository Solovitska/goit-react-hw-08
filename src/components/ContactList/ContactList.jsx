import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isloggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isloggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isloggedIn]);

  return filteredContacts.length > 0 ? (
    <ul className={css.contactList}>
      {filteredContacts.map((item) => (
        <li key={nanoid()} className={css.contactListItem}>
          <Contact contacts={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Contacts is empty</p>
  );
};

export default ContactList;