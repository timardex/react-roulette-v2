const deleteBet = bet => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'DELETE_BET',
        payload: bet,
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default deleteBet;