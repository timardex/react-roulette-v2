import React from "react";

import './style.scss';

const LineBets = (props) => {
  const { data } = props;

  return (
    <div className={`line-bets ${data.className}`}>
      <div className="form">
        <label className={"form-label"} htmlFor={data.id} title={`${data.className}: ${data.numbers}`}>
          <input className="form-input" type="checkbox" id={data.id} value={data.id}/>
          {data.checked && <span className="chip"></span>}
        </label>
      </div>
    </div>
  );
};

export default LineBets;
