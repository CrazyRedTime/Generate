import getOneOrZero from './getOneOrZero';

const getRandomArray = () => {
  const x = 7;
  const y = 13;
  const arr = [];
  for (let i = 0; i < y; i++) {
    arr.push([]);
    for (let j = 0; j < x; j++) {
      arr[i].push(getOneOrZero());
    }
  }
  for (let i = 0; i < y; i++) {
    arr[i] = [...arr[i], ...arr[i].splice(0, 6).reverse()];
  }
  return arr;
};

export default getRandomArray;