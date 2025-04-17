import { openFullPicture } from './full-photo.js';

const photoElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosFragment = document.createDocumentFragment();

let pictures = [];

const renderPhotos = (photos) => {
  photoElement.querySelectorAll('.picture').forEach((photo) => photo.remove());
  pictures = [...photos];
  pictures.forEach((picture) => {
    const photoItem = photoTemplate.cloneNode(true);

    photoItem.dataset.pictureId = picture.id;
    photoItem.querySelector('.picture__img').src = picture.url;
    photoItem.querySelector('.picture__img').alt = picture.description;
    photoItem.querySelector('.picture__comments').textContent = picture.comments.length;
    photoItem.querySelector('.picture__likes').textContent = picture.likes;
    photosFragment.append(photoItem);
  });

  photoElement.append(photosFragment);
};

photoElement.addEventListener('click', (evt) => {
  const currentElement = evt.target.closest('.picture');
  if (currentElement) {
    evt.preventDefault();
    const id = Number(currentElement.dataset.pictureId);
    const currentPicture = pictures.find((item) => item.id === id);
    openFullPicture(currentPicture);
  }
});

export {renderPhotos};
