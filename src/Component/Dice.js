import React, { useState, useEffect } from "react";
import SingleDice from "./SingleDice";
import "./style.css";

const divStyle = {
  margin: "40px",
  border: "5px solid pink",
};

function Dice({ randomNumber, showDice }) {
  return (
    <div>
      <div className="new-game">
        <i className="fa fa-plus-circle"></i>
        New Game
      </div>

      <div
        className="roll-dice"
        onClick={(e) => {
          console.log("okfvdffd");
          randomNumber();
        }}
      >
        <i className="fa fa-circle"></i> ROLL DICE
      </div>
      <div className="hold">
        <i className="fa fa-pause"></i>
        HOLD
      </div>
      <div>
        <SingleDice showDice={showDice} />
      </div>
    </div>
  );
}

export default Dice;
