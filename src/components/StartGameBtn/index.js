import React from "react";
import { useDispatch } from 'react-redux';

import useCountdownTimer from '../hooks/useCountdownTimer';
import ballEffect from '../../assets/sounds/ball-effect.mp3';
import useAudio from '../hooks/useAudio';
import { spinBall } from '../../store/actions';

const StartGameBtn = () => {
  const dispatch = useDispatch();

  const [playing, toggle] = useAudio(ballEffect);
  const [timeLeft] = useCountdownTimer(11);

  const startGame = () => {
    dispatch(spinBall()).then(() => {
      toggle();
    });
  };

  const btnText = () => {
    if(timeLeft === 0 && playing) {
      return 'No more bets!';
    }
    return playing ? 'Place your bets please!' : 'Spin it!';
  };

  return(
    <div className="text-center">
      <button onClick={() => startGame()} type="button" disabled={playing}>
        <span>{btnText()}</span>
        {playing && timeLeft > 0 && timeLeft}
      </button>
    </div>
  );
};

export default StartGameBtn;
