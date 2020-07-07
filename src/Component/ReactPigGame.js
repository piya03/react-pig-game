import React, { useState, useEffect } from "react";
import CommonPlayer from "./CommonPlayer";
import InputBox from "./InputBox";
import Dice from "./Dice";
import Rules from "./Rules";
function ReactPigGame() {
  return (
    <>
      <Rules />
      <InputBox />
      <div className="container">
        <CommonPlayer playerName="Player 1" finalScore="100" currentScore="20">
          <Dice />
        </CommonPlayer>
        <CommonPlayer playerName="Player 2" finalScore="80" currentScore="10" />
      </div>
    </>
  );
}

export default ReactPigGame;
