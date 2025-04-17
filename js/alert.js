import { isEsc } from './util.js';

const ALERT_SHOW_TIME = 5000;

const body = document.body;
const errorDataMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorDataMessage = errorDataMessageTemplate.cloneNode(true);
const successMessage = successMessageTemplate.cloneNode(true);
const errorMessage = errorMessageTemplate.cloneNode(true);
const closeSuccessAlertButton = successMessage.querySelector('.success__button');
const closeErrorAlertButton = errorMessage.querySelector('.error__button');

let statusAlert;

const closeAlertMessage = (message, button) => {
  message.remove();
  message.removeEventListener('click', onWindowClick);
  button.removeEventListener('click', onButtonClick);
  document.removeEventListener('keydown', onEscClick);
  body.classList.remove('modal-open');
};

const renderMessage = () => {
  if (statusAlert) {
    closeAlertMessage(successMessage, closeSuccessAlertButton);
  } else {
    closeAlertMessage(errorMessage, closeErrorAlertButton);
  }
};

function onButtonClick () {
  renderMessage();
}

function onWindowClick (evt) {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    renderMessage();
  }
}

function onEscClick (evt) {
  if (isEsc(evt.key)) {
    renderMessage();
  }
}

const renderAlertMessage = (message, button) => {
  body.insertAdjacentElement('beforeend', message);
  button.addEventListener('click', onButtonClick);
  message.addEventListener('click', onWindowClick);
  document.addEventListener('keydown', onEscClick);
  body.classList.add('modal-open');
};

const showSuccessAlert = () => {
  statusAlert = true;
  renderAlertMessage(successMessage, closeSuccessAlertButton);
};

const showErrorAlert = () => {
  statusAlert = false;
  renderAlertMessage(errorMessage, closeErrorAlertButton);
};

const showErrorDataAlert = () => {
  body.insertAdjacentElement('beforeend', errorDataMessage);

  setTimeout(() => {
    errorDataMessage.remove();
  }, ALERT_SHOW_TIME);
};

export { showErrorAlert, showSuccessAlert, showErrorDataAlert };
