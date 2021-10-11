import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import WheelStand from './WheelStand';
import OutsideNumbers from './OutsideNumbers';
import InsideBets from './InsideBets';


const TheTable = () => {
  const one2one = useSelector(state => state.one2one) || [];
  const dozen = useSelector(state => state.dozen) || [];
  const raceTrack = useSelector(state => state.raceTrack) || [];

  return (
    <div id="the-table">
      <WheelStand />
      <div className="the-table-inner">
        <div className="outside-numbers">
          {one2one.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>

        <div className="outside-numbers">
          {dozen.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>

        <InsideBets />

        <div className="outside-numbers">
          {raceTrack.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default TheTable;
