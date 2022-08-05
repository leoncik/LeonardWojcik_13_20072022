import { createStore } from 'redux';

// Initial state (test)
const initialState = {
    name: 'Schopenhauer',
    editNameFields: false,
    isLoggedIn: false,
};

// Action Creators
/* eslint-disable @typescript-eslint/no-unused-vars */
const editUserName = () => ({ type: editUserName });
const showEditNameFields = () => ({ type: showEditNameFields });
const hideEditNameFields = () => ({ type: hideEditNameFields });
const setIsLoggedIn = (username: string) => ({
    type: setIsLoggedIn,
    payload: username,
});
const setIsLoggedOut = () => ({ type: setIsLoggedOut });
/* eslint-enable @typescript-eslint/no-unused-vars */

// Reducer
/* eslint-disable @typescript-eslint/no-explicit-any */
function reducer(state = initialState, action: any) {
    if (action.type === 'editUserName') {
        return {
            ...state,
            name: 'Kant',
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
    if (action.type === 'setIsLoggedIn') {
        return {
            ...state,
            isLoggedIn: true,
            name: action.payload,
        };
    }
    if (action.type === 'setIsLoggedOut') {
        return {
            ...state,
            isLoggedIn: false,
        };
    }

    return state;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// Store
export const store = createStore(reducer, initialState);
