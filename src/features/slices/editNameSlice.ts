import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    // userFirstName: '',
    // userLastName: '',
    editNameFields: false,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const editNameSlice = createSlice({
    name: 'editName',
    initialState: initialState,
    reducers: {
        showEditNameFields: (draft: any) => {
            draft.editNameFields = true;
        },
        hideEditNameFields: (draft: any) => {
            draft.editNameFields = false;
        },
        // ! Moved to authenticationSlice to get firstName and lastName states
        // editUserName: (draft: any, action: any) => {
        //     draft.userFirstName = action.payload.firstName;
        //     draft.userLastName = action.payload.lastName;
        // },
    },
});
/* eslint-enable @typescript-eslint/no-explicit-any */

export default editNameSlice;

export const editNameActions = editNameSlice.actions;
