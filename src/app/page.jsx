"use client";
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { Header } from "./components/header/Header";
import { Mot } from "./components/mot/Mot";
import { Footer } from "./components/footer/Footer";
import { DessinHangman } from "./components/hangman/DessinHangman";
import { Clavier } from "./components/hangman/Clavier";

// import Modal from 'react-modal';


export default function Home() {
  // Modal.setAppElement('#root'); //la console m'a dit de faire ça mais ça ne marche plus, je ne sais pas pourquoi, pourtant l'id root est bien présent juste en dessous. j'ai dû ajouté ariaHideApp={false} dans les modals pour que ça marche même si ce n'était pas recommandé

  const [locale, setLocale] = useState('fr-FR');
  const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
  const [bonneLettre, setbonneLettre] = useState();

  console.log(incorrectGuessCount);
  console.log('lettre passé:' + bonneLettre)

  return (
    <main className={styles.main} id="root">
      <Header locale={locale} setLocale={setLocale} />
      <DessinHangman incorrectGuessCount={incorrectGuessCount} />
      <Mot locale={locale} bonneLettre={bonneLettre} />
      <div style={{ alignSelf: "stretch" }}>
        <Clavier setIncorrectGuessCount={setIncorrectGuessCount} setbonneLettre={setbonneLettre} />
      </div>
      <Footer />
    </main>
  );
}
