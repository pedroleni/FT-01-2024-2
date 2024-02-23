export const createArray = (numeroDeElementos) => {
  const array = [];
  for (let i = 1; i <= numeroDeElementos; i++) {
    array.push(i);
  }

  return array;
};
