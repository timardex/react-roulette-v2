const spinBall = () => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'SPIN_BALL'
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default spinBall;
