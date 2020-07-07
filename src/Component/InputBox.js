import React, { useState, useEffect } from "react";
import "./style.css";

function InputBox() {
  return (
    <div className="">
      <div className="no_Text">Enter Winning Score</div>
      <input
        type="number"
        id="inputType"
        placeholder="Enter Winning Score"
        value="20"
      ></input>
    </div>
  );
}

export default InputBox;
