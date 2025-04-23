import { isEsc } from './util.js';

const windows = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (isEsc(evt.key)) {
    const lastIndex = windows.length - 1;
    if (windows[lastIndex].condition && !windows[lastIndex].condition()) {
      return;
    }
    windows[lastIndex].closeFn();
    windows.length = windows.length - 1;
    if (!windows.length) {
      listener = null;
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
};

const setEscapeControl = (closeFn, condition = null) => {
  windows.push({
    closeFn,
    condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

const removeEscapeControl = () => {
  windows.length = windows.length - 1;
  if (!windows.length) {
    listener = null;
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

export {setEscapeControl, removeEscapeControl};
