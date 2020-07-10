import React, { useState, useEffect } from "react";
import "./style.css";

function CommonPlayer({
  playerName,
  finalScore,
  children,
  roundScore,
  passstyle,
}) {
  return (
    <div style={passstyle}>
      <div className="player">
        <div className="box">
          <div className="winner2">
            <div className="playerName">{playerName}</div>
            <div className="redCircle"></div>
          </div>
          <div className="final_score">{finalScore}</div>
        </div>
        <div className="current-score-box">
          <div>CURRENT</div>
          <div className="current-score-2">{roundScore}</div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default CommonPlayer;
