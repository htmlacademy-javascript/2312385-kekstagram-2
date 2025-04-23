import { debounce } from './util.js';

const RANDOM_PHOTO_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
const filterForm = filterElement.querySelector('.img-filters__form');

let pictures = [];
let currentFilter = '';

const getRandomSort = () => Math.random() - 0.5;

const getDiscussedSort = (picA, picB) => picB.comments.length - picA.comments.length;

const filterPhoto = () => {
  switch(currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(getRandomSort).slice(0, RANDOM_PHOTO_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(getDiscussedSort);
    default:
      return [...pictures];
  }
};

const unblockFilter = (loaderPictures) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loaderPictures];
  currentFilter = Filter.DEFAULT;
};

const onFilterClick = (cb) => {
  const debounceCallback = debounce(cb);

  filterForm.addEventListener('click', (evt) => {
    const currentButton = filterElement.querySelector('.img-filters__button--active');
    if (!(evt.target === currentButton)) {
      currentButton.classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
      currentFilter = evt.target.id;
      debounceCallback(filterPhoto());
    }
  });
};

export { unblockFilter, filterPhoto, onFilterClick };
