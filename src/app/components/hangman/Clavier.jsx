"use client";

import React from "react";
import styles from "./clavier.module.css";
import { useState } from "react";

const Clavier = ({ setIncorrectGuessCount, setbonneLettre }) => {
  const touches = "abcdefghijklmnopqrstuvwxyz".split("");
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleLetterClick = (lettre) => {
    console.log(`Lettre ${lettre} cliquée.`);
    if (localStorage.getItem("word").includes(lettre)) {
      console.log(`La lettre ${lettre} est dans le mot.`);
      setbonneLettre(lettre);
    } else {
      console.log(`La lettre ${lettre} n'est pas dans le mot.`);
    }
    setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, lettre]);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }}>
      {touches.map((lettre) => (
        <button className={`${styles.touche}`} key={lettre} onClick={() => handleLetterClick(lettre)} disabled={disabledButtons.includes(lettre)}>
          {lettre}
        </button>
      ))}
    </div>
  );
};

export { Clavier };
