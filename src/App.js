import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss'

import RotateDevice from './components/RotateDevice';
import GameHeader from './components/GameHeader';

import { gameInitializer } from './store/actions';
import { getNumbersByProperties } from './helpers';

const App = () => {
  const dispatch = useDispatch();
  const numbersList = useSelector(state => state.numbersList) || [];

  useEffect(() => {
    dispatch(gameInitializer());
  });

  console.log(getNumbersByProperties(numbersList, 'evenOdd', 'even'));

  return (
    <div id="roulette-game">
      <RotateDevice />
      <GameHeader />
    </div>
  );
}

export default App;
