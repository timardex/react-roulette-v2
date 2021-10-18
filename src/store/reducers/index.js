import GAME_INITIALIZER from './GAME_INITIALIZER';
import SPIN_BALL from './SPIN_BALL';
import SET_BET from './SET_BET';
import NO_MORE_BETS from './NO_MORE_BETS';

const reducers = (state = {}, action) => {
  switch(action.type) {
    case 'GAME_INITIALIZER':
      return GAME_INITIALIZER(state);
    case 'SPIN_BALL':
      return SPIN_BALL(state);
    case 'SET_BET':
      return SET_BET(state, action.payload);
    case 'NO_MORE_BETS':
      return NO_MORE_BETS(state);
    default:
      return state;
  };
};

export default reducers;