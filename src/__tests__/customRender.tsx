import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from '../store';
import { HelmetProvider } from 'react-helmet-async';

/**
 * A custom function
 * @param ui
 */
export function render(ui: React.ReactElement) {
    const store = configureStore({
        reducer: reducer,
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