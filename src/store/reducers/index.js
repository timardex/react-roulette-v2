import GAME_INITIALIZER from './GAME_INITIALIZER';

const reducers = (state = {}, action) => {
  switch(action.type) {
    case 'GAME_INITIALIZER':
      return GAME_INITIALIZER(state);
    default:
      return state;
  };
};

export default reducers;