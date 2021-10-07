import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

const WheelStand = () => {
  const numbersList = useSelector(state => state.numbersList) || [];
  const rotateWheel = useSelector(state => state.rotateWheel) || '';
  const rotateBall = useSelector(state => state.rotateBall) || '';

  const data = numbersList.map(el => el).sort((a, b) => a.properties.onWheel - b.properties.onWheel);
  
  return (
    <div id="wheel-stand">
      <div className="wheel-box">
        <div className="ball-track"></div>
      </div>
      
      <div className={`r-wheel ${rotateWheel}`}>
        <ul>
          {data.map((value, index) => {
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
