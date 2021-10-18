import { checkNumbers } from '../../helpers';
import chipEffect from '../../assets/sounds/chip-effect.mp3';

const SET_BET = (state, payload) => {
  new Audio(chipEffect).play();
  return {
    ...state,
    numbersList: checkNumbers(state.numbersList, payload),
    raceTrack: checkNumbers(state.raceTrack, payload),
    one2one: checkNumbers(state.one2one, payload),
    dozen: checkNumbers(state.dozen, payload),
    column: checkNumbers(state.column, payload),
    street: checkNumbers(state.street, payload),
    sixLine: checkNumbers(state.sixLine, payload),
    horizontalSplits: {
      split3: checkNumbers(state.horizontalSplits.split3, payload),
      split2: checkNumbers(state.horizontalSplits.split2, payload),
      split1: checkNumbers(state.horizontalSplits.split1, payload),
    },
    verticalSplits: {
      split4: checkNumbers(state.verticalSplits.split4, payload),
      split5: checkNumbers(state.verticalSplits.split5, payload),
    },
    corners: {
      corner1: checkNumbers(state.corners.corner1, payload),
      corner2: checkNumbers(state.corners.corner2, payload),
    },

    numbersChecked: payload.checked
      ? state.numbersChecked.concat(payload.numbers)
      : state.numbersChecked.filter(item => item !== payload.numbers),
  };
};

export default SET_BET;