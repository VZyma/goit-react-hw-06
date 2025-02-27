import { createSlice } from '@reduxjs/toolkit';
import contactData from '../components/contactData.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contactData },
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    resetState(state) {
      state.items = contactData;
    },
  },
});

export const { addContact, deleteContact, resetState } = contactsSlice.actions;

export default contactsSlice.reducer;