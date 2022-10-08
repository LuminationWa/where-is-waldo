import "../Styles/Game.css";
import CharSelect from "./Char-Select";
import React, { useState } from "react";
import Counter from "./Counter";

const Game = () => {
  const [remainingChar, setRemainingChar] = useState([
    "finn",
    "jake",
    "marceline",
  ]);
  // Height and width need to be static
  const [currentCoord, setCurrentCoord] = useState();

  const placeTBox = (x, y) => {
    // Places target box on cursor position
    let targetBox = document.querySelector(".target-box");
    targetBox.style.left = `${x - 30}px`;
    targetBox.style.top = `${y - 30}px`;
  };
  return (
    <div>
      <Counter remainingChar={remainingChar}/>
      <CharSelect currentCoord={currentCoord} setRemainingChar={setRemainingChar} remainingChar={remainingChar}/>
      <div class="target-box"></div>
      <div
        class="game"
        onClick={(e) => {
          setCurrentCoord(e.clientX + " " + e.clientY);
          placeTBox(e.clientX, e.clientY);
        }}
      ></div>
    </div>
  );
};

export default Game;
