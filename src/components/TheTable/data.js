import { removeDubs } from '../../helpers';
import numbersList from '../../store/numbers';
import { columnLine1, columnLine2, columnLine3 } from '../../store/numbers/arrays';

export const one2one = [
  {
    property: 'highLow',
    value: '1-to-18',
  },
  {
    property: 'evenOdd',
    value: 'even',
  },
  {
    property: 'color',
    value: 'red',
  },
  {
    property: 'color',
    value: 'black',
  },
  {
    property: 'evenOdd',
    value: 'odd',
  },
  {
    property: 'highLow',
    value: '19-to-36',
  },
];

export const dozen = [
  {
    property: 'dozen',
    value: '1st-dozen',
  },
  {
    property: 'dozen',
    value: '2nd-dozen',
  },
  {
    property: 'dozen',
    value: '3rd-dozen',
  },
];

export const column = [
  {
    property: 'column',
    value: '3rd',
  },
  {
    property: 'column',
    value: '2nd',
  },
  {
    property: 'column',
    value: '1st',
  },
];

export const setupRaceTrack = numbersList.map((item) => {
  const property = 'raceTrack';
  const value = item.properties.raceTrack[0]
  return { property, value };
});

export const raceTrack = removeDubs(setupRaceTrack);

const streetSetup = numbersList.map((item) => {
  const property = 'street';
  const value = item.properties.street.length ? item.properties.street.find((el) => {
    return el.numbers.includes(item.number);
  }).name : null;
  return { property, value };
}).filter(item => item.value !== null);


export const street = removeDubs(streetSetup);

const sixLineSetup = numbersList.map((item) => {
  const property = 'sixline';
  const value = item.properties.sixline.find((el) => {
    return el.numbers.includes(item.number);
  }).name;
  
  return { property, value };
});

export const sixLine = removeDubs(sixLineSetup);

const horizontalSplitsByColumn = (array) => {
  const horizontalSplitSetup = numbersList.map((item, index) => index !== 0 ? item.properties.horizontalSplit : '')
    .filter(item => item !== '').reduce((a, b) => a.concat(b));

  const result = removeDubs(horizontalSplitSetup).map((col) => {
    const arrayHasNumbers = col.numbers.map(el => {
      return array.includes(el);
    }).includes(true);
    const property = 'horizontalSplit';
    const value = col.name;
    return arrayHasNumbers ? { property, value } : '';
  }).filter(item => item !== '');

  return result;
};

export const horizontalSplits = {
  column3: horizontalSplitsByColumn(columnLine3),
  column2: horizontalSplitsByColumn(columnLine2),
  column1: horizontalSplitsByColumn(columnLine1),
};