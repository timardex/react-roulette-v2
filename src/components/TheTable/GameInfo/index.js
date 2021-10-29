import React from "react";
import { useSelector } from "react-redux";

import './style.scss';

const GameInfo = () => {
  const gameInfo = useSelector(state => state.gameInfo) || {};
  const renderContent = () => {
    if(typeof gameInfo.numbers !== 'undefined') {
      return(
        <div>
          <p><span>{gameInfo.insideBet ? '#' : ''}{gameInfo.name}</span>: pays <span>{gameInfo.winingOdd}</span> to 1</p>
          {!gameInfo.insideBet && <p><u>Included numbers</u>: {gameInfo.numbers.toString()}</p>}
        </div>
      )
    }
  }
  return(
    <div id="game-info">
      {renderContent()}
    </div>
  );
};

export default GameInfo;
