// Vitest
import { describe, it, expect } from 'vitest';

// Redux
import userSlice from '../features/slices/userSlice';

describe('Testing authentication reducer', () => {
    it('should return the initial state when state is undefined.', () => {
        expect(userSlice.reducer(undefined, { type: '@INIT' })).toEqual(
            userSlice.getInitialState()
        );
    });
});
