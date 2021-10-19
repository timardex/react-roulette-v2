const SPIN_BALL = (state) => {
  return {
    ...state,
    ballIsSpinning: !state.ballIsSpinning,
    rotateWheel: !state.ballIsSpinning ? 'rotate-right' : 'rotate-left',
    rotateBall: !state.ballIsSpinning ? 'rotate-left d-block' : 'rotate-right d-block',
    btnText: 'Place your bets please!',
  };
};

export default SPIN_BALL;
