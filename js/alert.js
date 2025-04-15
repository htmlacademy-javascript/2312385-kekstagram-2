import { isEsc } from './util';

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

const closeSuccessMessage = () => {
  successMessage.remove();
  closeSuccessAlertButton.removeEventListener('click', onClickSuccessButton);
  successMessage.removeEventListener('click', onClickWindowSuccess);
  document.removeEventListener('keydown', onClickEscSuccess);
};

const closeErrorMessage = () => {
  errorMessage.remove();
  closeErrorAlertButton.removeEventListener('click', onClickErrorButton);
  errorMessage.removeEventListener('click', onClickWindowError);
  document.removeEventListener('keydown', onClickEscError);
};

// function onClickButton (evt) {
//   switch(evt.target) {
//     case evt.target.closest('.success__button'):
//       closeSuccessMessage();
//       break;
//     case evt.target.closest('.error__button'):
//       closeErrorMessage();
//       break;

//     default:
//       break;
//   }
// }

function onClickSuccessButton () {
  closeSuccessMessage();
}

function onClickErrorButton () {
  closeErrorMessage();
}

function onClickWindowSuccess (evt) {
  if (!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
}

function onClickWindowError (evt) {
  if (!evt.target.closest('.success__inner')) {
    closeErrorMessage();
  }
}

function onClickEscSuccess (evt) {
  if (isEsc(evt.key)) {
    closeSuccessMessage();
  }
}

function onClickEscError (evt) {
  if (isEsc(evt.key)) {
    closeErrorMessage();
  }
}

const showSuccessAlert = () => {
  body.insertAdjacentElement('beforeend', successMessage);
  closeSuccessAlertButton.addEventListener('click', onClickSuccessButton);
  successMessage.addEventListener('click', onClickWindowSuccess);
  document.addEventListener('keydown', onClickEscSuccess);
};

const showErrorAlert = () => {
  body.insertAdjacentElement('beforeend', errorMessage);
  closeErrorAlertButton.addEventListener('click', onClickErrorButton);
  errorMessage.addEventListener('click', onClickWindowError);
  document.addEventListener('keydown', onClickEscError);
};

const showErrorDataAlert = () => {
  body.insertAdjacentElement('beforeend', errorDataMessage);

  setTimeout(() => {
    errorDataMessage.remove();
  }, ALERT_SHOW_TIME);
};

export { showErrorAlert, showSuccessAlert, showErrorDataAlert };
