import React from 'react';
import { useSelector } from 'react-redux';

import { getNumbersByProperties } from '../../../helpers';

import './style.scss';

const WheelStand = () => {
  const numbersList = useSelector(state => state.numbersList) || [];
  const rotateWheel = useSelector(state => state.rotateWheel) || '';
  const rotateBall = useSelector(state => state.rotateBall) || '';

  const numbers = numbersList.sort((a, b) => a.onWheel - b.onWheel);
  
  return (
    <div id="wheel-stand">
      <div className="wheel-box">
          <div className="ball-track"></div>
      </div>
      <div className={`r-wheel ${rotateWheel}`}>
          <ul>
              {numbers.map((value, index) => {
                  return <li className={`number number-${value.number}`} key={index} style={{borderTopColor: value.properties.color}}>
                    <span className="pit">{value.number}</span>
                  </li>
              })}
          </ul>
          <div className="wheel-inner">
              <div className="wheel-inner-center"></div>
          </div>
      </div>
      <div className={`r-ball ${rotateBall}`}></div>
    </div>
  );
};

export default WheelStand;
