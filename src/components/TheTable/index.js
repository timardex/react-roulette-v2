import React from 'react';

import './style.scss';
import { one2one, dozen, column, raceTrack, street, sixLine } from './data';

import WheelStand from './WheelStand';
import Numbers from './Numbers';
import OutsideNumbers from './OutsideNumbers';
import LineBets from './LineBets';

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
            {['3rd', '2nd', '1st'].map((item) => {
              return <Numbers property="column" value={item} key={item}/>
            })}
            
            <div className="column-line">
              {column.map((item) => {
                return <OutsideNumbers
                  key={item.value}
                  property={item.property}
                  value={item.value}/>
              })}
            </div>

            <div id="street-bets">
              {street.map((item) => {
                return <LineBets
                  key={item.value}
                  property={item.property}
                  value={item.value}/>
              })}
            </div>

            <div id="sixline-bets">
              {sixLine.map((item) => {
                return <LineBets
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
