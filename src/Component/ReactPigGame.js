import React, { useState, useEffect, useRef } from "react";
import CommonPlayer from "./CommonPlayer";
import InputBox from "./InputBox";
import Dice from "./Dice";
import Rules from "./Rules";

function ReactPigGame() {
  const [active, setActive] = useState(1);
  const [showDice, setShowDice] = useState(null);

  const [roundScore, setRoundScore] = useState({
    player1: 0,
    player2: 0,
  });
  const [finalScore, SetFinalScore] = useState({
    player1: 0,
    player2: 0,
  });

  const [win, setWin] = useState(null);
  console.log(win, "winwin");
  function winnerFun() {
    let winner = null;
    if (finalScore[`player1`] >= 10) {
      setActive(1);
      winner = "player1";
      setWin("Winner");
    }
    if (finalScore[`player2`] >= 10) {
      setActive(2);
      winner = "player2";
      setWin("Winner");
    }

    return winner;
  }

  console.log(active, "activeactive");
  console.log(roundScore, "roundScoreroundScore");
  console.log(finalScore, "finalScore outside");
  let randomNo;

  function rollDiceFun() {
    const winner = winnerFun();
    if (!winner) {
      randomNo = Math.floor(Math.random() * 6) + 1;
      console.log(randomNo, "randomNorandomNorandomNo");

      setShowDice(randomNo);
      if (randomNo === 1) {
        setShowDice(null);

        setActive(active === 1 ? 2 : 1);
        setRoundScore({
          ...roundScore,
          [`player${active}`]: 0,
        });

        return;
      }
      ///if two time 6 roundscore and finalscore =0
      if (randomNo === 6 && showDice === 6) {
        setActive(active === 1 ? 2 : 1);
        setRoundScore({
          ...roundScore,
          [`player${active}`]: 0,
        });
        SetFinalScore({
          ...finalScore,
          [`player${active}`]: 0,
        });
        return;
      }

      setRoundScore({
        ...roundScore,
        [`player${active}`]: randomNo + roundScore[`player${active}`],
      });
    }
  }
  const passstyle1 = {
    background: active === 1 ? "#e5cdcd" : "",
  };
  const passstyle2 = {
    background: active === 2 ? "#e5cdcd" : "",
  };
  function holdFun() {
    setShowDice(null);
    if (finalScore[`player${active}`] >= 10) {
      return console.log("hello");
    }
    setActive(active === 1 ? 2 : 1);

    setRoundScore({
      ...roundScore,
      [`player${active}`]: 0,
    });

    SetFinalScore({
      ...finalScore,
      [`player${active}`]: (finalScore[`player${active}`] +=
        roundScore[`player${active}`]),
    });
  }

  useEffect(() => {
    const winner = winnerFun();

    if (winner) {
      alert(`${winner} is the winner`);
      console.log(`${winner} is the winner`);
      setShowDice(null);
    }
  }, [finalScore]);

  function resetGameFun() {
    setActive(1);
    SetFinalScore({
      player1: 0,
      player2: 0,
    });
    setRoundScore({
      player1: 0,
      player2: 0,
    });
  }

  return (
    <>
      <Rules />
      <InputBox />
      <div className="container">
        <CommonPlayer
          passstyle={passstyle1}
          playerName="Player 1"
          finalScore={finalScore.player1}
          roundScore={roundScore.player1}
        >
          <Dice
            rollDiceFun={rollDiceFun}
            showDice={showDice}
            holdFun={holdFun}
            resetGameFun={resetGameFun}
          />
        </CommonPlayer>
        <CommonPlayer
          playerName="Player 2"
          passstyle={passstyle2}
          roundScore={roundScore.player2}
          finalScore={finalScore.player2}
        />
      </div>
    </>
  );
}

export default ReactPigGame;
