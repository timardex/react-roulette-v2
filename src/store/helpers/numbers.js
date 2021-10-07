import { everyNth } from '../../helpers';

const allNumbers = [...Array(37).keys()];
const cylinders = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
const orphelins = [1, 20, 14, 31, 9, 6, 34, 17];
const voisons = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
const jeu0s = [12, 35, 3, 26, 0, 32, 15];
const wheelNumbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
const columnLine1 = [...everyNth(allNumbers, 2)];
const columnLine2 = [...everyNth(allNumbers, 1)];
const columnLine3 = [...everyNth(allNumbers, 3)];

const splitChunk = () => {
  const colum3 = [...columnLine3];
  const colum2 = [...columnLine2];
  const colum1 = [...columnLine1];

  const splitVertical = () => {
    const array = colum1.map((item, index) => {
      return [item, colum2[index], colum3[index]];
    });
    return array;
  };

  console.log(splitVertical())

  /* const splitHorizontal = (array) => {
    return array.unshift(0).map((item, index) => {
      const result = array.slice(0, index + 2);
      return result.slice(-2);
    });
  }; */
  /* const splitCol3 = splitHorizontal(colum3);
  const splitCol2 = splitHorizontal(colum2);
  const splitCol1 = splitHorizontal(colum1); */
};

splitChunk()

const sixLineChunk = () => {
  const numbers = [...allNumbers];
  const slicedNumbers = numbers.map((item) => {
    return numbers.slice(item, item + 6);
  });
  const sixLineZero = slicedNumbers.find((item) => item.includes(0)).slice(0, 4);
  const sixLineOther = slicedNumbers.filter((item, index) => !item.includes(0) && index < 32);
  
  const result = [sixLineZero, ...everyNth(sixLineOther, 3)];
  
  return result.map((numbers, index) => {
    const name = `sixline ${index}`;
    return { numbers, name };
  });
};
/* Street */
const streetChunk = () => {
  /* const result = allNumbers.reduce((memo, value, index) => {
    if (index % 3 === 1 && index !== 0) memo.push([])
    memo[memo.length - 1].push(value)
    return memo
  }, [[]]); */

  const result = columnLine1.map((item, index) => {
    return [item, columnLine2[index], columnLine3[index]];
  });
  
  return result.map((numbers, index) => {
    const name = `street ${index}`;
    return { numbers, name };
  });
};

/* raceTrack */
const raceTrack = (item) => {
  if(cylinders.includes(item)) {
    return ['cylinder'];
  }

  if(orphelins.includes(item)) {
    return ['orphelin'];
  }

  return voisons.includes(item) && jeu0s.includes(item) ? ['voison', 'jeu0'] : ['voison'];
};

/* Color */
const color = (item, index) => {
  if((item >= 1 && item <= 10) || (item >= 19 && item <= 28)) {
    return index % 2 !== 0 ? 'red' : 'black';
  }

  if((item >= 11 && item <= 18) || (item >= 29 && item <= 36)) {
    return index % 2 === 0 ? 'red' : 'black';
  }

  return 'green';
};

/* Dozen */
const dozen = ((item) => {
  if(item >= 1 && item <= 12) {
    return '1st dozen';
  }

  if(item >= 13 && item <= 24) {
    return '2nd dozen';
  }

  if(item >= 25) {
    return '3rd dozen';
  }

  return 'neutral';
});

/* Column */
const column = (item) => {
  if(columnLine1.includes(item)) {
    return '1st';
  }

  if(columnLine2.includes(item)) {
    return '2nd';
  }

  if(columnLine3.includes(item)) {
    return '3rd';
  }

  return 'neutral';
};

const numbersList = allNumbers.map((number, index) => {
  const evenOdd = number > 0 ? index % 2 === 0 ? 'even' : 'odd' : 'neutral';
  const highLow = number > 0 ? number >= 1 && number <= 18 ? '1 to 18' : '19 to 36' : 'neutral';
  const street = number !== 0 ? streetChunk().find((street) => street.numbers.includes(number)) : '';
  const sixline = sixLineChunk().filter((line) => line.numbers.includes(number));

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
    },
  };
});

export default numbersList;
