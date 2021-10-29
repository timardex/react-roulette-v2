import GAME_INITIALIZER from './GAME_INITIALIZER';
import SPIN_BALL from './SPIN_BALL';
import SET_BET from './SET_BET';
import NO_MORE_BETS from './NO_MORE_BETS';
import REMOVE_BETS from './REMOVE_BETS';
import GAME_RESULT from './GAME_RESULT';
import SOUND_TOGGLE from './SOUND_TOGGLE';
import DELETE_BET from './DELETE_BET';
import PREVIOUS_BET from './PREVIOUS_BET';
import SHOW_GAME_INFO from './SHOW_GAME_INFO';

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
    case 'REMOVE_BETS':
      return REMOVE_BETS(state);
    case 'GAME_RESULT':
      return GAME_RESULT(state);
    case 'SOUND_TOGGLE':
      return SOUND_TOGGLE(state);
    case 'DELETE_BET':
      return DELETE_BET(state, action.payload);
    case 'PREVIOUS_BET':
      return PREVIOUS_BET(state);
    case 'SHOW_GAME_INFO':
      return SHOW_GAME_INFO(state, action.payload);
    default:
      return state;
  };
};

export default reducers;