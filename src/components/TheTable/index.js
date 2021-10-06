import React from 'react';

import './style.scss';
import { one2one, dozen, column, raceTrack } from './data';

import WheelStand from './WheelStand';
import Numbers from './Numbers';
import OutsideNumbers from './OutsideNumbers';

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

        <div className="all-numbers">
          <Numbers property="color" value="green"/>
          <div>
            <Numbers property="column" value="3rd"/>
            <Numbers property="column" value="2nd"/>
            <Numbers property="column" value="1st"/>
            <div className="column-line">
              {column.map((item) => {
                return <OutsideNumbers
                  key={item.value}
                  property={item.property}
                  value={item.value}/>
              })}
            </div>
          </div>
        </div>

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
