export const getNumbersByProperties = (array, property, value) => {
  const result = array.filter((item) => {
    if(typeof item.properties[property] === 'object') {
      const condition = property.includes('Split') || property === 'sixline' || property === 'street' || property === 'corner';
      if(condition) {
        return item.properties[property].map(el => el.name === value).includes(true);
      }
      return item.properties[property].includes(value);
    }
    return item.properties[property] === value;
  });
  
  return result;
};

export const everyNth = (array, nth) => array.filter((e, i) => i % 3 === 3 - nth).filter(el => el !== 0);

export const spaceReplace = (item) => {
  return item.replace(/\s+/g, '-').toLowerCase();
};

export const removeDubs = (array) => {
  return Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
};

export const checkNumbers = (number, payload) => {
  return (number.map(value => value.id === payload.id ?
      // transform the one with a matching id
      { ...value, checked: value.checked = !payload.checked } : 
      // otherwise return original value
      value
  ));
};

export const removeNumbers = (array) => {
  return array.map(value => value.checked ? {...value, checked: false} : value)
};

export const keepWinningBets = (array, winningNumber) => {
  const winnerObj = array.filter(item => item.checked).filter(item => item.numbers.includes(winningNumber.numbers[0])) || [];
  const result = array.map((item) => ({...item, checked: winnerObj.some(el => el.name === item.name)}));
  return result;
};