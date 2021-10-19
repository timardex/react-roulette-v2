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
  const btnText = useSelector(state => state.btnText) || '';

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

    if(!audioPlaying) {
      dispatch(gameResult());
    }
  }, [timeLeft, audioPlaying, dispatch]);

  return(
    <div className="text-center mb-1">
      {numbersChecked.length > 0 && <button onClick={() => dispatch(removeBets())} type="button">
        Remove bets
      </button>}

      <button onClick={() => startGame()} type="button" disabled={audioPlaying}>
        <span>{btnText}</span>
        {audioPlaying && timeLeft > 0 && timeLeft}
      </button>
    </div>
  );
};

export default Button;
