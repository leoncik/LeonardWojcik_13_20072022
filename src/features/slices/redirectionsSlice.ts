import { createSlice } from '@reduxjs/toolkit';

export interface IRedirectionState {
    requestedPageWithoutLoggingIn: boolean;
}

const initialState = {
    requestedPageWithoutLoggingIn: false,
};

const redirectionSlice = createSlice({
    name: 'redirection',
    initialState: initialState,
    reducers: {
        fetchWithoutLoggingIn: (draft: IRedirectionState) => {
            draft.requestedPageWithoutLoggingIn = true;
        },
        redirectedNotLoggedIn: (draft: IRedirectionState) => {
            draft.requestedPageWithoutLoggingIn = false;
        },
    },
});

export default redirectionSlice;

export const redirectionActions = redirectionSlice.actions;
