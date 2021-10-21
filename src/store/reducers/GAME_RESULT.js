import { keepWinningBets } from '../../helpers';

const GAME_RESULT = (state) => {
  const generatedNumber = Math.floor((Math.random() * 6) + 0);
  const winningNumber = state.numbersList.find(item => item.numbers.includes(generatedNumber));

  return {
    ...state,
    numbersList: keepWinningBets(state.numbersList, winningNumber),
    raceTrack: keepWinningBets(state.raceTrack, winningNumber),
    one2one: keepWinningBets(state.one2one, winningNumber),
    dozen: keepWinningBets(state.dozen, winningNumber),
    column: keepWinningBets(state.column, winningNumber),
    street: keepWinningBets(state.street, winningNumber),
    sixLine: keepWinningBets(state.sixLine, winningNumber),
    horizontalSplits: {
      split3: keepWinningBets(state.horizontalSplits.split3, winningNumber),
      split2: keepWinningBets(state.horizontalSplits.split2, winningNumber),
      split1: keepWinningBets(state.horizontalSplits.split1, winningNumber),
    },
    verticalSplits: {
      split4: keepWinningBets(state.verticalSplits.split4, winningNumber),
      split5: keepWinningBets(state.verticalSplits.split5, winningNumber),
    },
    corners: {
      corner1: keepWinningBets(state.corners.corner1, winningNumber),
      corner2: keepWinningBets(state.corners.corner2, winningNumber),
    },
    numbersChecked: state.numbersChecked.filter((item) => item.numbers.includes(winningNumber.numbers[0])),
    spinBtnText: 'Spin it!',
    rotateBall: 'd-none',
    winningNumber,
    lastNumbers: state.lastNumbers.concat(winningNumber),
  };
};

export default GAME_RESULT;
