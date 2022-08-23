// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Slices
import userSlice from './features/slices/userSlice';
import editNameSlice from './features/slices/editNameSlice';
import redirectionSlice from './features/slices/redirectionsSlice';

// Interfaces
import { IUserState } from './features/slices/userSlice';
import { IRedirectionState } from './features/slices/redirectionsSlice';
import { IEditNameState } from './features/slices/editNameSlice';

export interface IRootState {
    authentication: IUserState;
    redirection: IRedirectionState;
    editName: IEditNameState;
}

export const store = configureStore({
    reducer: {
        authentication: userSlice.reducer,
        redirection: redirectionSlice.reducer,
        editName: editNameSlice.reducer,
    },
});
