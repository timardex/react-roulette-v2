import GAME_INITIALIZER from './GAME_INITIALIZER';
import SPIN_BALL from './SPIN_BALL';

const reducers = (state = {}, action) => {
  switch(action.type) {
    case 'GAME_INITIALIZER':
      return GAME_INITIALIZER(state);
    case 'SPIN_BALL':
      return SPIN_BALL(state);
    default:
      return state;
  };
};

export default reducers;