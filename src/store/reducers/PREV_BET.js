import { previouseBet } from '../../helpers';

const PREV_BET = (state, payload) => {
  return {
    ...state,
    numbersChecked: state.numbersChecked.concat(payload),
    currentChip: state.currentChip -1,
  };
};

export default PREV_BET;