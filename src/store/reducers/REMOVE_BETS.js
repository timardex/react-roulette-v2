import { removeNumbers } from '../../helpers';

const REMOVE_BETS = (state) => {
  return {
    ...state,
    numbersChecked: [],
    numbersList: removeNumbers(state.numbersList),
    raceTrack: removeNumbers(state.raceTrack),
    one2one: removeNumbers(state.one2one),
    dozen: removeNumbers(state.dozen),
    column: removeNumbers(state.column),
    street: removeNumbers(state.street),
    sixLine: removeNumbers(state.sixLine),
    horizontalSplits: {
      split3: removeNumbers(state.horizontalSplits.split3),
      split2: removeNumbers(state.horizontalSplits.split2),
      split1: removeNumbers(state.horizontalSplits.split1),
    },
    verticalSplits: {
      split4: removeNumbers(state.verticalSplits.split4),
      split5: removeNumbers(state.verticalSplits.split5),
    },
    corners: {
      corner1: removeNumbers(state.corners.corner1),
      corner2: removeNumbers(state.corners.corner2),
    },
  };
};

export default REMOVE_BETS;
