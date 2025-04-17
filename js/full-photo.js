import { isEsc } from './util.js';
import { renderComments, resetCommentsCounter } from './render-comments.js';

const body = document.body;
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureElement.querySelector('.likes-count');
const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');

const renderData = (picture) => {
  bigPictureImg.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureDescription.textContent = picture.description;
  renderComments(picture.comments);
};

const closeFullPicture = () => {
  body.classList.remove('modal-open');
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeyClick);
  resetCommentsCounter();
};

const onButtonCloseFullPicture = () => {
  closeFullPicture();
};

function onEscKeyClick (evt) {
  if (isEsc(evt.key)) {
    closeFullPicture();
  }
}

const openFullPicture = (picture) => {
  body.classList.add('modal-open');
  bigPictureElement.classList.remove('hidden');
  renderData(picture);
  document.addEventListener('keydown', onEscKeyClick);
};

closeButton.addEventListener('click', onButtonCloseFullPicture);

export {openFullPicture};
