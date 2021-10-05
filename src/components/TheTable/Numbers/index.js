import React from 'react';
import './style.scss';

const Numbers = (props) => {
  const { numbers } = props;
  return (
    <div className="columns">
      {numbers.map((value, index) => {
        return (
          <div className={`form-check form-check-inline`} key={index}>
            <label className={`form-check-label number-${value.name}`} htmlFor={value.id} title={value.numbers}>
              <input className="form-check-input" type="checkbox" id={value.id} value={value.id} />
              <span className="number-name" style={{color: value.properties.color}}>{value.name}</span>
              {value.checked && <span className="chip"></span>}
              <span className="dolly"></span>
            </label>
          </div>
        )
      })}
    </div>
  );
};

export default Numbers;