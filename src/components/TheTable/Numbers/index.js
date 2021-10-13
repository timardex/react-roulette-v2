import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNumbersByProperties } from '../../../helpers';
import { setBet } from '../../../store/actions';

import chippEffect from '../../../assets/sounds/chip-effect.mp3';
import useAudio from '../../../hooks/useAudio';

import './style.scss';

const Numbers = (props) => {
  const { property, value } = props;

  // eslint-disable-next-line
  const [audioPlaying, audioToggle] = useAudio(chippEffect);

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
    dispatch(setBet(bet)).then(() => audioToggle());
  };

  const numbersList = useSelector(state => state.numbersList) || [];

  return (
    <div className={`columns ${value === 'green' ? 'number-zero' : ''}`}>
      {getNumbersByProperties(numbersList, property, value).map((value, index) => {
        return (
          <div className={`form`} key={index}>
            <label className={`form-label number-${value.name}`} htmlFor={value.id} title={`#${value.name}`}>
              <input
                className="form-input"
                type="checkbox"
                id={value.id}
                value={value.id}
                onChange={() => setSelectedBet(value)}/>

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