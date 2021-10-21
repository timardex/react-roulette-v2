import React from "react";
import { useDispatch } from 'react-redux';

import { setBet } from '../../../store/actions';

import chip from '../../../assets/images/chip.png';
import './style.scss';

const LineBets = (props) => {
  const { data } = props;

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
    dispatch(setBet(bet));
  };

  return (
    <div className={`line-bets ${data.className}`}>
      <div className="form">
        <label
          className={"form-label"} htmlFor={data.id}
          title={`${data.className.includes('Split') ? 'split' : data.className}: ${data.numbers}`}>

          <input
            className="form-input"
            type="checkbox"
            id={data.id}
            value={data.id}
            onChange={() => setSelectedBet(data)}/>

          {data.checked && <img className="chip" src={chip} alt="Chip"/>}
        </label>
      </div>
    </div>
  );
};

export default LineBets;
