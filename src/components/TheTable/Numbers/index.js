import React from 'react';
import { useSelector } from 'react-redux';

import { getNumbersByProperties } from '../../../helpers';

import './style.scss';

const Numbers = (props) => {
  const { property, value } = props;
  const numbersList = useSelector(state => state.numbersList) || [];
  const numbers = getNumbersByProperties(numbersList, property, value);

  return (
    <div className={`columns ${value === 'green' ? 'number-zero' : ''}`}>
      {numbers.map((value, index) => {
        return (
          <div className={`form-check form-check-inline`} key={index}>
            <label className={`form-check-label number-${value.name}`} htmlFor={value.id} title={value.numbers}>
              <input className="form-check-input" type="checkbox" id={value.id} value={value.id} />
              <span className="number-name" style={{color: value.properties.color}}>{value.name}</span>
              {value.checked && <span className="chip"></span>}
              <span className="dolly"></span>
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default Numbers;