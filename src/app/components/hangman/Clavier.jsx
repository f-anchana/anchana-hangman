"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./clavier.module.css";
import "../../font.css";

const Clavier = ({ setMauvaisChoix, setbonneLettre }) => {
  const touches = "abcdefghijklmnopqrstuvwxyz".split("");
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [failureModalIsOpen, setFailureModalIsOpen] = useState(false);

  const QuandOnClique = (lettre) => {
    console.log(`Lettre ${lettre} cliquée.`);
    const word = localStorage.getItem("word")
    const variantes = {
      a: ["à", "â", "ä"],
      e: ["é", "è", "ê", "ë"],
      i: ["î", "ï"],
      o: ["ô", "ö"],
      u: ["û", "ü"],
      c: ["ç"],
    };
    let estDansLeMot = false;
  
    // On vérifie si la lettre ou une de ses variantes est dans le mot - ça ne marche pas pour les lettres accentuées, je saurais jamais pourquoi
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
      setMauvaisChoix((prevCount) => prevCount + 1);
      setErrorCount((prevCount) => prevCount + 1);
      if (errorCount === 6) {
        setTimeout(() => {
          setFailureModalIsOpen(true);
        }, 1000);
      }
    }
    setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, lettre]);
  };
  

// Petit délai avant d'afficher le modal de victoire (si on fait des erreurs et qu'on réussit, la modale ne s'affiche pas)
  useEffect(() => {
    if (localStorage.getItem("word").split('').every((char) => disabledButtons.includes(char))) {
      setTimeout(() => {
        setSuccessModalIsOpen(true);
      }, 1000);
    }
  }, [disabledButtons]);


  // Affichage des touches + modals de victoire et défaite
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: ".5rem", paddingTop: "40px" }}>
        {touches.map((lettre) => (
          <button style={{fontFamily: "FinkHeavy"}}
            className={`${styles.touche}`}
            key={lettre}
            onClick={() => QuandOnClique(lettre)}
            disabled={disabledButtons.includes(lettre)}
          >
            {lettre}

          </button>
        ))}
      </div>
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success Modal" ariaHideApp={false}  style={{
          content: {
            width: '60vw',
            height: '60vh',
            gap: '1rem',
            marginTop: '1.5rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }} >
        <h2 style={{fontFamily: "FinkHeavy"}} >Félicitations ! Vous avez trouvé le mot !</h2>
        <p style={{fontFamily: "FinkHeavy"}}>Le mot était : {localStorage.getItem("word")}</p><br></br>
        <img style={{height: "40vh"}} src="/henry_gagnant.gif" alt="" /> <br />
        <button style={{fontFamily: "FinkHeavy", fontSize: "1.3rem", cursor: "pointer", textAlign: "center"}} onClick={() => {setSuccessModalIsOpen(false); window.location.reload();}}>Fermer</button>
      </Modal>

      <Modal
        isOpen={failureModalIsOpen}
        onRequestClose={() => setFailureModalIsOpen(false)}
        contentLabel="Failure Modal" ariaHideApp={false} style={{
          content: {
            width: '60vw',
            height: '60vh',
            gap: '1rem',
            marginTop: '1.5rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}>
        <p style={{fontWeight: 700, fontFamily: "FinkHeavy", fontSize: "1.4rem"}} >Le mot était : {localStorage.getItem("word")}</p>

        <h2 style={{fontFamily: "FinkHeavy"}} >Vous avez perdu, veuillez retenter votre chance !</h2>
        <img style={{alignItems: "center"}} src="/henry-crying.gif" alt="" /><br></br>
        <button style={{fontFamily: "FinkHeavy", fontSize: "1.3rem", cursor: "pointer", textAlign: "center"}} onClick={() => { setFailureModalIsOpen(false); window.location.reload(); }}>Fermer</button>
      </Modal>
    </div>
  );
};

export { Clavier };
