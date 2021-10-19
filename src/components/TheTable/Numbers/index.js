import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNumbersByProperties } from '../../../helpers';
import { setBet } from '../../../store/actions';

import './style.scss';

const Numbers = (props) => {
  const { property, value } = props;

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
    dispatch(setBet(bet));
  };

  const numbersList = useSelector(state => state.numbersList) || [];
  const winningNumber = useSelector(state => state.winningNumber) || null;

  return (
    <div className={`columns ${value === 'green' ? 'number-zero' : ''}`}>
      {getNumbersByProperties(numbersList, property, value).map((value, index) => {
        return (
          <div className={`form`} key={index}>
            <label className={`form-label number-${value.name}`} htmlFor={value.id} title={`#${value.name}`}>
              <input
                className="form-input"
                type="checkbox"
                id={value.id}
                value={value.id}
                onChange={() => setSelectedBet(value)}/>

              <span className="number-name" style={{color: value.properties.color}}>{value.name}</span>

              {value.checked && <span className="chip"></span>}
              {winningNumber === value.numbers && <span className="dolly"></span>}
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default Numbers;