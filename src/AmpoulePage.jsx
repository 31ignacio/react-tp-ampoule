import React, { useState } from "react";
import Ampoule from "../components/Ampoule";

export default function ParentComponent() {

  // Etat qui permet de verifier si tout les ampoules son allumés, eteint par defaut
  const [allAmpouleOn, setAllAmpouleOn] = useState(false);
  //gestionnaire d'etat pour chaque ampoule de la maison (les ampoules sont allumés par defaut)
  const [ampoulesState, setAmpoulesState] = useState([true, true, true]);

  //la fonction qui permet d'allumer ou d'eteindre toute les ampoules
  const toggleAllAmpoules = () => {
    //fera le contraire du useState 'allAmpouleOn'
    setAllAmpouleOn(!allAmpouleOn);
    //parcourir tout les ampoules pour les mettre au meme niveau (il n'aura pas 1 allumé et l'autre eteint)
    const newAmpoulesState = ampoulesState.map(() => allAmpouleOn);
    setAmpoulesState(newAmpoulesState);
  };

  //la fonction qui permet d'allumer ou d'eteindre une ampoule
  //pour mettre a jour une ampoule on s'est basé sur son index (un peu comme son id)
  const toggleAmpoule = (index) => {
    const newAmpoulesState = [...ampoulesState]; //etat de toutes les ampoules existant
    newAmpoulesState[index] = !newAmpoulesState[index]; //l'etat actuel change (allumé passe a eteint)
    setAmpoulesState(newAmpoulesState); //la mise a jour
  };

  return (
    <>
      <div className="ampoule_container">
        {/* mode={ampoulesState[0]} ===> pour recuperer l'etat de chaque ampoule */}
        {/*  toggleAmpoule={() => toggleAmpoule(0)} ===>  permet d'allumer sa propre ampoule ou l'eteindre */}
        <Ampoule
          mode={ampoulesState[0]}
          toggleAmpoule={() => toggleAmpoule(0)}
        />
        <Ampoule
          mode={ampoulesState[1]}
          toggleAmpoule={() => toggleAmpoule(1)}
        />
        <Ampoule
          mode={ampoulesState[2]}
          toggleAmpoule={() => toggleAmpoule(2)}
        />
      </div>

      <div className="main_button_container">
        {/* le bouton pour allumer ou eteindre toute les ampoules, le css pour la couleur, le 'onclick' qui appel la fonction en haut */}
        <button
          onClick={toggleAllAmpoules}
          className="main_button"
          style={{
            backgroundColor: !allAmpouleOn ? "green" : "red",
          }}
        >
          {/* ceci est une condition */}
          {/* lorsque les ampoules sont allumé du met 'eteint toutes les ampoules' sinon le contraire */}
          {!allAmpouleOn
            ? "Éteindre toutes les ampoules"
            : "Allumer toutes les ampoules"}
        </button>
      </div>
    </>
  );
}
