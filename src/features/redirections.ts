import { createAction, createReducer } from '@reduxjs/toolkit';
const initialState = {
    userFirstName: '',
    userLastName: '',
    editNameFields: false,
    isLoggedIn: false,
    requestedPageWithoutLoggingIn: false,
    token: '',
};

// Action Creators
const fetchWithoutLoggingIn = createAction('fetchWithoutLoggingIn');
const redirectedNotLoggedIn = createAction('redirectedNotLoggedIn');

// Reducer
export const redirectionReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(fetchWithoutLoggingIn, (draft) => {
            draft.requestedPageWithoutLoggingIn = true;
            return;
        })
        .addCase(redirectedNotLoggedIn, (draft) => {
            draft.requestedPageWithoutLoggingIn = false;
            return;
        })
);
