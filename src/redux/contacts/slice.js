import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  apiAddUserContact,
  apiDeleteUserContact,
  apiGetUserContacts,
} from './operations.js';
import { apiLogoutUser } from '../auth/operations.js';

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiGetUserContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(apiDeleteUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(apiLogoutUser.fulfilled, state => {
        state.contacts = [];
      })

      .addMatcher(
        isAnyOf(
          apiGetUserContacts.pending,
          apiAddUserContact.pending,
          apiDeleteUserContact.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetUserContacts.rejected,
          apiAddUserContact.rejected,
          apiDeleteUserContact.rejected
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const phonebookReducer = phonebookSlice.reducer;