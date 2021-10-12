import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import ballEffect from '../../assets/sounds/ball-effect.mp3';
import useAudio from '../useAudio';
import { spinBall } from '../../store/actions';

const StartGameBtn = () => {
  const dispatch = useDispatch();
  const btnText = useSelector(state => state.btnText) || '';

  const [playing, toggle] = useAudio(ballEffect);

  const startGame = () => {
    dispatch(spinBall()).then(() => {
      toggle()
    });
  };

  return(
    <div>
      <button onClick={() => startGame()}>
        {btnText}
      </button>
    </div>
  );
};

export default StartGameBtn;
