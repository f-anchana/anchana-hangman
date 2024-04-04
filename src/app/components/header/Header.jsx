"use client";
import React from "react";

export default function Header() {

    return (
        <header>
        <h1>Hangman</h1>

        <nav>
            <li>
                <button>Fr</button>
            </li>
            <li>
                <button>Eng</button>
            </li>
        </nav>
        </header>
    );

}

export { Header };