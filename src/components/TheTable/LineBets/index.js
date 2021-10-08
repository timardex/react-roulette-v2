import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';
import { getNumbersByProperties, spaceReplace } from '../../../helpers';

const LineBets = (props) => {
  const { property, value } = props;
  const numbersList = useSelector(state => state.numbersList) || [];
  const numbers = getNumbersByProperties(numbersList, property, value).map(item => item.number);
  
  const data = [
    {
      id: spaceReplace(value),
      name: value,
      checked: false,
      numbers: numbers.sort((a, b) => a - b),
    }
  ];

  return (
    <div className={`line-bets ${property} ${spaceReplace(value)}`}>
      {data.map((value, index) => {
        return (
          <div className="form" key={index} >
            <label className={"form-label"} htmlFor={value.id} title={`${property.includes('Split') ? 'split' : property}: ${value.numbers}`}>
              <input className="form-input" type="checkbox" id={value.id} value={value.id}/>
              {value.checked && <span className="chip"></span>}
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default LineBets;
