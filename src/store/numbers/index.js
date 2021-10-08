import { removeDubs } from '../../helpers';
import {
  splitHorizontal,
  splitVertical,
  sixLineChunk,
  streetChunk,
  color,
  dozen,
  column,
  raceTrack,
} from './helpers';
import {
  allNumbers,
  wheelNumbers,
  columnLine1,
  columnLine2,
  columnLine3,
} from './arrays';

const numbersList = allNumbers.map((number, index) => {
  const evenOdd = number > 0
    ? index % 2 === 0 ? 'even' : 'odd'
    : 'neutral';

  const highLow = number > 0
    ? number >= 1 && number <= 18 ? '1 to 18' : '19 to 36'
    : 'neutral';

  const street = number !== 0
    ? streetChunk(columnLine1, columnLine2, columnLine3)
        .find((street) => street.numbers.includes(number))
    : '';

  const sixline = sixLineChunk(allNumbers)
    .filter((line) => line.numbers.includes(number))
    .map(item => item.name);

  const horizontalSplit = removeDubs([
    ...splitHorizontal([0, ...columnLine1]),
    ...splitHorizontal([0, ...columnLine2]),
    ...splitHorizontal([0, ...columnLine3])
  ]).filter(split => split.numbers.includes(number));

  const verticalSplit = splitVertical().filter(split => split.numbers.includes(number));

  return {
    id: `${number}`,
    name: `${number}`,
    number,
    checked: false,
    properties: {
      evenOdd,
      highLow,
      street: street.name,
      color: color(number, index),
      raceTrack: raceTrack(number),
      dozen: dozen(number),
      column: column(number),
      onWheel: wheelNumbers.findIndex(wheel => wheel === number),
      sixline,
      horizontalSplit,
      verticalSplit
    },
  };
});
console.log(numbersList)
export default numbersList;
