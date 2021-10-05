import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import { getNumbersByProperties } from '../../helpers';

import WheelStand from './WheelStand';

const TheTable = () => {
  const numbersList = useSelector(state => state.numbersList) || [];
  //console.log(getNumbersByProperties(numbersList, 'color', 'green'));

  return (
    <div id="the-table">
      <WheelStand numbers={numbersList}/>
    </div>
  );
};

export default TheTable;
