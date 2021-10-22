import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNumbersByProperties } from '../../../helpers';
import { setBet } from '../../../store/actions';

import chip from '../../../assets/images/chip.png';
import './style.scss';

const Numbers = (props) => {
  const { property, value } = props;

  const numbersList = useSelector(state => state.numbersList) || [];
  const winningNumber = useSelector(state => state.winningNumber) || {};
  const currentChip = useSelector(state => state.currentChip) || null;

  const dispatch = useDispatch();

  const setSelectedBet = (bet) => {
    if(currentChip > 0) {
      dispatch(setBet(bet));
    }
  };

  return (
    <div className={`columns ${value === 'green' ? 'number-zero' : ''}`}>
      {getNumbersByProperties(numbersList, property, value).map((value, index) => {
        return (
          <div className="form" key={index}>
            <label className={`form-label number-${value.name}`} htmlFor={value.id} title={`#${value.name}`}>
              <input
                className="form-input"
                type="checkbox"
                id={value.id}
                value={value.id}
                onClick={() => setSelectedBet(value)}/>

              <span className="number-name" style={{color: value.properties.color}}>{value.name}</span>

              {value.chipCount > 0 && <div className="chip">
                  <span>{value.chipCount}</span>
                  <img src={chip} alt="Chip"/>
              </div>}
              {winningNumber.numbers === value.numbers && <span className="dolly"></span>}
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default Numbers;