"use client";
import React, { useState, useEffect } from 'react';

const API = "https://node-hangman-api-production.up.railway.app/";

export const Mot = ({ locale, bonneLettre }) => {
    const [word, setWord] = useState(null);
    const [correctLetters, setCorrectLetters] = useState([]);

    const fetchWord = async () => {
        try {
            const requestBody = new URLSearchParams();
            requestBody.append("locale", locale);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: requestBody.toString()
            };

            const res = await fetch(API, requestOptions);
            const data = await res.json();
            localStorage.setItem("word", data.word);
            setWord(data.word);
            console.log("Mot renvoyé par l'API :", data.word);
        } catch (error) {
            console.error('Erreur lors de la requête API :', error);
        }
    };

    useEffect(() => {
        fetchWord();
    }, [locale]);

    useEffect(() => {
        if (bonneLettre) {
            setCorrectLetters((prevCorrectLetters) => [...prevCorrectLetters, bonneLettre]);
        }
    }, [bonneLettre]);

    const renderLetters = () => {
        if (!word) return null;
        return word.split('').map((letter, index) => {
            let visibleLetter = letter;
            if (/[a-zA-Zàâäéèêëîïôöûüç]/i.test(letter)) {
                if (correctLetters.includes(letter)) {
                    visibleLetter = letter;
                } else {
                    visibleLetter = <span style={{ visibility: "hidden", fontSize: "2rem"}}>{letter}</span>;
                }
            }
            return (
                <span key={index} style={{ borderBottom: "2px solid black", marginRight: "10px", paddingBottom: "10px", fontSize: "2rem", fontFamily: "FinkHeavy", fontWeight: 500 }}>
                    {visibleLetter}
                </span>
            );
        });
    };

    console.log("Mot actuel :", word);
    console.log("Lettres correctes :", correctLetters);

    return (
        <div className="container">
            {/* <p>Mot renvoyé par l'API : {word}</p> */}
            {/* c'était pour tester quel mot avait été renvoyé au début */}

            {word ? (
                <div>
                    {renderLetters()}
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};
