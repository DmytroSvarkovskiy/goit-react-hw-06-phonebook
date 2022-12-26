import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactskSlise';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'contacts',
  storage,
}
const persistedReducer = persistReducer(persistConfig, contactsReduser)


export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
     },middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store);
