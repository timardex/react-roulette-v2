import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import useCountdownTimer from '../../hooks/useCountdownTimer';
import ballEffect from '../../assets/sounds/ball-effect.mp3';
import useAudio from '../../hooks/useAudio';
import { spinBall, noMoreBets, removeBets, gameResult } from '../../store/actions';

import './style.scss';

const Button = () => {
  const dispatch = useDispatch();

  const numbersChecked = useSelector(state => state.numbersChecked) || [];
  const spinBtnText = useSelector(state => state.spinBtnText) || '';

  const [audioPlaying, audioToggle] = useAudio(ballEffect);
  const [timeLeft, setTimeLeft] = useCountdownTimer(null);

  const startGame = () => {
    dispatch(spinBall());
    audioToggle();
    setTimeLeft(10);
  };

  useEffect(() => {
    if(timeLeft === 0) {
      dispatch(noMoreBets());
    }

    if(!audioPlaying && timeLeft === 0) {
      dispatch(gameResult());
      setTimeLeft(null);
    }
  }, [timeLeft, audioPlaying, dispatch, setTimeLeft]);

  return(
    <div className="text-center mb-1">
      {numbersChecked.length > 0 && <button onClick={() => dispatch(removeBets())} type="button" disabled={timeLeft === 0}>
        {timeLeft === 0 ? 'Bets accepted' : 'Remove bets'}
      </button>}

      <button onClick={() => startGame()} type="button" disabled={audioPlaying}>
        <span>{spinBtnText}</span>
        {audioPlaying && timeLeft > 0 && timeLeft}
      </button>
    </div>
  );
};

export default Button;
