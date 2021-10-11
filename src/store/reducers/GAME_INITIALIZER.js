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
} from '../../components/TheTable/data';
import { getNumbersByProperties } from '../../helpers';

const setupObject = (property, value) => {
  const numbers = getNumbersByProperties(numbersList, property, value).map(item => item.number);
  return {
    id: `${value}`,
    name: `${value}`,
    checked: false,
    numbers: numbers.sort((a, b) => a - b),
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
      split1: setupState(horizontalSplits.column1),
      split2: setupState(horizontalSplits.column2),
      split3: setupState(horizontalSplits.column3),
    },
    verticalSplits: {
      split1: setupState(verticalSplits.split1),
      split2: setupState(verticalSplits.split2),
    },
    corners: {
      corner1: setupState(corners.corner1),
      corner2: setupState(corners.corner2),
    },
    ballEffect: new Audio(require('../../assets/sounds/ball-effect.mp3')),
    chipEffect: new Audio(require('../../assets/sounds/chip-effect.mp3')),
    rotateWheel: '',
    rotateBall: '',
  };
};

export default GAME_INITIALIZER;