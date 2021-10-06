const allNumbers = [...Array(37).keys()];
const everyNth = nth => allNumbers.filter((e, i) => i % 3 === 3 - nth).filter(el => el !== 0);

const cylinders = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
const orphelins = [1, 20, 14, 31, 9, 6, 34, 17];
const voisons = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
const jeu0s = [12, 35, 3, 26, 0, 32, 15];
const wheelNumbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

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
  if(everyNth(2).includes(item)) {
    return '1st';
  }

  if(everyNth(1).includes(item)) {
    return '2nd';
  }

  if(everyNth(3).includes(item)) {
    return '3rd';
  }

  return 'neutral';
};

const numbersList = allNumbers.map((number, index) => {
  return {
    id: `${number}`,
    name: `${number}`,
    number,
    checked: false,
    properties: {
      evenOdd: number > 0 ? index % 2 === 0 ? 'even' : 'odd' : 'neutral',
      highLow: number > 0 ? number >= 1 && number <= 18 ? '1 to 18' : '19 to 36' : 'neutral',
      color: color(number, index),
      raceTrack: raceTrack(number),
      dozen: dozen(number),
      column: column(number),
      onWheel: wheelNumbers.findIndex(wheel => wheel === number),
    },
  };
});

export default numbersList;
