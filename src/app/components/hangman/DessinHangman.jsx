"use client";

import React from "react";

//  ma partie préférée, le dessin ! On affiche les différentes étapes du pendu en fonction du nombre de lettres incorrectes (7 essais max), j'ai repris le personnage de 'Henry the Stickmin'

const Corde = <img src="/etape2.png" alt="" />;
const Tete = <img src="/etape3.png" alt="" />;
const Corps = <img src="/etape4.png" alt="" />;
const BrasDroit = <img src="/etape5.png" alt="" />;
const BrasGauche = <img src="/etape6.png" alt="" />;
const JambeGauche = <img src="/etape7.png" alt="" />;
const JambeDroite = <img src="/final.png" alt="" />;

export function DessinHangman({ MauvaisChoix }) {
  const partsToShow = Math.min(MauvaisChoix, 7);

  return (
    <div style={{ position: "relative" }}>
      <img src="/base.png" alt="" />
      {partsToShow >= 1 && <div style={{ position: "absolute", top: 0, left: 0 }}>{Corde}</div>}
      {partsToShow >= 2 && <div style={{ position: "absolute", top: 0, left: 0 }}>{Tete}</div>}
      {partsToShow >= 3 && <div style={{ position: "absolute", top: 0, left: 0 }}>{Corps}</div>}
      {partsToShow >= 4 && <div style={{ position: "absolute", top: 0, left: 0 }}>{BrasDroit}</div>}
      {partsToShow >= 5 && <div style={{ position: "absolute", top: 0, left: 0 }}>{BrasGauche}</div>}
      {partsToShow >= 6 && <div style={{ position: "absolute", top: 0, left: 0 }}>{JambeGauche}</div>}
      {partsToShow >= 7 && <div style={{ position: "absolute", top: 0, left: 0 }}>{JambeDroite}</div>}
    </div>
  );
}
