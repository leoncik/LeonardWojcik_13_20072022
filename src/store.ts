import { configureStore } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

// Initial state (test)
const initialState = {
    userFirstName: '',
    userLastName: '',
    editNameFields: false,
    isLoggedIn: false,
    requestedPageWithoutLoggingIn: false,
    token: '',
};

// Action Creators
const editUserName = createAction('editUserName');
const hideEditNameFields = createAction('hideEditNameFields');
const showEditNameFields = createAction('showEditNameFields');

const setToken = createAction('setToken');

const fetchWithoutLoggingIn = createAction('fetchWithoutLoggingIn');
const redirectedNotLoggedIn = createAction('redirectedNotLoggedIn');

const setIsLoggedIn = createAction('setIsLoggedIn');
const setIsLoggedOut = createAction('setIsLoggedOut');

// Reducer
/* eslint-disable @typescript-eslint/no-explicit-any */
function reducer(state = initialState, action: any) {
    if (action.type === editUserName.toString()) {
        return {
            ...state,
            userFirstName: action.payload.firstName,
            userLastName: action.payload.lastName,
        };
    }
    if (action.type === showEditNameFields.toString()) {
        return {
            ...state,
            editNameFields: true,
        };
    }
    if (action.type === hideEditNameFields.toString()) {
        return {
            ...state,
            editNameFields: false,
        };
    }

    if (action.type === fetchWithoutLoggingIn.toString()) {
        return {
            ...state,
            requestedPageWithoutLoggingIn: true,
        };
    }
    if (action.type === redirectedNotLoggedIn.toString()) {
        return {
            ...state,
            requestedPageWithoutLoggingIn: false,
        };
    }
    if (action.type === setIsLoggedIn.toString()) {
        return {
            ...state,
            isLoggedIn: true,
            userFirstName: action.payload.body.firstName,
            userLastName: action.payload.body.lastName,
        };
    }
    if (action.type === setIsLoggedOut.toString()) {
        return {
            ...state,
            isLoggedIn: false,
        };
    }
    if (action.type === setToken.toString()) {
        return {
            ...state,
            token: action.payload,
        };
    }

    return state;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// Store
export const store = configureStore({
    reducer: reducer,
});
