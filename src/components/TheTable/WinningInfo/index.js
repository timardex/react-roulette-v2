import React from "react";
import { useSelector } from 'react-redux';
import chipImg from '../../../assets/images/chip2.png';

import './style.scss';

const WinningInfo = () => {
  const { numbers } = useSelector(state => state.winners) || [];
  return(
    <div id="winning-info">
      {typeof numbers !== 'undefined' && numbers.length > 0 && <p>Winning with:</p>}
      <ul>
        {typeof numbers !== 'undefined' ? numbers.map((item) => {
          return <li key={item.name}>
            <span>{item.name}</span>
            <div>
              <span>{item.chipCount * item.winingOdd}</span>
              <img key={item.name} src={chipImg} alt="Chip"/>
            </div>
          </li>
        }) : []}
      </ul>
    </div>
  );
};

export default WinningInfo;