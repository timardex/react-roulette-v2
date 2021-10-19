import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';

//import RotateDevice from './components/RotateDevice';
import GameHeader from './components/GameHeader';
import TheTable from './components/TheTable';
import Button from './components/Button';
import SelectedBets from './components/SelectedBets';

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
      <Button />
      <SelectedBets insideBet={true}/>
      <SelectedBets insideBet={false}/>
    </div>
  );
}

export default App;
