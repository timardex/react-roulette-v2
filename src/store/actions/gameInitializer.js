const gameInitializer = () => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'GAME_INITIALIZER'
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default gameInitializer;