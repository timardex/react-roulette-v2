import React from "react";
import { useDispatch } from 'react-redux';

import useCountdownTimer from '../../hooks/useCountdownTimer';
import ballEffect from '../../assets/sounds/ball-effect.mp3';
import useAudio from '../../hooks/useAudio';
import { spinBall } from '../../store/actions';

const StartGameBtn = () => {
  const dispatch = useDispatch();

  const [audioPlaying, audioToggle] = useAudio(ballEffect);
  const [timeLeft] = useCountdownTimer(11);

  const startGame = () => {
    dispatch(spinBall()).then(() => {
      audioToggle();
    });
  };

  const btnText = () => {
    if(timeLeft === 0 && audioPlaying) {
      return 'No more bets!';
    }
    return audioPlaying ? 'Place your bets please!' : 'Spin it!';
  };

  return(
    <div className="text-center">
      <button onClick={() => startGame()} type="button" disabled={audioPlaying}>
        <span>{btnText()}</span>
        {audioPlaying && timeLeft > 0 && timeLeft}
      </button>
    </div>
  );
};

export default StartGameBtn;
