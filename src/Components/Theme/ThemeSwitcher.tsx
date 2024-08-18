'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { switchTheme } from './themeSlice';
import { useAppSelector } from './store';
import './switcher.css';

const ThemeSwitcher: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useAppSelector((state) => state.theme.theme);

    // Toggle theme handler
    const handleToggle = () => {
        dispatch(switchTheme());
        document.body.className = theme === 'light' ? 'dark' : 'light';
    };

    return (
        <div className="theme-switcher-container" onClick={handleToggle}>
            <button
                className={`theme-switcher-button ${theme === 'dark' ? 'dark-mode' : 'light-mode'} ${theme === 'dark' ? 'active' : ''}`}
            >
                <div className={`theme-switcher-icon ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}></div>
                Change to {theme === 'light' ? 'Dark' : 'Light'} theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;


