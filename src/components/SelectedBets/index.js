import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';

const SelectedBets = (props) => {
  const { insideBet } = props;
  const numbersChecked = useSelector(state => state.numbersChecked) || [];
  const unique = numbersChecked.filter((v,i,a)=> a.findIndex(t => (t.name === v.name)) === i);
  
  return(
    <ul className={`selected-numbers ${insideBet ? 'inside-bet' : 'outside-bet'}`}>
      {unique.filter(item => item.insideBet === insideBet).map((item) => {
        return <li key={item.name}
          style={{backgroundColor: item.insideBet ? item.properties.color : '#3f3f3f'}}>
            {item.name}
          </li>
      })}
    </ul>
  );
};

export default SelectedBets;