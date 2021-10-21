import React from 'react';
import { useDispatch } from 'react-redux';

import { setBet } from '../../../store/actions';

import chip from '../../../assets/images/chip.png';
import './style.scss';

const OutsideNumbers = (props) => {
  const { data } = props;

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
    dispatch(setBet(bet));
  };

  return (
    <div className={`${data.className} other-bets`}>
      <div className="form" >
        <label className={"form-label"} htmlFor={data.id} title={data.numbers}>
          <input
            className="form-input"
            type="checkbox"
            id={data.id}
            value={data.id}
            onChange={() => setSelectedBet(data)}/>
          <span className="number-name">{data.name}</span>
          {data.checked && <img className="chip" src={chip} alt="Chip"/>}
        </label>
      </div>
    </div>
  );
};

export default OutsideNumbers;