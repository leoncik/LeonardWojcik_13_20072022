import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// Reducers (for refactored version)
// import { authenticationReducer } from './features/authentication';
// import { editNameReducer } from './features/editName';
// import { redirectionReducer } from './features/redirections';

// Initial state
export const initialState = {
    userFirstName: '',
    userLastName: '',
    editNameFields: false,
    isLoggedIn: false,
    requestedPageWithoutLoggingIn: false,
    token: '',
};

// ACTION CREATORS

// Authentication
const setToken = createAction('setToken');
const fetchWithoutLoggingIn = createAction('fetchWithoutLoggingIn');
const redirectedNotLoggedIn = createAction('redirectedNotLoggedIn');

// Login
const editUserName = createAction('editUserName');
export const hideEditNameFields = createAction('hideEditNameFields');
export const showEditNameFields = createAction('showEditNameFields');

// Redirection
const setIsLoggedIn = createAction('setIsLoggedIn');
const setIsLoggedOut = createAction('setIsLoggedOut');

// REDUCER
/* eslint-disable @typescript-eslint/no-explicit-any */
export const reducer = createReducer(initialState, (builder) =>
    builder
        .addCase(editUserName, (draft, action: any) => {
            draft.userFirstName = action.payload.firstName;
            draft.userLastName = action.payload.lastName;
            return;
        })
        .addCase(showEditNameFields, (draft) => {
            draft.editNameFields = true;
            return;
        })
        .addCase(hideEditNameFields, (draft) => {
            draft.editNameFields = false;
            return;
        })
        .addCase(fetchWithoutLoggingIn, (draft) => {
            draft.requestedPageWithoutLoggingIn = true;
            return;
        })
        .addCase(redirectedNotLoggedIn, (draft) => {
            draft.requestedPageWithoutLoggingIn = false;
            return;
        })
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

// STORE
export const store = configureStore({
    reducer: reducer,
});

// Store (refactored version test)
// export const store = configureStore({
//     reducer: {
//         authentication: authenticationReducer,
//         redirection: redirectionReducer,
//         editName: editNameReducer
//     }
// });
