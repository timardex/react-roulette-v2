const removeBets = () => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'REMOVE_BETS'
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default removeBets;
