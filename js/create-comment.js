import { COMMENTS_COUNT, getRandomNumber, createRandomUniqueNumber, getArrayElement } from './util';
import { NAMES, COMMENTS } from './data';

const commentId = createRandomUniqueNumber(1, COMMENTS_COUNT);
const avatarUrl = createRandomUniqueNumber(1, 6);

const createMessage = () => Array.from({length: getRandomNumber(1, 2)}, () => getArrayElement(COMMENTS)).join(' ');

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${avatarUrl()}.png`,
  message: createMessage(),
  name: getArrayElement(NAMES),
});

export {createComment};
