// Vitest
import { describe, it, expect } from 'vitest';

// Redux
import authenticationSlice from '../features/slices/authenticationSlice';

describe('Testing authentication reducer', () => {
    it('should return the initial state when state is undefined.', () => {
        expect(
            authenticationSlice.reducer(undefined, { type: '@INIT' })
        ).toEqual(authenticationSlice.getInitialState());
    });
});
