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

const closeSuccessMessage = () => {
  successMessage.remove();
  closeSuccessAlertButton.removeEventListener('click', onClickButtonAlert);
  successMessage.removeEventListener('click', onClickWindowAlert);
  document.removeEventListener('keydown', onClickEscAlert);
};

const closeErrorMessage = () => {
  errorMessage.remove();
  closeErrorAlertButton.removeEventListener('click', onClickButtonAlert);
  errorMessage.removeEventListener('click', onClickWindowAlert);
  document.removeEventListener('keydown', onClickEscAlert);
};

function onClickButtonAlert () {
  if (statusAlert) {
    closeSuccessMessage();
  } else {
    closeErrorMessage();
  }
}

function onClickWindowAlert (evt) {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    if (statusAlert) {
      closeSuccessMessage();
    } else {
      closeErrorMessage();
    }
  }
}

function onClickEscAlert (evt) {
  if (isEsc(evt.key)) {
    if (statusAlert) {
      closeSuccessMessage();
    } else {
      closeErrorMessage();
    }
  }
}

const showSuccessAlert = () => {
  statusAlert = true;
  body.insertAdjacentElement('beforeend', successMessage);
  closeSuccessAlertButton.addEventListener('click', onClickButtonAlert);
  successMessage.addEventListener('click', onClickWindowAlert);
  document.addEventListener('keydown', onClickEscAlert);
};

const showErrorAlert = () => {
  statusAlert = false;
  body.insertAdjacentElement('beforeend', errorMessage);
  closeErrorAlertButton.addEventListener('click', onClickButtonAlert);
  errorMessage.addEventListener('click', onClickWindowAlert);
  document.addEventListener('keydown', onClickEscAlert);
};

const showErrorDataAlert = () => {
  body.insertAdjacentElement('beforeend', errorDataMessage);

  setTimeout(() => {
    errorDataMessage.remove();
  }, ALERT_SHOW_TIME);
};

export { showErrorAlert, showSuccessAlert, showErrorDataAlert };
