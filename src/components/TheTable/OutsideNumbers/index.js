import React from 'react';
import { useDispatch } from 'react-redux';

import { setBet } from '../../../store/actions';
import chippEffect from '../../../assets/sounds/chip-effect.mp3';
import useAudio from '../../../hooks/useAudio';

import './style.scss';

const OutsideNumbers = (props) => {
  const { data } = props;

  // eslint-disable-next-line
  const [audioPlaying, audioToggle] = useAudio(chippEffect);

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
    dispatch(setBet(bet)).then(() => audioToggle());
  };

  return (
    <div className={`${data.className} other-bets`}>
      <div className="form" >
        <label className={"form-label"} htmlFor={data.id} title={data.numbers}>
          <input
            className="form-input"
            type="checkbox"
            id={data.id}
            value={data.id}
            onChange={() => setSelectedBet(data)}/>
          <span className="number-name">{data.name}</span>
          {data.checked && <span className="chip"></span>}
        </label>
      </div>
    </div>
  );
};

export default OutsideNumbers;