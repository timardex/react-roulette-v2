const gameResult = () => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'GAME_RESULT'
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default gameResult;
