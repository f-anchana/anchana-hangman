"use client";
import React, { useState, useEffect } from 'react';
import "./header.css";

// Header.jsx

export const Header = ({ locale, setLocale }) => {
    return (
        <header>
            <nav>
                <h1>Hangman</h1>
                <ul>
                    <li>
                        <button
                            onClick={() => setLocale('fr-FR')}
                            className={locale === 'fr-FR' ? 'active' : ''}
                        >
                            Fr
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setLocale('en-GB')}
                            className={locale === 'en-GB' ? 'active' : ''}
                        >
                            Eng
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
