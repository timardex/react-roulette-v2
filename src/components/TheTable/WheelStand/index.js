import React from 'react';
import './style.scss';

const WheelStand = (props) => {
  const numbers = props.numbers.sort((a, b) => a.onWheel - b.onWheel);
  console.log(numbers)
  return (
    <div id="wheel-stand">
      <div className="wheel-box">
          <div className="ball-track"></div>
      </div>
      <div className="r-wheel">
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
      <div className="r-ball"></div>
    </div>
  );
};

export default WheelStand;
