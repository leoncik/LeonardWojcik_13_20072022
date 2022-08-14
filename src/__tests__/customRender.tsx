import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authenticationSlice from '../features/slices/authenticationSlice';
import editNameSlice from '../features/slices/editNameSlice';
import redirectionSlice from '../features/slices/redirectionsSlice';

// Libraries
import { HelmetProvider } from 'react-helmet-async';

/**
 * A custom render function
 * @param ui
 */
export function render(ui: React.ReactElement) {
    const store = configureStore({
        reducer: {
            authentication: authenticationSlice.reducer,
            redirection: redirectionSlice.reducer,
            editName: editNameSlice.reducer,
        },
    });

    function Wrapper({ children }: PropsWithChildren<unknown>) {
        return (
            <MemoryRouter>
                <Provider store={store}>
                    <HelmetProvider>{children}</HelmetProvider>
                </Provider>
            </MemoryRouter>
        );
    }
    rtlRender(ui, { wrapper: Wrapper });
}
