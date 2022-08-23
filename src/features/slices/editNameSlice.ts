import { createSlice } from '@reduxjs/toolkit';

export interface IEditNameState {
    editNameFields: boolean;
}

export const initialState = {
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
    },
});
/* eslint-enable @typescript-eslint/no-explicit-any */

export default editNameSlice;

export const editNameActions = editNameSlice.actions;
