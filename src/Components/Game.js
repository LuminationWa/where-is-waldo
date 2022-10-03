import "../Styles/Game.css";

const Game = () => {
    // Height and width needs to be static
    return(
        <div class="game"
        onClick={(e) => (console.log(e.clientX, e.clientY))}></div>
    );
};

export default Game;