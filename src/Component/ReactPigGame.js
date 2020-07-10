import React, { useState, useEffect, useRef } from "react";
import CommonPlayer from "./CommonPlayer";
import InputBox from "./InputBox";
import Dice from "./Dice";
import Rules from "./Rules";

function ReactPigGame() {
  let active = 1;

  const [showDice, setShowDice] = useState(null);
  const [roundScore, setRoundScore] = useState({
    player1: 0,
    player2: 0,
  });
  const [finalScore, SetFinalScore] = useState({
    player1: 0,
    player2: 0,
  });
  console.log(active, "activeactive");
  console.log(showDice, "showDice ");
  console.log(roundScore, "roundScoreroundScore");
  console.log(finalScore, "finalScorefinalScore");
  let randomNo;
  function rollDiceFun() {
    randomNo = Math.floor(Math.random() * 6) + 1;
    setShowDice(randomNo);
    if (active === 1) {
      setRoundScore({
        ...roundScore,
        player1: randomNo + roundScore.player1,
      });
    }
    ///if active 2
    if (active === 2) {
      setRoundScore({
        ...roundScore,
        player2: randomNo + roundScore.player2,
      });
    }

    if (randomNo === 1) {
      active = 2;

      return setRoundScore({
        ...roundScore,
        player1: 0,
      });
    }
  }
  const passstyle = {
    background: "green",
  };
  function holdFun() {
    if (active === 1) {
      SetFinalScore({
        ...finalScore,
        player1: (finalScore.player1 += roundScore.player1),
      });
    }
    active = 2;
    if (active === 2) {
      SetFinalScore({
        ...finalScore,
        player2: (finalScore.player2 += roundScore.player2),
      });
    }
  }

  return (
    <>
      <Rules />
      <InputBox />
      <div className="container">
        <CommonPlayer
          passstyle={passstyle}
          playerName="Player 1"
          finalScore={finalScore.player1}
          roundScore={roundScore.player1}
        >
          <Dice
            rollDiceFun={rollDiceFun}
            showDice={showDice}
            holdFun={holdFun}
          />
        </CommonPlayer>
        <CommonPlayer
          playerName="Player 2"
          roundScore={roundScore.player2}
          finalScore={finalScore.player2}
        />
      </div>
    </>
  );
}

export default ReactPigGame;
