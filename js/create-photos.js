import { creatRandomId, getArrayElement } from './util';
import { DESCRIPTIONS, NAMES } from './data';
import { createMessage } from './create-messages';

const PHOTO_COUNR = 25;

const photoId = creatRandomId(1, PHOTO_COUNR);
const photoUrl = creatRandomId(1, PHOTO_COUNR);
const commentId = creatRandomId(1, PHOTO_COUNR);
const avatarUrl = creatRandomId(1, 6);

const createPhoto = () => ({
  id: photoId(),
  url: `photo/${photoUrl()}.png`,
  description: getArrayElement(DESCRIPTIONS),
  comments: {
    id: commentId(),
    avatar: `img/avatar-${avatarUrl()}.png`,
    message: createMessage(),
    name: getArrayElement(NAMES),
  },
});

const createPhotos = () => Array.from({length: PHOTO_COUNR}, createPhoto);

export {createPhotos};
