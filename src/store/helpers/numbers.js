const allNumbers = [...Array(37).keys()];

const everyNth = nth => allNumbers.filter((e, i) => i % 3 === 3 - nth).filter(el => el !== 0);

/* raceTrack */
const raceTrack = (item) => {
  const cylinders = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
  const orphelins = [1, 20, 14, 31, 9, 6, 34, 17];
  const voisons = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
  const jeu0s = [12, 35, 3, 26, 0, 32, 15];

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
    return '1st column';
  }

  if(everyNth(1).includes(item)) {
    return '2nd column';
  }

  if(everyNth(3).includes(item)) {
    return '3rd column';
  }

  return 'neutral';
};

const numbersList = allNumbers.map((item, index) => {
  const evenOdd = item > 0 ? index % 2 === 0 ? 'even' : 'odd' : 'neutral';
  const highLow = item > 0 ? item >= 1 && item <= 18 ? 'low' : 'high' : 'neutral';

  const properties = {
    evenOdd,
    highLow,
    raceTrack: raceTrack(item),
    color: color(item, index),
    dozen: dozen(item),
    column: column(item),
  };

  return {
    id: `${item}`,
    name: `${item}`,
    checked: false,
    number: item,
    properties,
  };
});

export default numbersList;