import React, { useState, useEffect } from "react";
import CommonPlayer from "./CommonPlayer";
import InputBox from "./InputBox";
import Dice from "./Dice";
import Rules from "./Rules";
function ReactPigGame() {
  //   let finalScore = [0, 0];
  //   let currentPlayer;

  const [showDice, setShowDice] = useState(null);
  const [roundScore, setRoundScore] = useState(0);

  console.log(showDice, "showDice ");
  console.log(roundScore, "roundScoreroundScore");
  function randomNumber() {
    let saveRandomNo = Math.floor(Math.random() * 6) + 1;
    setShowDice((prev) => {
      return saveRandomNo;
    });
    setRoundScore(saveRandomNo + roundScore);
  }

  return (
    <>
      <Rules />
      <InputBox />
      <div className="container">
        <CommonPlayer
          playerName="Player 1"
          finalScore="100"
          roundScore={roundScore}
        >
          <Dice randomNumber={randomNumber} showDice={showDice} />
        </CommonPlayer>
        <CommonPlayer
          playerName="Player 2"
          finalScore="80"
          roundScore={roundScore}
        />
      </div>
    </>
  );
}

export default ReactPigGame;
