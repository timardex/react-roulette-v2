import { everyNth } from '../../helpers';
import { columnLine1, columnLine2, columnLine3, orphelin, cylinder, voison, jeu0 } from './arrays';

export const corners = () => {
  const setupCornerArray = (array1, array2) => {
    return array1.map((item, index) => {
      const column1 = array2.slice(index, index + 2);
      const column2 = array1.slice(index, index + 2);
      return [...column1, ...column2];
    }).slice(0, -1);
  }

  const array1 = [...[[0,1,2]], ...setupCornerArray(columnLine2, columnLine1)];
  const array2 = [...[[0,2,3]], ...setupCornerArray(columnLine2, columnLine3)];

  const setupArray = (array) => {
    return array.map((numbers) => {
      const name = numbers.toString().replace(/,/g, '-');
      return { numbers, name };
    });
  };

  return [...setupArray(array1), ...setupArray(array2)];
};

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
  if(cylinder.includes(item)) {
    return ['cylinder'];
  }

  if(orphelin.includes(item)) {
    return ['orphelin'];
  }

  return voison.includes(item) && jeu0.includes(item) ? ['jeu0', 'voison'] : ['voison'];
};

export const evenOdd = (number, index) => {
  return number > 0 ? index % 2 === 0 ? 'even' : 'odd' : 'neutral'
};

export const highLow = (number) => {
  return number > 0 ? number >= 1 && number <= 18 ? '1-to-18' : '19-to-36' : 'neutral';
};
