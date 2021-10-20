const GAME_RESULT = (state) => {
  const generatedNumber = Math.floor((Math.random() * 36) + 0);
  const winningNumber = state.numbersList.find(item => item.numbers === generatedNumber);

  return {
    ...state,
    spinBtnText: 'Spin it!',
    rotateBall: 'd-none',
    winningNumber,
    lastNumbers: state.lastNumbers.concat(winningNumber)
  };
};

export default GAME_RESULT;
