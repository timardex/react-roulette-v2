import { setbet } from '../../helpers';
import chipEffect from '../../assets/sounds/chip-effect.mp3';

const SET_BET = (state, payload) => {
  if(state.enableSounds) {
    new Audio(chipEffect).play();
  }

  return {
    ...state,
    numbersList: setbet(state.numbersList, payload),
    raceTrack: setbet(state.raceTrack, payload),
    one2one: setbet(state.one2one, payload),
    dozen: setbet(state.dozen, payload),
    column: setbet(state.column, payload),
    street: setbet(state.street, payload),
    sixLine: setbet(state.sixLine, payload),
    horizontalSplits: {
      split3: setbet(state.horizontalSplits.split3, payload),
      split2: setbet(state.horizontalSplits.split2, payload),
      split1: setbet(state.horizontalSplits.split1, payload),
    },
    verticalSplits: {
      split4: setbet(state.verticalSplits.split4, payload),
      split5: setbet(state.verticalSplits.split5, payload),
    },
    corners: {
      corner1: setbet(state.corners.corner1, payload),
      corner2: setbet(state.corners.corner2, payload),
    },
    numbersChecked: [...state.numbersChecked, payload],
    currentChip: state.currentChip -1,
  };
};

export default SET_BET;