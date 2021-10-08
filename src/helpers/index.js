export const getNumbersByProperties = (array, property, value) => {
  const result = array.filter((item) => {
    if(typeof item.properties[property] === 'object') {
      if(property.includes('Split')) {
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
