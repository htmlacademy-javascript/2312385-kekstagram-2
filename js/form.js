import { isValid, resetPristine } from './validate-form.js';
import { isEsc } from './util.js';
import { onFormChange, resetEffect } from './effect.js';
import { resetScale } from './scale.js';

const body = document.body;
const formElement = document.querySelector('.img-upload__form');
const fileField = formElement.querySelector('.img-upload__input');
const formModal = formElement.querySelector('.img-upload__overlay');
const hashtagField = formElement.querySelector('.text__hashtags');
const descriptionField = formElement.querySelector('.text__description');
const photoPreview = formElement.querySelector('.img-upload__preview img');
const effectsPreview = formElement .querySelectorAll('.effects__preview');
const closeFormButton = formElement.querySelector('.img-upload__cancel');
const submitButton = formElement.querySelector('.img-upload__submit');

const blockSubmitButton = (status) => {
  submitButton.disabled = status;
  submitButton.textContent = (status ? 'Публикую...' : 'Опубликовать');
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === descriptionField;

const closeModal = () => {
  formElement.reset();
  resetEffect();
  resetScale();
  resetPristine();
  body.classList.remove('modal-open');
  formModal.classList.add('hidden');
  closeFormButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscKeyClick);
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

    effectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  });
};

const onSubmitForm = (cb) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValid()) {
      blockSubmitButton(true);
      const data = new FormData(evt.target);
      cb(data);
    }
  });
};

formElement.addEventListener('change', onFormChange);

export {
  showModal,
  closeModal,
  onSubmitForm,
  blockSubmitButton
};
