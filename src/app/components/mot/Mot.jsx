"use client";
import React, { useState, useEffect } from 'react';
// import "./mot.css";
import Link from "next/link";

const API = "https://node-hangman-api-production.up.railway.app/";

export const Mot = ({ locale }) => {
    const [word, setWord] = useState(null);

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
            setWord(data.word);
            console.log("Mot renvoyé par l'API :", data.word);
        } catch (error) {
            console.error('Erreur lors de la requête API :', error);
        }
    };

    useEffect(() => {
        fetchWord(); // Appeler fetchWord lorsque la locale change
    }, [locale]);

    return (
        <div className="container">
            {word ? (
                <p>Mot renvoyé par l'API : {word}</p>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default Mot;
