import React, { useState } from "react";
import Ampoule from "../components/Ampoule";

export default function ParentComponent() {
  const [allAmpouleOn, setAllAmpouleOn] = useState(false);
  const [ampoulesState, setAmpoulesState] = useState([true, true, true]);

  const toggleAllAmpoules = () => {
    setAllAmpouleOn(!allAmpouleOn);
    const newAmpoulesState = ampoulesState.map(() => allAmpouleOn);
    setAmpoulesState(newAmpoulesState);
  };

  const toggleAmpoule = (index) => {
    const newAmpoulesState = [...ampoulesState];
    newAmpoulesState[index] = !newAmpoulesState[index];
    setAmpoulesState(newAmpoulesState);
  };

  return (
    <>
      <div className="ampoule_container">
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
        <button
          onClick={toggleAllAmpoules}
          className="main_button"
          style={{
            backgroundColor: !allAmpouleOn ? "green" : "red",
          }}
        >
          {!allAmpouleOn
            ? "Éteindre toutes les ampoules"
            : "Allumer toutes les ampoules"}
        </button>
      </div>
    </>
  );
}
