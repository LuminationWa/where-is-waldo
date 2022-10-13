import "../Styles/Counter.css";
import Finn from "../Images/finn.png";
import Jake from "../Images/jake.jpg";
import Marceline from "../Images/marceline.jpg";
import Timer from "./Timer";
import { useEffect } from "react";

const Counter = (props) => {
  let characters = ["finn", "jake", "marceline"];

  useEffect(() => {
    // Whenever props gets updated checks again if something needs to be hidden
    hide(props.remainingChar);
  }, [props.remainingChar]);

  const hide = (array) => {
    // Compares elements between arrays and if any character is missing from remainingChar hides it
    characters.forEach((character) => {
      if (!array.includes(character)) {
        let char = document.querySelector(`.${character}`);
        char.style.opacity = 0.5;
      };
    });
  };

  return (
    <div class="counter">
      <div class="character-counter">
        <h1>Remaining characters</h1>
        <div class="character-display">
          <img class="char-portrait finn" src={Finn} alt="Finn"></img>
          <img class="char-portrait jake" src={Jake} alt="Jake"></img>
          <img
            class="char-portrait marceline"
            src={Marceline}
            alt="Marceline"
          ></img>
        </div>
      </div>
      <Timer />
    </div>
  );
};

export default Counter;
