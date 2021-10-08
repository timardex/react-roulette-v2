export const getNumbersByProperties = (array, property, value) => {
  return array.filter((el) => {
    return typeof el.properties[property] === 'object'
      ? el.properties[property].includes(value)
      : el.properties[property] === value;
  });
};

export const everyNth = (array, nth) => array.filter((e, i) => i % 3 === 3 - nth).filter(el => el !== 0);

export const spaceReplace = (item) => {
  return item.replace(/\s+/g, '-').toLowerCase();
};

export const removeDubs = (array) => {
  return Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
};
