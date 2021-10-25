const NO_MORE_BETS = (state) => {

  const previousBets = state.numbersChecked.sort((a, b) => a.chipCount > b.chipCount ? -1 : 1)
  .filter((v,i,a)=> a.findIndex(t => (t.name === v.name)) === i)
  //Setting up localStorage
  if (typeof(Storage) !== 'undefined') {
    window.localStorage.setItem('previousBets', JSON.stringify(previousBets));
  }

  return {
    ...state,
    spinBtnText: 'No more bets!',
    previousBets: [],
  };
};

export default NO_MORE_BETS;
