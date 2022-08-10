import { Provider } from 'react-redux';
import { store } from './store';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
