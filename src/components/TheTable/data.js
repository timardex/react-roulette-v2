import { removeDubs } from '../../helpers';
import numbersList from '../../store/helpers/numbers';

export const one2one = [
  {
    property: 'highLow',
    value: '1 to 18',
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
    value: '19 to 36',
  },
];

export const dozen = [
  {
    property: 'dozen',
    value: '1st dozen',
  },
  {
    property: 'dozen',
    value: '2nd dozen',
  },
  {
    property: 'dozen',
    value: '3rd dozen',
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

export const raceTrack = [
  {
    property: 'raceTrack',
    value: 'cylinder',
  },
  {
    property: 'raceTrack',
    value: 'orphelin',
  },
  {
    property: 'raceTrack',
    value: 'voison',
  },
  {
    property: 'raceTrack',
    value: 'jeu0',
  },
];

const streetSetup = numbersList.map((item) => {
  const property = 'street';
  const value = item.properties.street || '';
  return { property, value };
}).filter(item => item.value !== '');

export const street = removeDubs(streetSetup);

const sixLineSetup = numbersList.map((item) => {
  const property = 'sixline';
  const value = item.properties.sixline[item.properties.sixline.length - 1];
  return { property, value };
});

export const sixLine = removeDubs(sixLineSetup);

