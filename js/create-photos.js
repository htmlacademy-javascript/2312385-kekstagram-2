import { PHOTO_COUNT, COMMENTS_COUNT, createRandomUniqueNumber, getArrayElement, getRandomNumber } from './util';
import { DESCRIPTIONS } from './data';
import { createComment } from './create-comment';

const photoId = createRandomUniqueNumber(1, PHOTO_COUNT);
const photoUrl = createRandomUniqueNumber(1, PHOTO_COUNT);

const createPhoto = () => ({
  id: photoId(),
  url: `photos/${photoUrl()}.jpg`,
  description: getArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: Array.from({length:getRandomNumber(0, COMMENTS_COUNT)}, createComment),
});

const createPhotos = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export {createPhotos};
