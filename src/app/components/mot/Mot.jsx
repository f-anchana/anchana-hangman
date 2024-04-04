"use client";
import { useEffect, useState } from "react";
// import "./mot.css";
import Link from "next/link";
import Locale from "../../types.ts";

const API = "https://node-hangman-api-production.up.railway.app/";

export const Mot = () => {
    const [word, setWord] = useState(null);

    const Envoiedemande = async () => {
        try {
            const requestBody = {
                // Ajoute les paramètres de la requête POST ici
                locale: "fr-FR",
                // Locale : "en-GB",
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            };

            const res = await fetch(API, requestOptions);
            const data = await res.json();
            setWord(data.word); // Accéder directement à la propriété 'word'
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    };

    // Appelle la fonction sendRequest lorsque le composant est monté
    useEffect(() => {
        Envoiedemande();
    }, []);

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