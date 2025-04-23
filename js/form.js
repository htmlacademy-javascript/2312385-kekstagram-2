import { isValid, resetPristine } from './validate-form.js';
import { onFormChange, resetEffect } from './effect.js';
import { resetScale } from './scale.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

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

const canCloseForm = () =>
  !(document.activeElement === hashtagField ||
  document.activeElement === descriptionField);

const closeModal = () => {
  formElement.reset();
  resetEffect();
  resetScale();
  resetPristine();
  body.classList.remove('modal-open');
  formModal.classList.add('hidden');
  closeFormButton.removeEventListener('click', onCloseButtonClick);
};

function onCloseButtonClick () {
  closeModal();
  removeEscapeControl();
}

const showModal = () => {
  fileField.addEventListener('input', () => {
    const file = fileField.files[0];

    body.classList.add('modal-open');
    formModal.classList.remove('hidden');
    closeFormButton.addEventListener('click', onCloseButtonClick);
    setEscapeControl(closeModal, canCloseForm);

    photoPreview.src = URL.createObjectURL(file);

    effectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  });
};

const onFormSubmit = (cb) => {
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
  onFormSubmit,
  blockSubmitButton
};
