import "../Styles/Game.css";
import CharSelect from "./Char-Select";
import React, {useState} from "react";

const Game = () => {
    const [remainingChar, setRemainingChar] = useState(["Finn", "Jake", "Marceline"]);
    const [currentCoord, setCurrentCoord] = useState();
  // Height and width needs to be static
  return (
    <div>
      <CharSelect currentCoord={currentCoord}/>
      <div
        class="game"
        onClick={(e) => {
          setCurrentCoord(e.clientX + " " + e.clientY);
        }}
      ></div>
    </div>
  );
};

export default Game;
