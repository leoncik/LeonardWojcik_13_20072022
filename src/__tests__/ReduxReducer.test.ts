import { reducer, initialState, showEditNameFields } from '../store';
import { describe, it, expect } from 'vitest';

describe('Testing main reducer', () => {
    it('should return the initial state when state is undefined.', () => {
        expect(reducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should set visibility of name fields to true when action is called', () => {
        expect(reducer(undefined, showEditNameFields())).toEqual({
            ...initialState,
            editNameFields: true,
        });
    });
});
