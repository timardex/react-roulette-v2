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

export const setbet = (number, payload) => {
  const result = number.map(value => value.id === payload.id ?
      { ...value,
        chipCount: value.chipCount = payload.chipCount+1,
      } :
      value
  );
  return result;
};

export const removeNumbers = (array) => {
  return array.map(value => value.chipCount > 0 ? {...value, chipCount: 0} : value)
};

export const keepWinningBets = (array, winningNumber) => {
  const winner = array.filter(item => item.chipCount > 0).filter(item => item.numbers.includes(winningNumber.numbers[0])) || [];
  const result = array.map((item) => {
    const condition = winner.some(el => el.name === item.name);
    return {
      ...item,
      chipCount: condition ? winner.find(el => el.name === item.name).chipCount : 0
    }
  });
  return result;
};

export const deleteBet = (array, payload) => {
  return array.map((item) => {
    return {...item, chipCount: item.name === payload.name ? 0 : item.chipCount}
  });
};

export const previouseBet = (number_checked, column_number) => {
  return column_number.map(value => number_checked.includes(value.numbers) ? {...value, checked: true} : value)
}