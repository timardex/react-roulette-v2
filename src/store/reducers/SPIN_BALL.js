const SPIN_BALL = (state) => {
  return {
    ...state,
    spinBtn: !state.spinBtn,
    rotateWheel: state.spinBtn ? 'rotate-right' : 'rotate-left',
    rotateBall: state.spinBtn ? 'rotate-left d-block' : 'rotate-right d-block',
  };
};

export default SPIN_BALL;
