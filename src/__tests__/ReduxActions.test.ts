// Vitest
import { describe, it, expect } from 'vitest';

// Redux
import editNameSlice, {
    editNameActions,
} from '../features/slices/editNameSlice';

describe('Testing edit name fields actions', () => {
    it('should set visibility of name fields to true when action is called.', () => {
        expect(
            editNameSlice.reducer(
                undefined,
                editNameActions.showEditNameFields()
            )
        ).toEqual({ ...editNameSlice.getInitialState(), editNameFields: true });
    });
});
