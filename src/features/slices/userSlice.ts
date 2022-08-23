import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userFirstName: '',
    userLastName: '',
    isLoggedIn: false,
    token: '',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const userSlice = createSlice({
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

export default userSlice;

export const authenticationActions = userSlice.actions;
