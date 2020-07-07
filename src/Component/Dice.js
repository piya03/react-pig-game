import React, { useState, useEffect } from "react";
import "./style.css";

function Dice() {
  return (
    <div>
      <div className="new-game">
        <i className="fa fa-plus-circle"></i>
        New Game
      </div>

      <div className="roll-dice">
        <i className="fa fa-circle"></i> ROLL DICE
      </div>
      <div className="hold">
        <i className="fa fa-pause"></i>
        HOLD
      </div>
      <div className="all-dice">
        <div className="dice1"></div>
        <div className="dice2"></div>
        <div className="dice3"></div>
        <div className="dice4"></div>
        <div className="dice5"></div>
        <div className="dice6"></div>
      </div>
    </div>
  );
}

export default Dice;
