import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
    userFirstName: string;
    userLastName: string;
    isLoggedIn: boolean;
    token: string;
}

interface ILoggedInAction {
    body: ILoggedInActionBody;
    message: string;
    status: number;
}
interface ILoggedInActionBody {
    email: string;
    firstName: string;
    lastName: string;
}

interface IEditUserNameAction {
    firstName: string;
    lastName: string;
}

const initialState = {
    userFirstName: '',
    userLastName: '',
    isLoggedIn: false,
    token: '',
};

const userSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        setIsLoggedIn: (
            draft: IUserState,
            action: PayloadAction<ILoggedInAction>
        ) => {
            draft.isLoggedIn = true;
            draft.userFirstName = action.payload.body.firstName;
            draft.userLastName = action.payload.body.lastName;
        },
        setIsLoggedOut: (draft: IUserState) => {
            draft.isLoggedIn = false;
        },
        setToken: (draft: IUserState, action: PayloadAction<string>) => {
            draft.token = action.payload;
        },
        editUserName: (
            draft: IUserState,
            action: PayloadAction<IEditUserNameAction>
        ) => {
            draft.userFirstName = action.payload.firstName;
            draft.userLastName = action.payload.lastName;
        },
    },
});

export default userSlice;

export const authenticationActions = userSlice.actions;
