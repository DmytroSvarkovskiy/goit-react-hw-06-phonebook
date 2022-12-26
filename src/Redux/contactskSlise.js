import { createSlice } from '@reduxjs/toolkit'

export const contactskSlise = createSlice({
  name: 'contacts',
  initialState: 
      []
  ,
  reducers: {
    addContact: (state,action) => {
          state.contacts.unshift(action.payload);
    },
    removeContact: (state,action ) => {
      state.contacts.splice(action.payload, 1)
    },
  },
})
export const { addContact, removeContact } = contactskSlise.actions;
export const contactsReduser = contactskSlise.reducer;
