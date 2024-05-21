import ContactForm from '../components/ContactForm/ContactForm.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetUserContacts } from '../redux/contacts/operations.js';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;