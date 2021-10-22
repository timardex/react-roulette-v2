import { deleteBet } from '../../helpers';
import chipEffect from '../../assets/sounds/chip-effect.mp3';

const DELETE_BET = (state, payload) => {
  if(state.enableSounds) {
    new Audio(chipEffect).play();
  }

  return {
    ...state,
    numbersList: deleteBet(state.numbersList, payload),
    raceTrack: deleteBet(state.raceTrack, payload),
    one2one: deleteBet(state.one2one, payload),
    dozen: deleteBet(state.dozen, payload),
    column: deleteBet(state.column, payload),
    street: deleteBet(state.street, payload),
    sixLine: deleteBet(state.sixLine, payload),
    horizontalSplits: {
      split3: deleteBet(state.horizontalSplits.split3, payload),
      split2: deleteBet(state.horizontalSplits.split2, payload),
      split1: deleteBet(state.horizontalSplits.split1, payload),
    },
    verticalSplits: {
      split4: deleteBet(state.verticalSplits.split4, payload),
      split5: deleteBet(state.verticalSplits.split5, payload),
    },
    corners: {
      corner1: deleteBet(state.corners.corner1, payload),
      corner2: deleteBet(state.corners.corner2, payload),
    },
    numbersChecked: state.numbersChecked.filter((item) => item.name !== payload.name),
    currentChip: state.currentChip + payload.chipCount,
  };
};

export default DELETE_BET;