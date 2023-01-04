import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deliteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    filterContacts(state, action) {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});
// .toLowerCase()
const getInputValueSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, deliteContact, filterContacts } =
  counterSlice.actions;
export const { getValue } = getInputValueSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: counterSlice.reducer,
    filter: getInputValueSlice.reducer,
  },
});
