import React from "react";
import { useSelector } from 'react-redux';

import './style.scss';

import Numbers from '../Numbers';
import LineBets from '../LineBets';
import OutsideNumbers from '../OutsideNumbers';

const InsideBets = () => {
  const column = useSelector(state => state.column) || [];
  const street = useSelector(state => state.street) || [];
  const sixLine = useSelector(state => state.sixLine) || [];
  const horizontalSplits = useSelector(state => state.horizontalSplits) || [];
  const verticalSplits = useSelector(state => state.verticalSplits) || [];
  const corners = useSelector(state => state.corners) || [];

  return(
    <div id="inside-bets">
      <Numbers property="color" value="green"/>
      <div>
        {['3rd', '2nd', '1st'].map((item) => {
          return <Numbers property="column" value={item} key={item}/>
        })}
        
        <div id="column-line">
          {column.map((item) => <OutsideNumbers key={item.id} data={item}/>)}
        </div>

        <div id="street-bets">
          {street.map((item) => <LineBets key={item.id} data={item}/>)}
        </div>

        <div id="sixline-bets">
          {sixLine.map((item) => <LineBets key={item.id} data={item}/>)}
        </div>

        <div id="vertical-splits">
          {Object.keys(verticalSplits).map((col) => {
            return <div className={`${col} col`} key={col}>
              {verticalSplits[col].map((item) => <LineBets key={item.id} data={item}/>)}
            </div>
          })}
        </div>

        <div id="horizontal-splits">
          {Object.keys(horizontalSplits).map((col) => {
            return <div className={`${col} col`} key={col}>
              {horizontalSplits[col].map((item) => <LineBets key={item.id} data={item}/>)}
            </div>
          })}
        </div>

        <div id="corners">
          {Object.keys(corners).map((col) => {
            return <div className={`${col} col`} key={col}>
              {corners[col].map((item) => <LineBets key={item.id} data={item}/>)}
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default InsideBets;
