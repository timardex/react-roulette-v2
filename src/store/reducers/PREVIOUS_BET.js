import { previousBet } from '../../helpers';

const PREVIOUS_BET = (state) => {
  return {
    ...state,
    numbersList: previousBet(state.numbersList, state.previousBets),
    raceTrack: previousBet(state.raceTrack, state.previousBets),
    one2one: previousBet(state.one2one, state.previousBets),
    dozen: previousBet(state.dozen, state.previousBets),
    column: previousBet(state.column, state.previousBets),
    street: previousBet(state.street, state.previousBets),
    sixLine: previousBet(state.sixLine, state.previousBets),
    horizontalSplits: {
      split3: previousBet(state.horizontalSplits.split3, state.previousBets),
      split2: previousBet(state.horizontalSplits.split2, state.previousBets),
      split1: previousBet(state.horizontalSplits.split1, state.previousBets),
    },
    verticalSplits: {
      split4: previousBet(state.verticalSplits.split4, state.previousBets),
      split5: previousBet(state.verticalSplits.split5, state.previousBets),
    },
    corners: {
      corner1: previousBet(state.corners.corner1, state.previousBets),
      corner2: previousBet(state.corners.corner2, state.previousBets),
    },
    numbersChecked: state.previousBets,
    previousBets: [],
    currentChip: state.currentChip - state.previousBets.map((item) => item.chipCount).reduce((a, b) => (a + b), 0),
  };
};

export default PREVIOUS_BET;