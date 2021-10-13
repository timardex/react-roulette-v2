const setBet = bet => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'SET_BET',
        payload: bet,
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default setBet;