import React from 'react';
import { useSelector } from 'react-redux';

import ChipContainer from '../ChipContainer';
import './style.scss';

const GameHeader = () => {
  const spinBtnText = useSelector(state => state.spinBtnText) || '';

  return (
    <header>
      <h1 className="text-center mt-2 mb-1">
        Welcome to Roulette game app
        <small className="d-block">Try your luck!</small>
      </h1>

      <h3 className="text-center mb-2 bet-info">
        {spinBtnText !== 'No more bets!' ? 'Place your bets please!' : spinBtnText}
      </h3>

      <ChipContainer />
    </header>
  );
};

export default GameHeader;
