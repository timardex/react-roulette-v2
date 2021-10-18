import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import useCountdownTimer from '../../hooks/useCountdownTimer';
import ballEffect from '../../assets/sounds/ball-effect.mp3';
import useAudio from '../../hooks/useAudio';
import { spinBall, noMoreBets } from '../../store/actions';

const StartGameBtn = () => {
  const dispatch = useDispatch();
  const ballIsSpinning = useSelector(state => state.ballIsSpinning) || false;
  const [audioPlaying, audioToggle] = useAudio(ballEffect);
  const [timeLeft, setTimeLeft] = useCountdownTimer(null);
  const [btnText, setBtnText] = useState('Spin it!');

  const startGame = () => {
    dispatch(spinBall());
    audioToggle();
    setTimeLeft(10);
  };

  useEffect(() => {
    if(timeLeft === 0) {
      dispatch(noMoreBets());
      setBtnText('No more bets!');
    }
    if(ballIsSpinning) {
      setBtnText('Place your bets please!');
    }

    if(!audioPlaying) {
      setBtnText('Spin it!');
    }
  }, [timeLeft, ballIsSpinning, audioPlaying, dispatch]);

  return(
    <div className="text-center">
      <button onClick={() => startGame()} type="button" disabled={audioPlaying}>
        <span>{btnText}</span>
        {audioPlaying && timeLeft > 0 && timeLeft}
      </button>
    </div>
  );
};

export default StartGameBtn;
