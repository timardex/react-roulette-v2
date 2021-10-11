import React from 'react';

import './style.scss';

const OutsideNumbers = (props) => {
  const { data } = props;
  return (
    <div className={`${data.className} other-bets`}>
      <div className="form" >
        <label className={"form-label"} htmlFor={data.id} title={data.numbers}>
          <input className="form-input" type="checkbox" id={data.id} value={data.id}/>
          <span className="number-name">{data.name}</span>
          {data.checked && <span className="chip"></span>}
        </label>
      </div>
    </div>
  );
};

export default OutsideNumbers;