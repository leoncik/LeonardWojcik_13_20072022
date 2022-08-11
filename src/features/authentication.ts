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
const setToken = createAction('setToken');
const setIsLoggedIn = createAction('setIsLoggedIn');
const setIsLoggedOut = createAction('setIsLoggedOut');

// Reducer
/* eslint-disable @typescript-eslint/no-explicit-any */
export const authenticationReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(setIsLoggedIn, (draft, action: any) => {
            draft.isLoggedIn = true;
            draft.userFirstName = action.payload.body.firstName;
            draft.userLastName = action.payload.body.lastName;
            return;
        })
        .addCase(setIsLoggedOut, (draft) => {
            draft.isLoggedIn = false;
            return;
        })
        .addCase(setToken, (draft, action: any) => {
            draft.token = action.payload;
            return;
        })
);
/* eslint-enable @typescript-eslint/no-explicit-any */
