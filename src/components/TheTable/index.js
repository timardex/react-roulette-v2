import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import { getNumbersByProperties } from '../../helpers';

import WheelStand from './WheelStand';
import Numbers from './Numbers';

const TheTable = () => {
  const numbersList = useSelector(state => state.numbersList) || [];
  console.log(numbersList)
  //console.log(getNumbersByProperties(numbersList, 'color', 'green'));

  return (
    <div id="the-table">
      <WheelStand numbers={numbersList}/>
      <div className="the-table-inner">
        <div className="all-numbers">
          <Numbers numbers={getNumbersByProperties(numbersList, 'color', 'green')}/>
          <div>
            <Numbers numbers={getNumbersByProperties(numbersList, 'column', '3rd column')}/>
            <Numbers numbers={getNumbersByProperties(numbersList, 'column', '2nd column')}/>
            <Numbers numbers={getNumbersByProperties(numbersList, 'column', '1st column')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTable;
