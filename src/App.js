import React from 'react';
//import { useDispatch } from 'react-redux';

import './App.scss'

import RotateDevice from './components/RotateDevice';
import GameHeader from './components/GameHeader';

import numbersList from './store/helpers/numbers';

const App = () => {
  console.log(numbersList);
  return (
    <div id="roulette-game">
      <RotateDevice />
      <GameHeader />
    </div>
  );
}

export default App;
