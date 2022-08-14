import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    requestedPageWithoutLoggingIn: false,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const redirectionSlice = createSlice({
    name: 'redirection',
    initialState: initialState,
    reducers: {
        fetchWithoutLoggingIn: (draft: any) => {
            draft.requestedPageWithoutLoggingIn = true;
        },
        redirectedNotLoggedIn: (draft: any) => {
            draft.requestedPageWithoutLoggingIn = false;
        },
    },
});
/* eslint-enable @typescript-eslint/no-explicit-any */

export default redirectionSlice;

export const redirectionActions = redirectionSlice.actions;
