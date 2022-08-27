// Vitest
import { describe, it, expect } from 'vitest';

// Redux
import userSlice from '../features/slices/userSlice';
import redirectionSlice from '../features/slices/redirectionsSlice';
import editNameSlice from '../features/slices/editNameSlice';

describe('Testing authentication reducer', () => {
    it('should return the initial state when state is undefined.', () => {
        expect(userSlice.reducer(undefined, { type: '@INIT' })).toEqual(
            userSlice.getInitialState()
        );
    });
});

describe('Testing redirection reducer', () => {
    it('should return the initial state when state is undefined.', () => {
        expect(redirectionSlice.reducer(undefined, { type: '@INIT' })).toEqual(
            redirectionSlice.getInitialState()
        );
    });
});

describe('Testing edit name reducer', () => {
    it('should return the initial state when state is undefined.', () => {
        expect(editNameSlice.reducer(undefined, { type: '@INIT' })).toEqual(
            editNameSlice.getInitialState()
        );
    });
});
