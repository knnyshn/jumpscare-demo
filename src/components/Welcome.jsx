import React from "react";
import Game from "./Game"
import { useState } from "react";

function Welcome({ setOpenModal }) {
  const [gameStarted, setGameStarted] = useState(false);
  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        </div>
        <div className="title">
          <h1>Instructions:</h1>
          <p></p>
        </div>
        <div className="body">
          <p>There will be ten pictures with wildlife hidden within! You have thirty seconds to find the animal within the picture or else there will be a surprise! Hit start to start the game or cancel if you don't like surprises.</p>
        </div>
        <div className="buttons">
          <button
            className="cancel-button"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <div className="divider"></div>
        <button className="start-button"
          onClick={startGame}
        >Start</button>
      </div>
      {gameStarted && <Game />}
          </div>
  );
}

export default Welcome;
