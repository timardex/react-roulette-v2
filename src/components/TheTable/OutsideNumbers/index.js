import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';
import { getNumbersByProperties } from '../../../helpers';

const OutsideNumbers = (props) => {
  const { property, value } = props;
  const numbersList = useSelector(state => state.numbersList) || [];
  const numbers = getNumbersByProperties(numbersList, property, value).map(item => item.number);
  const data = [
    {
      id: value.replace(/\s+/g, '-').toLowerCase(),
      name: value,
      checked: false,
      numbers,
    }
  ];

  return (
    <div className="outside-numbers">
      {data.map((value, index) => {
        return (
          <div className="form" key={index} >
            <label className={"form-label"} htmlFor={value.id} title={value.numbers}>
              <input className="form-input" type="checkbox" id={value.id} value={value.id}/>
              <span className="number-name">{value.name}</span>
              {value.checked && <span className="chip"></span>}
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default OutsideNumbers;