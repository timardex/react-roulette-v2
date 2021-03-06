import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { soundToggle } from '../../store/actions';

import soundOn from '../../assets/images/sound-on.png';
import soundOff from '../../assets/images/sound-off.png';
import './style.scss';

import WheelStand from './WheelStand';
import OutsideNumbers from './OutsideNumbers';
import InsideBets from './InsideBets';
import LastNumbers from './LastNumbers';
import WinningInfo from './WinningInfo';
import GameInfo from  './GameInfo';

const TheTable = () => {
  const dispatch = useDispatch();

  const one2one = useSelector(state => state.one2one) || [];
  const dozen = useSelector(state => state.dozen) || [];
  const raceTrack = useSelector(state => state.raceTrack) || [];
  const enableSounds = useSelector(state => state.enableSounds);
  const winningNumber = useSelector(state => state.winningNumber) || {};
  const spinBtnText = useSelector(state => state.spinBtnText) || '';

  return (
    <div id="the-table">
      <div id="sound-toggle" onClick={() => dispatch(soundToggle())}>
        <img src={enableSounds ? soundOn : soundOff} alt="Toggle sound" title={`${enableSounds ? 'Disable' : 'Enable'} sound`}/>
      </div>

      <LastNumbers />

      {Object.keys(winningNumber).length > 0 && <h4 className="text-center winner-number-info mt-1">
        Winning number: <span style={{backgroundColor: winningNumber.properties.color}}>{winningNumber.numbers}</span>
      </h4>}

      <GameInfo />

      <WheelStand />

      <div className="the-table-inner">
        {spinBtnText === 'No more bets!' && <p className="no-more-bets-overlay">{spinBtnText}</p>}
        
        <div className="outside-numbers">
          {one2one.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>

        <div className="outside-numbers">
          {dozen.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>

        <InsideBets />

        <div className="outside-numbers">
          {raceTrack.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>
      </div>

      <WinningInfo />
    </div>
  );
};

export default TheTable;
