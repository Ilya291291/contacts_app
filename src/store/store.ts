import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contactsSlice"
import { favoritesSlice } from './favorit/favoriteSlice';

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(contactsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch