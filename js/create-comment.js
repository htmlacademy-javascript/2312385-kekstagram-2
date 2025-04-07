import { getRandomNumber, getArrayElement } from './util';
import { NAMES, COMMENTS } from './data';

const createMessage = () => Array.from({length: getRandomNumber(1, 2)}, () => getArrayElement(COMMENTS)).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: createMessage(),
  name: getArrayElement(NAMES),
});

export {createComment};
