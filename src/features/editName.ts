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
export const editUserName = createAction('editUserName');
export const hideEditNameFields = createAction('hideEditNameFields');
export const showEditNameFields = createAction('showEditNameFields');

// Test
// const initialNameState = {
//     userFirstName: '',
//     userLastName: '',
//     editNameFields: false,
// };

// Reducer
/* eslint-disable @typescript-eslint/no-explicit-any */
export const editNameReducer = createReducer(initialState, (builder) =>
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
);
/* eslint-enable @typescript-eslint/no-explicit-any */
