export const getNumbersByProperties = (array, property, value) => {
  return array.filter(el => el.properties[property] === value);
};

