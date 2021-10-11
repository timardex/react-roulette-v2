import React from "react";

import './style.scss';

import {
  column,
  street,
  sixLine,
  horizontalSplits,
  verticalSplits,
  corners
} from '../data';

import Numbers from '../Numbers';
import LineBets from '../LineBets';
import OutsideNumbers from '../OutsideNumbers';

const InsideBets = () => {
  return(
    <div className="inside-bets">
      <Numbers property="color" value="green"/>
      <div>
        {['3rd', '2nd', '1st'].map((item) => {
          return <Numbers property="column" value={item} key={item}/>
        })}
        
        <div className="column-line">
          {column.map((item) => {
            return <OutsideNumbers
              key={item.value}
              property={item.property}
              value={item.value}/>
          })}
        </div>

        <div id="street-bets">
          {street.map((item) => {
            return <LineBets
              key={item.value}
              property={item.property}
              value={item.value}/>
          })}
        </div>

        <div id="sixline-bets">
          {sixLine.map((item) => {
            return <LineBets
              key={item.value}
              property={item.property}
              value={item.value}/>
          })}
        </div>

        <div id="vertical-splits">
          {Object.keys(verticalSplits).map((col) => {
            return <div className={`${col} col`} key={col}>
              {verticalSplits[col].map((item) => {
                return <LineBets
                  key={item.value}
                  property={item.property}
                  value={item.value}/>
              })}
            </div>
          })}
        </div>

        <div id="horizontal-splits">
          {Object.keys(horizontalSplits).map((col) => {
            return <div className={`${col} col`} key={col}>
              {horizontalSplits[col].map((item) => {
                return <LineBets
                  key={item.value}
                  property={item.property}
                  value={item.value}/>
              })}
            </div>
          })}
        </div>

        <div id="corners">
          {Object.keys(corners).map((col) => {
            return <div className={`${col} col`} key={col}>
              {corners[col].map((item) => {
                return <LineBets
                  key={item.value}
                  property={item.property}
                  value={item.value}/>
              })}
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default InsideBets;
