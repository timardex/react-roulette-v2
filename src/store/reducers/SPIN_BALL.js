const SPIN_BALL = (state) => {
  return {
    ...state,
    ballIsSpinning: !state.ballIsSpinning,
    rotateWheel: !state.ballIsSpinning ? 'rotate-right' : 'rotate-left',
    rotateBall: !state.ballIsSpinning ? 'rotate-left d-block' : 'rotate-right d-block',
    spinBtnText: 'Place your bets please!',
    winningNumber: null,
  };
};

export default SPIN_BALL;
