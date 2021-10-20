import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';

const GameInfo = () => {
  const winningNumber = useSelector(state => state.winningNumber) || null;
  const numbersList = useSelector(state => state.numbersList) || [];
  const winner = numbersList.find(item => item.numbers === winningNumber) || {};

  return(
    <div id="game-info">
      <div className="info">
        <h4 className="text-center title">
          Place your bets please!
          <small>You can place your bets until <span>No more bets</span> is called!</small>
        </h4>

        {Object.keys(winner).length > 0 && <h4 className="text-center winner-info mt-1">
          Winning number: <span style={{backgroundColor: winner.properties.color}}>{winner.numbers}</span>
        </h4>}
      </div>
    </div>
  );
};

export default GameInfo;
