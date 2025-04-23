const PHOTO_COUNT = 25;
const COMMENTS_COUNT = 30;

const isEsc = (key) => key === 'Escape';

const debounce = (cb, delay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), delay);
  };
};

export {
  PHOTO_COUNT,
  COMMENTS_COUNT,
  isEsc,
  debounce,
};
