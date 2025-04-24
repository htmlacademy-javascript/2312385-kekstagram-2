const isEsc = (key) => key === 'Escape';

const debounce = (cb, delay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), delay);
  };
};

export {
  isEsc,
  debounce,
};
