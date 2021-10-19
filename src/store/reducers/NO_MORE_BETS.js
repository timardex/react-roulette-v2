const NO_MORE_BETS = (state) => {
  return {
    ...state,
    rotateBall: 'd-none',
    btnText: 'No more bets!',
  };
};

export default NO_MORE_BETS;
