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
import { getNumbersByProperties, spaceReplace } from '../../helpers';

/* Setting up random numbers when game initialized for the first time */
const lastNumbers = [...numbersList].sort(() => Math.random() - Math.random()).slice(0, 7);

const setupObject = (property, value, winingOdd) => {
  const numbers = getNumbersByProperties(numbersList, property, value).map(item => item.numbers[0]);
  return {
    id: spaceReplace(value),
    name: `${value}`,
    numbers: numbers.sort((a, b) => a - b),
    className: property,
    insideBet: false,
    chipCount: 0,
    winingOdd,
  };
};

const setupState = array => array.map(item => setupObject(item.property, item.value, item.winingOdd));

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
    spinBtnText: 'Spin it!',
    outputNumber: null,
    ballIsSpinning: false,
    numbersChecked: [],
    lastNumbers: lastNumbers,
    winningNumber: null,
    winners: [],
    previousBets: [],
    currentChip: 20,
    enableSounds: false,
    gameInfo: {},
  };
};

export default GAME_INITIALIZER;