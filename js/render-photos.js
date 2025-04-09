import { createPhotos } from './create-photos';
import { openFullPicture } from './full-photo';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photos = createPhotos();
const photosFragment = document.createDocumentFragment();

const renderPhotos = () => {
  photos.forEach((picture) => {
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
  evt.preventDefault();
  const currentElement = evt.target.closest('.picture');
  if (currentElement) {
    openFullPicture(currentElement.dataset.pictureId);
  }

});

export {renderPhotos, photos};
