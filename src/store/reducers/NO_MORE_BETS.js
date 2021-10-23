const NO_MORE_BETS = (state) => {
  //Setting up localStorage
  if (typeof(Storage) !== 'undefined') {
    window.localStorage.setItem('winners', JSON.stringify(state.winners));
  }
  return {
    ...state,
    spinBtnText: 'No more bets!',
  };
};

export default NO_MORE_BETS;
