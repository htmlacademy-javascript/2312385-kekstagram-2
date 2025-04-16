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
  message.removeEventListener('click', onClickWindowAlert);
  button.removeEventListener('click', onClickButtonAlert);
  document.removeEventListener('keydown', onClickEscAlert);
};

const renderMessage = () => {
  if (statusAlert) {
    closeAlertMessage(successMessage, closeSuccessAlertButton);
  } else {
    closeAlertMessage(errorMessage, closeErrorAlertButton);
  }
};

function onClickButtonAlert () {
  renderMessage();
}

function onClickWindowAlert (evt) {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    renderMessage();
  }
}

function onClickEscAlert (evt) {
  if (isEsc(evt.key)) {
    renderMessage();
  }
}

const renderAlertMessage = (message, button) => {
  body.insertAdjacentElement('beforeend', message);
  button.addEventListener('click', onClickButtonAlert);
  message.addEventListener('click', onClickWindowAlert);
  document.addEventListener('keydown', onClickEscAlert);
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
