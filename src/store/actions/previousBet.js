const previousBet = bet => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'PREVIOUS_BET',
        payload: bet,
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default previousBet;