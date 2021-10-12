import { removeDubs } from '../../helpers';
import numbersList from './';
import { columnLine1, columnLine2, columnLine3 } from './arrays';

export const one2one = [
  {
    property: 'highLow',
    value: '1-18',
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
    value: '19-36',
  },
];

const setupDozen = numbersList.map((item) => {
  const property = 'dozen';
  const value = item.properties.dozen;
  return { property, value };
}).filter(item => item.value !== 'neutral');

export const dozen = removeDubs(setupDozen);

const setupColumn = numbersList.map((item) => {
  const property = 'column';
  const value = item.properties.column;
  return { property, value };
}).filter(item => item.value !== 'neutral').sort((a, b) => a.value < b.value ? 1 : -1);

export const column = removeDubs(setupColumn);

const setupRaceTrack = numbersList.map((item) => {
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
    const arrayHasNumbers = col.numbers.map((number) => {
      return array.includes(number);
    }).includes(true);
    const property = 'horizontalSplit';
    const value = col.name;
    return arrayHasNumbers ? { property, value } : '';
  }).filter(item => item !== '');

  return result;
};

export const horizontalSplits = {
  split3: horizontalSplitsByColumn(columnLine3),
  split2: horizontalSplitsByColumn(columnLine2),
  split1: horizontalSplitsByColumn(columnLine1),
};

const verticalSplitSetup = removeDubs(
  numbersList.map((item, index) => index !== 0 ? item.properties.verticalSplit : '')
    .filter(item => item !== '').reduce((a, b) => a.concat(b))
).map((item) => {
  const property = 'verticalSplit';
  const value = item.name;
  return { property, value };
});

export const verticalSplits = {
  split4: verticalSplitSetup.filter((el, index) => index % 2 !== 0),
  split5: verticalSplitSetup.filter((el, index) => index % 2 === 0),
};

const setupCorner = numbersList.map((item) => {
  return item.properties.corner.map((el) => {
    const property = 'corner';
    const value = el.name;

    return { property, value };
  });
}).reduce((a, b) => a.concat(b));

export const corners = {
  corner1: removeDubs(setupCorner).filter((el, index) => index % 2 !== 0),
  corner2: removeDubs(setupCorner).filter((el, index) => index % 2 === 0)
};
