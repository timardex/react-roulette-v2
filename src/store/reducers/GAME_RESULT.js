const GAME_RESULT = (state) => {
  return {
    ...state,
    spinBtnText: 'Spin it!',
    rotateBall: 'd-none',
    winningNumber: Math.floor((Math.random() * 36) + 0),
  };
};

export default GAME_RESULT;
