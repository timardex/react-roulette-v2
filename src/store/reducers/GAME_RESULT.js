const GAME_RESULT = (state) => {
  return {
    ...state,
    btnText: 'Spin it!',
    winningNumber: Math.floor((Math.random() * 36) + 0),
  };
};

export default GAME_RESULT;
