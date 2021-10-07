export const getNumbersByProperties = (array, property, value) => {
  return array.filter((el) => {
    return typeof el.properties[property] === 'object'
      ? el.properties[property].includes(value)
      : el.properties[property] === value;
  });
};

export const everyNth = (array, nth) => array.filter((e, i) => i % 3 === 3 - nth).filter(el => el !== 0);
