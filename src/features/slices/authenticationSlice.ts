import { createSlice } from '@reduxjs/toolkit';

// ! Old

// Action Creators
// const setToken = createAction('setToken');
// const setIsLoggedIn = createAction('setIsLoggedIn');
// const setIsLoggedOut = createAction('setIsLoggedOut');

// Reducer
// const authenticationReducer = createReducer(initialState, (builder) =>
//     builder
//         .addCase(setIsLoggedIn, (draft, action: any) => {
//             draft.isLoggedIn = true;
//             draft.userFirstName = action.payload.body.firstName;
//             draft.userLastName = action.payload.body.lastName;
//             return;
//         })
//         .addCase(setIsLoggedOut, (draft) => {
//             draft.isLoggedIn = false;
//             return;
//         })
//         .addCase(setToken, (draft, action: any) => {
//             draft.token = action.payload;
//             return;
//         })
// );

// ! New
const initialState = {
    userFirstName: '',
    userLastName: '',
    isLoggedIn: false,
    token: '',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        setIsLoggedIn: (draft: any, action: any) => {
            draft.isLoggedIn = true;
            draft.userFirstName = action.payload.body.firstName;
            draft.userLastName = action.payload.body.lastName;
        },
        setIsLoggedOut: (draft: any) => {
            draft.isLoggedIn = false;
        },
        setToken: (draft: any, action: any) => {
            draft.token = action.payload;
        },
        editUserName: (draft: any, action: any) => {
            draft.userFirstName = action.payload.firstName;
            draft.userLastName = action.payload.lastName;
        },
    },
});
/* eslint-enable @typescript-eslint/no-explicit-any */

export default authenticationSlice;

export const authenticationActions = authenticationSlice.actions;
