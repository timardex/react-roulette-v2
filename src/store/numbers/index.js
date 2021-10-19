import { removeDubs } from '../../helpers';
import {
  splitHorizontal,
  splitVertical,
  sixLineChunk,
  streetChunk,
  corners,
  color,
  dozen,
  column,
  raceTrack,
  evenOdd,
  highLow,
} from './helpers';
import {
  allNumbers,
  wheelNumbers,
  columnLine1,
  columnLine2,
  columnLine3,
} from './arrays';

const numbersList = allNumbers.map((number, index) => {
  const filterArrayByNumber = (array) => {
    return array.filter((item) => item.numbers.includes(number));
  };

  const street = streetChunk(columnLine1, columnLine2, columnLine3);
  const sixline = sixLineChunk(allNumbers);

  const horizontalSplit = removeDubs([
    ...splitHorizontal([0, ...columnLine1]),
    ...splitHorizontal([0, ...columnLine2]),
    ...splitHorizontal([0, ...columnLine3])
  ]);

  return {
    id: `${number}`,
    name: `${number}`,
    numbers: number,
    checked: false,
    insideBet: true,
    properties: {
      highLow: highLow(number),
      evenOdd: evenOdd(number, index),
      color: color(number, index),
      raceTrack: raceTrack(number),
      dozen: dozen(number),
      column: column(number),
      onWheel: wheelNumbers.findIndex(wheel => wheel === number),
      street: filterArrayByNumber(street),
      sixline: filterArrayByNumber(sixline),
      horizontalSplit: filterArrayByNumber(horizontalSplit),
      verticalSplit: filterArrayByNumber(splitVertical()),
      corner: filterArrayByNumber(corners())
    },
  };
});
console.log(numbersList)
export default numbersList;