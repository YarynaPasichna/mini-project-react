'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Correct import path for the store

export const ReduxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};


