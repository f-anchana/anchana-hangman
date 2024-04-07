"use client";
import React, { useState, useEffect } from 'react';

const API = "https://node-hangman-api-production.up.railway.app/";

// Composant Mot qui affiche les lettres du mot à deviner
export const Mot = ({ locale, LabonneLettre }) => {
    const [word, setWord] = useState(null);
    const [correctLetters, setCorrectLetters] = useState([]);

    // Fonction pour récupérer un mot aléatoire en fonction de la langue choisie
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

    // Appel de la fonction fetchWord lors du changement de la locale
    useEffect(() => {
        fetchWord();
    }, [locale]);

    // Effet déclenché lorsque LabonneLettre change
    useEffect(() => {
        // Si une lettre correcte est trouvée
        if (LabonneLettre) {
            // Mise à jour des lettres correctes
            setCorrectLetters((prevCorrectLetters) => [...prevCorrectLetters, LabonneLettre]);
        }
    }, [LabonneLettre]);


    // Fonction pour afficher les lettres du mot à deviner
    const renderLetters = () => {
        if (!word) return null;
        return word.split('').map((letter, index) => {
            let visibleLetter = letter;
            // Gestion des lettres accentuées
            if (/[a-zA-Zàâäéèêëîïôöûüç]/i.test(letter)) {
                if (correctLetters.includes(letter)) {
                    visibleLetter = letter;
                } else {
                    visibleLetter = <span style={{ visibility: "hidden", fontSize: "2rem"}}>{letter}</span>;
                }
            }
            // Affichage de la lettre
            return (
                <span key={index} style={{ borderBottom: "2px solid black", marginRight: "10px", paddingBottom: "10px", fontSize: "2rem", fontFamily: "FinkHeavy", fontWeight: 500 }}>
                    {visibleLetter}
                </span>
            );
        });
    };

    // Affichage du composant Mot
    return (
        <div className="container">
            <p>Mot renvoyé par l'API : {word}</p>
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
