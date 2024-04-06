"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./clavier.module.css";
import "../../font.css"; //j'ai pas réussi à exploiter la font téléchargé...

const Clavier = ({ setIncorrectGuessCount, setbonneLettre }) => {
  const touches = "abcdefghijklmnopqrstuvwxyz".split("");
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [failureModalIsOpen, setFailureModalIsOpen] = useState(false);

  const handleLetterClick = (lettre) => {
    console.log(`Lettre ${lettre} cliquée.`);
    const word = localStorage.getItem("word").toLowerCase(); // Convertir le mot en minuscules
    const variantes = {
      a: ["à", "â", "ä"],
      e: ["é", "è", "ê", "ë"],
      i: ["î", "ï"],
      o: ["ô", "ö"],
      u: ["û", "ü"],
      c: ["ç"],
    };
    let estDansLeMot = false;
  
    // Vérifier si la lettre ou une de ses variantes est dans le mot
    if (word.includes(lettre)) {
      estDansLeMot = true;
    } else {
      // Vérifier les variantes de la lettre
      Object.entries(variantes).forEach(([lettreBase, listeVariantes]) => {
        if (listeVariantes.includes(lettre) && word.includes(lettreBase)) {
          estDansLeMot = true;
        }
      });
    }
  
    if (estDansLeMot) {
      console.log(`La lettre ${lettre} est dans le mot.`);
      setbonneLettre(lettre);
    } else {
      console.log(`La lettre ${lettre} n'est pas dans le mot.`);
      setIncorrectGuessCount((prevCount) => prevCount + 1);
      setErrorCount((prevCount) => prevCount + 1);
      if (errorCount === 6) {
        setTimeout(() => {
          setFailureModalIsOpen(true);
        }, 1000);
      }
    }
    setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, lettre]);
  };
  


  useEffect(() => {
    if (localStorage.getItem("word").split('').every((char) => disabledButtons.includes(char))) {
      setTimeout(() => {
        setSuccessModalIsOpen(true);
      }, 1000);
    }
  }, [disabledButtons]);


  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: ".5rem", paddingTop: "40px", fontFamily: "FinkHeavy" }}>
        {touches.map((lettre) => (
          <button
            className={`${styles.touche}`}
            key={lettre}
            onClick={() => handleLetterClick(lettre)}
            disabled={disabledButtons.includes(lettre)}
          >
            {lettre}

          </button>
        ))}
      </div>
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success Modal" ariaHideApp={false} className={"fenetre"} >
        <h2 style={{fontFamily: "FinkHeavy"}} >Félicitations ! Vous avez trouvé le mot !</h2>
        <p>Le mot était : {localStorage.getItem("word")}</p>
        <img src="/henry_gagnant.gif" alt="Henry gagnant" />
        <button onClick={() => {setSuccessModalIsOpen(false); window.location.reload();}}>Fermer</button>
      </Modal>

      <Modal
        isOpen={failureModalIsOpen}
        onRequestClose={() => setFailureModalIsOpen(false)}
        contentLabel="Failure Modal" ariaHideApp={false} className={"fenetre"}>
        <p>Le mot était : {localStorage.getItem("word")}</p>

        <h2>Vous avez perdu, veuillez retenter votre chance !</h2>
        <img src="/henry-crying.gif" alt="Henry perdant" />
        <button onClick={() => { setFailureModalIsOpen(false); window.location.reload(); }}>Fermer</button>
      </Modal>
    </div>
  );
};

export { Clavier };
