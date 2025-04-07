import { isEsc } from './util';
import { renderComments } from './render-comments';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentsTotal = bigPicture.querySelector('.social__comment-total-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCommentsCounter = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderData = (picture) => {
  bigPictureImg.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureComments.textContent = picture.comments.length;
  bigPictureCommentsTotal.textContent = picture.comments.length;
  bigPictureDescription.textContent = picture.description;
  renderComments(picture.comments);
};

const closeFullPicture = () => {
  bigPicture.classList.add('hidden');

  document.removeEventListener('keydown', onEscKeyClick);
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
  bigPicture.classList.remove('hidden');
  renderData(picture);
  bigPictureCommentsCounter.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onEscKeyClick);
};

closeButton.addEventListener('click', onButtonCloseFullPicture);

export {openFullPicture};
