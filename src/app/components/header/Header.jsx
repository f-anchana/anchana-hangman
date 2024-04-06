"use client";
import React, { useState, useEffect } from 'react';
import "./header.css";

// Header.jsx

export const Header = ({ locale, setLocale }) => {
    
  const TitreBilingue = () => {
    if (locale === 'fr-FR') {
      return "Bienvenue sur le jeu du Pendu";
    } else {
      return "Welcome to the Hangman Game";
    }
  };

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
            <h1 style={{textAlign: "center"}} >{TitreBilingue()}</h1>

        </header>
    );
};

export default Header;
