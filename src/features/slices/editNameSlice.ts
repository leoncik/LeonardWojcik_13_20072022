import { createSlice } from '@reduxjs/toolkit';

export interface IEditNameState {
    editNameFields: boolean;
}

export const initialState = {
    editNameFields: false,
};

const editNameSlice = createSlice({
    name: 'editName',
    initialState: initialState,
    reducers: {
        showEditNameFields: (draft: IEditNameState) => {
            draft.editNameFields = true;
        },
        hideEditNameFields: (draft: IEditNameState) => {
            draft.editNameFields = false;
        },
    },
});

export default editNameSlice;

export const editNameActions = editNameSlice.actions;
