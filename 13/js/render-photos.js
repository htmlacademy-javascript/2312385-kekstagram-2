import { openFullPicture } from './full-photo';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosFragment = document.createDocumentFragment();

let pictures = [];

const renderPhotos = (photos) => {
  photoContainer.querySelectorAll('.picture').forEach((photo) => photo.remove());
  pictures = [...photos];
  pictures.forEach((picture) => {
    const photoElement = photoTemplate.cloneNode(true);

    photoElement.dataset.pictureId = picture.id;
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__img').alt = picture.description;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photosFragment.append(photoElement);
  });

  photoContainer.append(photosFragment);
};

photoContainer.addEventListener('click', (evt) => {
  const currentElement = evt.target.closest('.picture');
  if (currentElement) {
    evt.preventDefault();
    const id = Number(currentElement.dataset.pictureId);
    const currentPicture = pictures.find((item) => item.id === id);
    openFullPicture(currentPicture);
  }
});

export {renderPhotos};
