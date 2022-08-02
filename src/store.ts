import { createStore } from 'redux';

// Initial state (test)
const initialState = {
    name: 'Schopenhauer',
};

// Action Creators
/* eslint-disable @typescript-eslint/no-unused-vars */
const editUserName = () => ({ type: editUserName });
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

    return state;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// Store
export const store = createStore(reducer, initialState);
