import { debounce } from './util.js';

const RANDOM_PHOTO_COUNT = 10;

const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');

let pictures = [];
let currentFilter = '';

const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const randomSort = () => Math.random() - 0.5;

const discussedSort = (picA, picB) => picB.comments.length - picA.comments.length;

const filterPhoto = () => {
  switch(currentFilter) {
    case FILTERS.RANDOM:
      return [...pictures].sort(randomSort).slice(0, RANDOM_PHOTO_COUNT);
    case FILTERS.DISCUSSED:
      return [...pictures].sort(discussedSort);
    default:
      return [...pictures];
  }
};

const filterActive = (loaderPictures) => {
  filter.classList.remove('img-filters--inactive');
  pictures = [...loaderPictures];
  currentFilter = FILTERS.DEFAULT;
};

const setOnFilterClick = (cb) => {
  const debounceCallback = debounce(cb);

  filterForm.addEventListener('click', (evt) => {
    const currentButton = filter.querySelector('.img-filters__button--active');
    if (!(evt.target === currentButton)) {
      currentButton.classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
      currentFilter = evt.target.id;
      debounceCallback(filterPhoto());
    }
  });
};

export { filterActive, filterPhoto, setOnFilterClick };
