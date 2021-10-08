import { removeDubs } from '../../helpers';
import { splitHorizontal, sixLineChunk, streetChunk, color, dozen, column, raceTrack } from './helpers';
import { allNumbers, wheelNumbers, columnLine1, columnLine2, columnLine3 } from './arrays';

/* const splitChunk = () => {
  const splitVertical = () => {
    const array = columnLine1.map((item, index) => {
      return [item, columnLine2[index], columnLine3[index]];
    });
    return array;
  };

  console.log(splitVertical())
}; */

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

  const sixline = sixLineChunk(allNumbers).filter((line) => line.numbers.includes(number));

  const horizontalSplit = [
    ...splitHorizontal([0, ...columnLine1]),
    ...splitHorizontal([0, ...columnLine2]),
    ...splitHorizontal([0, ...columnLine3])
  ]

  return {
    id: `${number}`,
    name: `${number}`,
    number,
    checked: false,
    properties: {
      evenOdd,
      highLow,
      color: color(number, index),
      raceTrack: raceTrack(number),
      dozen: dozen(number),
      column: column(number),
      onWheel: wheelNumbers.findIndex(wheel => wheel === number),
      street: street.name,
      sixline: sixline.map(item => item.name),
      horizontalSplit: removeDubs(horizontalSplit).filter(split => split.includes(number))
    },
  };
});
console.log(numbersList)
export default numbersList;
