import React, { useState, useEffect } from "react";
import CommonPlayer from "./CommonPlayer";
import InputBox from "./InputBox";
import Dice from "./Dice";
import Rules from "./Rules";
function ReactPigGame() {
  let finalScore = [0, 0];
  let roundScore;
  let currentPlayer;
  const [showDice, setShowDice] = useState(null);

  function randomNumber() {
    let saveRandomNo = Math.floor(Math.random() * 6) + 1;
    setShowDice(saveRandomNo);
    console.log(saveRandomNo, "saveRandomNosaveRandomNo");
  }
  return (
    <>
      <Rules />
      <InputBox />
      <div className="container">
        <CommonPlayer playerName="Player 1" finalScore="100" currentScore="20">
          <Dice randomNumber={randomNumber} showDice={showDice} />
        </CommonPlayer>
        <CommonPlayer playerName="Player 2" finalScore="80" currentScore="10" />
      </div>
    </>
  );
}

export default ReactPigGame;
