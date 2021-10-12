import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';

//import RotateDevice from './components/RotateDevice';
import GameHeader from './components/GameHeader';
import TheTable from './components/TheTable';
import StartGameBtn from './components/StartGameBtn';

import { gameInitializer } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(gameInitializer());
  });

  return (
    <div id="roulette-game">
      <GameHeader />
      <TheTable />
      <StartGameBtn />
    </div>
  );
}

export default App;
