import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { setBet } from '../../../store/actions';

import chip from '../../../assets/images/chip.png';
import './style.scss';

const LineBets = (props) => {
  const { data } = props;
  const currentChip = useSelector(state => state.currentChip) || null;

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
    if(currentChip > 0) {
      dispatch(setBet(bet));
    }
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
            onClick={() => setSelectedBet(data)}/>

          {data.chipCount > 0 && <div className="chip">
            <span>{data.chipCount}</span>
            <img src={chip} alt="Chip"/>
          </div>}
        </label>
      </div>
    </div>
  );
};

export default LineBets;
