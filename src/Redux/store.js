import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactskSlise';
import { filterReducer } from './filterBookSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        filter: filterReducer,
     },
})