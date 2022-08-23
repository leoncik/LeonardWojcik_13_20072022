import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/slices/userSlice';
import editNameSlice from './features/slices/editNameSlice';
import redirectionSlice from './features/slices/redirectionsSlice';

export const store = configureStore({
    reducer: {
        authentication: userSlice.reducer,
        redirection: redirectionSlice.reducer,
        editName: editNameSlice.reducer,
    },
});
