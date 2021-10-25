import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useDetectDevice from './hooks/useDetectDevice';

import './App.scss';

import GameHeader from './components/GameHeader';
import TheTable from './components/TheTable';
import Button from './components/Button';
import SelectedBets from './components/SelectedBets';

import { gameInitializer } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const [checkDesktop] = useDetectDevice();
  
  useEffect(() => {
    dispatch(gameInitializer());
  });

  const renderContent = () => {
    if(checkDesktop) {
      return(
        <div>
          <GameHeader />
          <TheTable />
          <Button />
          <SelectedBets insideBet={true}/>
          <SelectedBets insideBet={false}/>
        </div>
      )
    }
    return(
      <h3 className="text-center game-availability">
        Sorry, game is only available for Desktop
      </h3>
    )
  }

  return (
    <div id="roulette-game">
      {renderContent()}
    </div>
  );
}

export default App;
