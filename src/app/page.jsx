"use client";
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { Header } from "./components/header/Header";
import { Mot } from "./components/mot/Mot";
import { Footer } from "./components/footer/Footer";
import { DessinHangman } from "./components/hangman/DessinHangman";
import { Clavier } from "./components/hangman/Clavier";

export default function Home() {

  const [locale, setLocale] = useState('fr-FR');

  return (
    <main className={styles.main}>

      <Header locale={locale} setLocale={setLocale} />
            
      <DessinHangman />
            <Mot locale={locale} />
      <div style={{alignSelf: "stretch"}}>
      <Clavier />
      </div>
      <Footer />
    </main>
  );
}
