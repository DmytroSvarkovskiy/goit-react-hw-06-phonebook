import { createSlice } from '@reduxjs/toolkit'

export const contactskSlise = createSlice({
  name: 'contacts',
  initialState: 
      []
  ,
  reducers: {
    addContact: (state, action) => {
      state.unshift(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
    },
  },
})
export const { addContact, removeContact } = contactskSlise.actions;
export const contactsReduser = contactskSlise.reducer;
