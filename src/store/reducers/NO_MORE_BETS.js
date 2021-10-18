const NO_MORE_BETS = (state) => {
  return {
    ...state,
    ballIsSpinning: false,
    rotateBall: 'd-none',
  };
};

export default NO_MORE_BETS;
