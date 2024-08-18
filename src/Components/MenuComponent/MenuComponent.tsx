'use client';

import React from 'react';
import Link from 'next/link';
import './menu.css';
import {ReduxProvider} from "@/Components/Theme/ReduxProvider";
import ThemeSwitcher from "@/Components/Theme/ThemeSwitcher";



const MenuComponent: React.FC = () => {
    return (
        <div className="menu">
            <nav>
                <Link href={'/'}>Movies</Link>
                <Link href={'/genres'}>Genres</Link>
                <div className="theme-switcher-container">
                        <ReduxProvider>
                            <ThemeSwitcher/>
                        </ReduxProvider>
                    </div>
                <div className='user-img'>
                <img src='https://img.icons8.com/?size=100&id=85832&format=png&color=000000'/>
                </div>
            </nav>
        </div>
);
};

export default MenuComponent;
