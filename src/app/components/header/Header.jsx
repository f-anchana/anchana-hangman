"use client";
import React from "react";
import "./header.css";

export default function Header() {

    return (
        <header>
        <nav>
            <h1>Hangman</h1>
            <ul>
                <li>
                    <button>Fr</button>
                </li>
                <li>
                    <button>Eng</button>
                </li>
                </ul>
        </nav>
    </header>
    
    );

}

export { Header };