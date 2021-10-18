const noMoreBets = () => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'NO_MORE_BETS'
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default noMoreBets;
