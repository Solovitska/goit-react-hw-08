import { createSelector } from '@reduxjs/toolkit';
import { selectPhonebookContacts } from '../contacts/selectors.js';

const selectContactsFilter = state => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectContactsFilter],
  (contacts, filter) => {
    if (contacts === null) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);