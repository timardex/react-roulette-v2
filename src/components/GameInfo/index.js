import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';

const GameInfo = () => {
  const winningNumber = useSelector(state => state.winningNumber) || {};
  const lastNumbers = useSelector(state => state.lastNumbers) || [];

  const getLastNumbers = () => {
    return(
      <div>
        <h4 className="text-center mt-1">Last numbers:</h4>
        <ul id="last-numbers">
          {lastNumbers.map((item, index) => {
            return <li key={index} style={{backgroundColor: item.properties.color}}>{item.name}</li>
          })}
        </ul>
      </div>
    );
  };

  return(
    <div id="game-info">
      <div className="info">
        <h3 className="text-center title">
          Place your bets please!
          <small>You can place your bets until <span>No more bets</span> is called!</small>
        </h3>

        {Object.keys(winningNumber).length > 0 && <h4 className="text-center winner-info mt-1">
          Winning number: <span style={{backgroundColor: winningNumber.properties.color}}>{winningNumber.numbers}</span>
        </h4>}

        {lastNumbers.length > 0 && getLastNumbers()}
      </div>
    </div>
  );
};

export default GameInfo;
