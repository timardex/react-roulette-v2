import { everyNth } from '../../helpers';
import { columnLine1, columnLine2, columnLine3, orphelins, cylinders, voisons, jeu0s } from './arrays';

/* const corners = () => {
  const array = allNumbers;
  console.log(array)
};

corners(); */

export const splitHorizontal = (array) => {
  const splited = array.map((item, index) => {
    const result = array.slice(0, index + 2);
    return result.slice(-2);
  });
  
  return splited.map((numbers) => {
    const name = `${numbers[0]}-${numbers[1]}`;
    return { numbers, name };
  });
};

export const splitVertical = () => {
  const array = columnLine1.map((item, index) => {
    const newArray = [item, columnLine2[index], columnLine3[index]];
    const splited = newArray.map((el, elIndex) => {
      return newArray.slice(0, elIndex + 1);
    });
    const result = [splited[1], splited[2].slice(1)];
    return result;
  });

  const result = [];

  array.map((item) => {
    return item.forEach(child => result.push(child))
  });

  return result.map((numbers) => {
    const name = `${numbers[0]}-${numbers[1]}`;
    return { numbers, name };
  });
};

export const sixLineChunk = (array) => {
  const numbers = [...array];
  const slicedNumbers = numbers.map((item) => {
    return numbers.slice(item, item + 6);
  });
  
  const sixLineZero = slicedNumbers.find((item) => item.includes(0)).slice(0, 4);
  const sixLineOther = slicedNumbers.filter((item, index) => !item.includes(0) && index < 32);
  
  const result = [sixLineZero, ...everyNth(sixLineOther, 3)];
  
  return result.map((numbers, index) => {
    const name = `sixline-${index}`;
    return { numbers, name };
  });
};

export const streetChunk = (array1, array2, array3) => {
  const result = array1.map((item, index) => {
    return [item, array2[index], array3[index]];
  });
  
  return result.map((numbers, index) => {
    const name = `street-${index}`;
    return { numbers, name };
  });
};

export const color = (number, index) => {
  if((number >= 1 && number <= 10) || (number >= 19 && number <= 28)) {
    return index % 2 !== 0 ? 'red' : 'black';
  }

  if((number >= 11 && number <= 18) || (number >= 29 && number <= 36)) {
    return index % 2 === 0 ? 'red' : 'black';
  }

  return 'green';
};

export const dozen = ((number) => {
  if(number >= 1 && number <= 12) {
    return '1st-dozen';
  }

  if(number >= 13 && number <= 24) {
    return '2nd-dozen';
  }

  if(number >= 25) {
    return '3rd-dozen';
  }

  return 'neutral';
});

export const column = (item) => {
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

export const raceTrack = (item) => {
  if(cylinders.includes(item)) {
    return ['cylinder'];
  }

  if(orphelins.includes(item)) {
    return ['orphelin'];
  }

  return voisons.includes(item) && jeu0s.includes(item) ? ['voison', 'jeu0'] : ['voison'];
};