export const getNumbersByProperties = (array, property, value) => {
  return array.filter((el) => {
    return typeof el.properties[property] === 'object'
      ? el.properties[property].includes(value)
      : el.properties[property] === value;
  });
};

