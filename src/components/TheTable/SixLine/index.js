import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';
import { getNumbersByProperties } from '../../../helpers';

const SixLine = (props) => {
  const { property, value } = props;
  const numbersList = useSelector(state => state.numbersList) || [];
  const numbers = getNumbersByProperties(numbersList, property, value).map(item => item.number);
  const data = [
    {
      id: value.replace(/\s+/g, '-').toLowerCase(),
      name: value,
      checked: false,
      numbers: numbers.sort((a, b) => a - b),
    }
  ];

  return (
    <div className={`${property} ${value.replace(/\s+/g, '-').toLowerCase()}`}>
      {data.map((value, index) => {
        return (
          <div className="form" key={index} >
            <label className={"form-label"} htmlFor={value.id} title={`Sixline: ${value.numbers}`}>
              <input className="form-input" type="checkbox" id={value.id} value={value.id}/>
              {/* <span className="number-name"></span> */}
              {value.checked && <span className="chip"></span>}
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default SixLine;
