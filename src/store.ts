import { createStore } from 'redux';

// Interfaces
import { IUserProfile, IUserName } from './interfaces/apiInterfaces';

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
/* eslint-disable @typescript-eslint/no-unused-vars */
const editUserName = (userName: IUserName) => ({
    type: editUserName,
    payload: userName,
});
const showEditNameFields = () => ({ type: showEditNameFields });
const hideEditNameFields = () => ({ type: hideEditNameFields });

const setToken = (token: string) => ({
    type: setToken,
    payload: token,
});
const fetchWithoutLoggingIn = () => ({ type: fetchWithoutLoggingIn });
const redirectedNotLoggedIn = () => ({ type: redirectedNotLoggedIn });
const setIsLoggedIn = (userProfile: IUserProfile) => ({
    type: setIsLoggedIn,
    payload: userProfile,
});
const setIsLoggedOut = () => ({ type: setIsLoggedOut });
/* eslint-enable @typescript-eslint/no-unused-vars */

// Reducer
/* eslint-disable @typescript-eslint/no-explicit-any */
function reducer(state = initialState, action: any) {
    if (action.type === 'editUserName') {
        return {
            ...state,
            userFirstName: action.payload.firstName,
            userLastName: action.payload.lastName,
        };
    }
    if (action.type === 'showEditNameFields') {
        return {
            ...state,
            editNameFields: true,
        };
    }
    if (action.type === 'hideEditNameFields') {
        return {
            ...state,
            editNameFields: false,
        };
    }

    if (action.type === 'fetchWithoutLoggingIn') {
        return {
            ...state,
            requestedPageWithoutLoggingIn: true,
        };
    }
    if (action.type === 'redirectedNotLoggedIn') {
        return {
            ...state,
            requestedPageWithoutLoggingIn: false,
        };
    }
    if (action.type === 'setIsLoggedIn') {
        return {
            ...state,
            isLoggedIn: true,
            userFirstName: action.payload.body.firstName,
            userLastName: action.payload.body.lastName,
        };
    }
    if (action.type === 'setIsLoggedOut') {
        return {
            ...state,
            isLoggedIn: false,
        };
    }
    if (action.type === 'setToken') {
        return {
            ...state,
            token: action.payload,
        };
    }

    return state;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// Store
export const store = createStore(reducer, initialState);
