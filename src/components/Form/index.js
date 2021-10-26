import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setBet, deleteBet } from "../../store/actions";

import chip from '../../assets/images/chip.png';

import './style.scss';

const Form = (props) => {
  const { value, showName } = props;

  const dispatch = useDispatch();

  const currentChip = useSelector(state => state.currentChip) || null;
  const winningNumber = useSelector(state => state.winningNumber) || {};
  const spinBtnText = useSelector(state => state.spinBtnText) || '';
  
  const setSelectedBet = (bet) => {
    if(currentChip > 0 && spinBtnText !== 'No more bets!') {
      dispatch(setBet(bet));
    }
  };

  const deleteSelectedBet = (bet) => {
    if(spinBtnText !== 'No more bets!') {
      dispatch(deleteBet(bet));
    }
  };

  const title = () => {
    return value.insideBet ? value.name : value.numbers;
  };

  return(
    <div className="form">
      <label className="form-label" htmlFor={value.id} title={title()}>
        <input
          className="form-input"
          type="checkbox"
          id={value.id}
          value={value.id}
          onClick={() => setSelectedBet(value)}/>

        {showName && <span className="number-name" style={
          {color: value.insideBet ? value.properties.color : 'white'}
        }>{value.name}</span>}

        {value.chipCount > 0 && <div className="chip">
            <span>{value.chipCount}</span>
            <img src={chip} alt="Chip"/>
        </div>}
        {winningNumber.numbers === value.numbers && <span className="dolly"></span>}
      </label>

      {value.chipCount > 0 && <div className="remove-bet">
        <small onClick={() => deleteSelectedBet(props.value)}>X</small>
      </div>}
    </div>
  );
};

export default Form;
