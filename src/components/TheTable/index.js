import React from 'react';

import './style.scss';
import {
  one2one,
  dozen,
  raceTrack,
} from './data';

import WheelStand from './WheelStand';
import OutsideNumbers from './OutsideNumbers';
import InsideBets from './InsideBets';


const TheTable = () => {
  return (
    <div id="the-table">
      <WheelStand />
      <div className="the-table-inner">
        <div className="outside-numbers">
          {one2one.map((item) => {
            return <OutsideNumbers
              className="one-2-one"
              key={item.value}
              property={item.property}
              value={item.value}/>
          })}
        </div>

        <div className="outside-numbers">
          {dozen.map((item) => {
            return <OutsideNumbers
              className="dozen"
              key={item.value}
              property={item.property}
              value={item.value}/>
          })}
        </div>

        <InsideBets />

        <div className="outside-numbers">
          {raceTrack.map((item) => {
            return <OutsideNumbers
              className="race-track"
              key={item.value}
              property={item.property}
              value={item.value}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default TheTable;
