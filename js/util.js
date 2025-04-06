const PHOTO_COUNT = 25;
const COMMENTS_COUNT = 30;

const getRandomNumber = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const createRandomUniqueNumber = (a, b) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(a, b);

    if (previousValues.length >= (b - a + 1)) {
      return;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(a, b);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
};

const getArrayElement = (element) => element[getRandomNumber(0, element.length - 1)];

export {PHOTO_COUNT, COMMENTS_COUNT, getRandomNumber, createRandomUniqueNumber, getArrayElement};
