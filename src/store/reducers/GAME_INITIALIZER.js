import numbersList from '../helpers/numbers';

const GAME_INITIALIZER = (state) => {
  return {
    ...state,
    numbersList,
    ballEffect: new Audio(require('../../assets/sounds/ball-effect.mp3')),
    chipEffect: new Audio(require('../../assets/sounds/chip-effect.mp3')),
    rotateWheel: 'rotate-left',
    rotateBall: 'rotate-right d-block',
  };
};

export default GAME_INITIALIZER;