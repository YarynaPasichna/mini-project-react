'use client';
import React from 'react';
import MenuComponent from '@/Components/MenuComponent/MenuComponent';
import "./globals.css"
import Head from 'next/head';
type PropType = {
    children: React.ReactNode;
};

const RootLayout: React.FC<PropType> = ({ children }) => {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        </Head>
        <body className="light">
            <MenuComponent />
            {children}
        </body>
        </html>
    );
};

export default RootLayout;








