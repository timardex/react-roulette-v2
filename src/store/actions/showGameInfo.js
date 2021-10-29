const showGameInfo = bet => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'SHOW_GAME_INFO',
        payload: bet,
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default showGameInfo;