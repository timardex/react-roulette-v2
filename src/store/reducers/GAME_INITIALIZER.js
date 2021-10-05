import numbersList from '../helpers/numbers';

const GAME_INITIALIZER = (state) => {
  return {
    ...state,
    numbersList,
  };
};

export default GAME_INITIALIZER;