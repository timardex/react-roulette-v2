import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';

const LastNumbers = () => {
  const lastNumbers = useSelector(state => state.lastNumbers) || [];
  
  const setNumberPlacement = (color) => {
    switch(color) {
      case 'black':
        return 'flex-end';
      case 'red':
        return 'flex-start';
      default:
        return 'center';
    }
  }

  return(
    <div id="last-numbers">
      <div>
        <h4 className="text-center">Last 7 numbers:</h4>
        <ul>
          {lastNumbers.slice(0, 7).map((item, index) => {
            return <li key={index} style={{justifyContent: setNumberPlacement(item.properties.color)}}>
              <span style={{backgroundColor: item.properties.color}}>{item.name}</span>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default LastNumbers;
