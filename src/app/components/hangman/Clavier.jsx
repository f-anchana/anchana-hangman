"use client";

import React from "react";
import styles from "./clavier.module.css";

const Clavier = ({ onClick }) => {
  const touches = "abcdefghijklmnopqrstuvwxyz".split("");
  
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem"}}>
      {touches.map((lettre) => (
        <button className={`${styles.touche}`} key={lettre} onClick={() => onClick(lettre)}>
          {lettre}
        </button>
      ))}
    </div>
  );
};


export { Clavier };