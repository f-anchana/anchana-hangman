import React from "react";

const Tete = (
        <div style={{height: "50px", width:"50px", borderRadius: "100%", border: "5px solid blue", position: "absolute", top: "50px", right: "-20px"}} ></div>
)

const Corps = (
        <div style={{height: "100px", width:"10px", background: "pink", position: "absolute", top: "100px", right: 0}} ></div>
)

const BrasDroit = (
        <div style={{height: "10px", width:"100px", background: "pink", position: "absolute", top: "120px", right: "-100px", rotate: "-30deg", transformOrigin: "left bottom"}} ></div>
)

const BrasGauche = (
        <div style={{height: "10px", width:"100px", background: "pink", position: "absolute", top: "120px", right: "10px", rotate: "30deg", transformOrigin: "right bottom"}} ></div>
)

const JambeGauche = (
        <div style={{height: "10px", width:"100px", background: "pink", position: "absolute", top: "190px", right: "-90px", rotate: "60deg", transformOrigin: "left bottom"}} ></div>
)
const JambeDroite = (
        <div style={{height: "10px", width:"100px", background: "pink", position: "absolute", top: "190px", right: 0, rotate: "-60deg", transformOrigin: "right bottom"}} ></div>
)

export function DessinHangman() {

    return (
        <div style={{position: "relative"}} >
            { Tete }
            { Corps }
            { BrasDroit }
            { BrasGauche }
            { JambeGauche }
            { JambeDroite }
            <div style={{height: "50px", width:"10px", background: "pink", position: "absolute", top: 0, right: 0}} ></div>
            <div style={{height: "10px", width:"200px", background: "purple", marginLeft: "120px"}} ></div>
            <div style={{height: "400px", width:"10px", background: "purple", marginLeft: "120px"}} ></div>
            <div style={{height: "10px", width: "250px", background: "pink"}} >            </div>
        </div>
    )


}