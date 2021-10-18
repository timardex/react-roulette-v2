import React from "react";
import { useDispatch } from 'react-redux';

import { setBet } from '../../../store/actions';

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

          {data.checked && <span className="chip"></span>}
        </label>
      </div>
    </div>
  );
};

export default LineBets;
