import React from 'react';

import './style.scss';

import WheelStand from './WheelStand';
import Numbers from './Numbers';
import OutsideNumbers from './OutsideNumbers';

const TheTable = () => {
  return (
    <div id="the-table">
      <WheelStand />
      <div className="the-table-inner">
        <div className="one-2-one">
          <OutsideNumbers property="highLow" value="1 to 18"/>
          <OutsideNumbers property="evenOdd" value="even"/>
          <OutsideNumbers property="color" value="red"/>
          <OutsideNumbers property="color" value="black"/>
          <OutsideNumbers property="evenOdd" value="odd"/>
          <OutsideNumbers property="highLow" value="19 to 36"/>
        </div>
        <div className="all-numbers">
          <Numbers property="color" value="green"/>
          <div>
            <Numbers property="column" value="3rd column"/>
            <Numbers property="column" value="2nd column"/>
            <Numbers property="column" value="1st column"/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TheTable;
