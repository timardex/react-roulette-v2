import React from 'react';

import './style.scss';

import WheelStand from './WheelStand';
import Numbers from './Numbers';

const TheTable = () => {
  return (
    <div id="the-table">
      <WheelStand />
      <div className="the-table-inner">
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
