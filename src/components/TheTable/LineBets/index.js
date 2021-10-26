import React from "react";
import Form from '../Form';
import './style.scss';

const LineBets = (props) => {
  const { data } = props;

  return (
    <div className={`line-bets ${data.className}`}>
      <Form value={data} showName={false}/>
    </div>
  );
};

export default LineBets;
