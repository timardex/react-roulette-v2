const SHOW_GAME_INFO = (state, payload) => {
  return {
    ...state,
    gameInfo: payload,
  };
};

export default SHOW_GAME_INFO;