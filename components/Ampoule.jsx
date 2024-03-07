 import React from "react";
import "./Ampoule.css";
export default function Ampoule({ mode, toggleAmpoule }) {
  // le mode en parametre c'est pour connaitre l'etat de l'ampoule. Il vient du composant <AmpoulePage/>
  //toggleAmpoulepour mettre d'allumer ou deteindre sa propre ampoule
  return (
    <div className="single_ampoule_container">
      {/* Les deux div c'est des conditions sur le 'mode' qui a recu en parametre */}
      <div className={`ampoule_item ${mode ? "light" : "dark"}`}></div>
      <div> Etat:{mode ? "Allumé" : "Eteint"}</div>

      <button
        onClick={toggleAmpoule}
        style={{
          backgroundColor: !mode ? "green" : "#ccc",
        }}
      >
        {mode ? "Éteindre" : "Allumer"} cette ampoule
      </button>
    </div>
  );
}
