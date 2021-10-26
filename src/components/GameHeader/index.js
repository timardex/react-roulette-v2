import React from 'react';
import { useSelector } from 'react-redux';

import ChipContainer from '../ChipContainer';
import './style.scss';

const GameHeader = () => {
  const spinBtnText = useSelector(state => state.spinBtnText) || '';
  const { numbers } = useSelector(state => state.winners) || [];
  
  const renderInfo = () => {
    if(typeof numbers !== 'undefined') {
      return(
        <ul>
          {numbers.map((item) => {
            return <li key={item.name}>
              <span>Name: {item.name}</span>
              <span>Chip won: {item.chipCount * item.winingOdd}</span>
            </li>
          })}
        </ul>
      )
    }
    return null;
  };

  return (
    <header>
      <h1 className="text-center mt-2 mb-1">
        Welcome to Roulette game app
        <small className="d-block">Try your luck!</small>
      </h1>

      <h3 className="text-center mb-2 bet-info">
        {spinBtnText !== 'No more bets!' ? 'Place your bets please!' : spinBtnText}
      </h3>

      {renderInfo()}

      <ChipContainer />
    </header>
  );
};

export default GameHeader;
