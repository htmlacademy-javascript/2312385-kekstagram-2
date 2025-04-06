import { createPhotos } from './create-photos';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photos = createPhotos();

const photosFragment = document.createDocumentFragment();

const renderPhotos = () => {
  photos.forEach(({url, description, comments, likes}) => {
    const photoElement = photoTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;

    photosFragment.append(photoElement);
  });

  photoContainer.append(photosFragment);
};

export {renderPhotos};
