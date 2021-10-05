import { numbersList, wheelNumbers } from '../helpers/numbers';

const GAME_INITIALIZER = (state) => {
  return {
    ...state,
    numbersList,
    wheelNumbers
  };
};

export default GAME_INITIALIZER;