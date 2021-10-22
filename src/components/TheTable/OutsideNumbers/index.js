import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBet } from '../../../store/actions';

import DeleteBet from '../../DeleteBet';

import chip from '../../../assets/images/chip.png';
import './style.scss';

const OutsideNumbers = (props) => {
  const { data } = props;
  const currentChip = useSelector(state => state.currentChip) || null;

  const dispatch = useDispatch();
  const setSelectedBet = (bet) => {
   if(currentChip > 0) {
      dispatch(setBet(bet));
    }
  };

  return (
    <div className={`${data.className} other-bets`}>
      <div className="form">
        <label className="form-label" htmlFor={data.id} title={data.numbers}>
          <input
            className="form-input"
            type="checkbox"
            id={data.id}
            value={data.id}
            onClick={() => setSelectedBet(data)}/>

          <span className="number-name">{data.name}</span>

          {data.chipCount > 0 && <div className="chip">
            <span>{data.chipCount}</span>
            <img src={chip} alt="Chip"/>
          </div>}
        </label>

        {data.chipCount > 0 && <DeleteBet value={data}/>}
      </div>
    </div>
  );
};

export default OutsideNumbers;