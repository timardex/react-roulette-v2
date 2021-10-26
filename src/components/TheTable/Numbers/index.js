import React from 'react';
import { useSelector } from 'react-redux';
import { getNumbersByProperties } from '../../../helpers';

import Form from '../Form';

import './style.scss';

const Numbers = (props) => {
  const { property, value } = props;

  const numbersList = useSelector(state => state.numbersList) || [];
  
  return (
    <div className={`columns ${value === 'green' ? 'number-zero' : ''}`}>
      {getNumbersByProperties(numbersList, property, value).map((value, index) => {
        return (
          <Form key={index} value={value} showName={true}/>
        )
      })}
    </div>
  );
};

export default Numbers;