import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';

const SelectedBets = (props) => {
  const { insideBet } = props;
  const numbersChecked = useSelector(state => state.numbersChecked) || [];
  
  return(
    <ul className={`selected-numbers ${insideBet ? 'inside-bet' : 'outside-bet'}`}>
      {numbersChecked.filter(item => item.insideBet === insideBet).map((item) => {
        return <li key={item.name}
          style={{backgroundColor: item.insideBet ? item.properties.color : '#3f3f3f'}}>
            {item.name}
          </li>
      })}
    </ul>
  );
};

export default SelectedBets;