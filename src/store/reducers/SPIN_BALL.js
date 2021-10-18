const SPIN_BALL = (state) => {
  return {
    ...state,
    ballIsSpinning: true,
    rotateWheel: state.ballIsSpinning ? 'rotate-right' : 'rotate-left',
    rotateBall: state.ballIsSpinning ? 'rotate-left d-block' : 'rotate-right d-block',
  };
};

export default SPIN_BALL;
