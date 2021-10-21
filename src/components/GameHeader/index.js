import React from 'react';
import { useSelector } from 'react-redux';

import chipImg from '../../assets/images/chip2.png';
import './style.scss';

const GameHeader = () => {
  const currentChip = useSelector(state => state.currentChip) || null;
  const chips = [...Array(currentChip).keys()];

  const chipsArray = chips.map((item, index) => {
    return index % 20 === 0 ? chips.slice(index, index + 20) : null
  }).filter(el => el);

  return (
    <header>
      <h1 className="text-center mt-2 mb-1">
        Roulette Presentation
        <small className="d-block">Try your luck!</small>
      </h1>

      <div id="chip-container">
        {chipsArray.map((chip, index) => {
          return <div className="current-chip" key={index}>
            <span>{chip.length}</span>
            {chip.map((item, itemIndex) => {
              return <img key={item} className="chip" src={chipImg} alt="Chip" style={{bottom: itemIndex * 2}}/>
            })}
          </div>
        })}
      </div>
    </header>
  );
};

export default GameHeader;
