import React from 'react';
import Form from '../../Form';
import './style.scss';

const OutsideNumbers = (props) => {
  const { data } = props;

  return (
    <div className={`other-bets ${data.className}`}>
      <Form value={data} showName={true}/>
    </div>
  );
};

export default OutsideNumbers;