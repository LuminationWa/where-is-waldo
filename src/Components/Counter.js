import "../Styles/Counter.css";
import Finn from "../Images/finn.png";
import Jake from "../Images/jake.jpg";
import Marceline from "../Images/marceline.jpg";

const Counter = () => {
    return (
        <div class="counter">
            <div class="character-counter">
                <h1>Remaining characters</h1>
                <div class="character-display">
                    <img class="char-portrait" src={Finn} alt="Finn"></img>
                    <img class="char-portrait" src={Jake} alt="Marceline"></img>
                    <img class="char-portrait" src={Marceline} alt="Marceline"></img>
                </div>
            </div>
            <div class="clock">
                Placeholder
            </div>
        </div>
    );
};

export default Counter;