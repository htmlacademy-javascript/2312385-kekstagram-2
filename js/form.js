import { isValid } from './validate-form';
import {isEsc} from './util.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('.img-upload__input');
const formModal = form.querySelector('.img-upload__overlay');
const hashtagField = form.querySelector('.text__hashtags');
const descriptionField = form.querySelector('.text__description');
const photoPreview = form.querySelector('.img-upload__preview img');
const closeFormButton = form.querySelector('.img-upload__cancel');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    form.submit();
  } else {
    console.log('форма не валидна');
  }
});

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === descriptionField;


const closeModal = () => {
  body.classList.remove('modal-open');
  formModal.classList.add('hidden');
  closeFormButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscKeyClick);
  form.reset();
};

function onEscKeyClick (evt) {
  if (isEsc(evt.key) && !isTextFieldFocused()) {
    closeModal();
  }
}

const showModal = () => {
  fileField.addEventListener('input', () => {
    const file = fileField.files[0];

    body.classList.add('modal-open');
    formModal.classList.remove('hidden');
    closeFormButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscKeyClick);

    photoPreview.src = URL.createObjectURL(file);
  });
};

export {showModal};
