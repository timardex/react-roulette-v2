import numbersList from '../numbers';
import {
  raceTrack,
  one2one,
  dozen,
  column,
  street,
  sixLine,
  horizontalSplits,
  verticalSplits,
  corners,
} from '../numbers/data';
import { getNumbersByProperties } from '../../helpers';

const setupObject = (property, value) => {
  const numbers = getNumbersByProperties(numbersList, property, value).map(item => item.numbers);
  return {
    id: `${value}`,
    name: `${value}`,
    checked: false,
    numbers: numbers.sort((a, b) => a - b),
    className: property,
  }
};

const setupState = array => array.map(item => setupObject(item.property, item.value));

const GAME_INITIALIZER = (state) => {
  return {
    ...state,
    numbersList,
    raceTrack: setupState(raceTrack),
    one2one: setupState(one2one),
    dozen: setupState(dozen),
    column: setupState(column),
    street: setupState(street),
    sixLine: setupState(sixLine),
    horizontalSplits: {
      split3: setupState(horizontalSplits.split3),
      split2: setupState(horizontalSplits.split2),
      split1: setupState(horizontalSplits.split1),
    },
    verticalSplits: {
      split4: setupState(verticalSplits.split4),
      split5: setupState(verticalSplits.split5),
    },
    corners: {
      corner1: setupState(corners.corner1),
      corner2: setupState(corners.corner2),
    },
    rotateWheel: 'rotate-right',
    rotateBall: 'd-none',
    outputNumber: null,
    ballIsSpinning: false,
    numbersChecked: [],
  };
};

export default GAME_INITIALIZER;