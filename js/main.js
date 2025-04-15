import { renderPhotos } from './render-photos.js';
import { showModal, closeModal, onSubmitForm } from './form.js';
import { getData, sendData } from './api.js';
import { showSuccessAlert, showErrorAlert, showErrorDataAlert } from './alert.js';

showModal();

const onSendSuccess = () => {
  closeModal();
  showSuccessAlert();
};

const onSendError = () => {
  showErrorAlert();
};

onSubmitForm((data) => sendData(onSendSuccess, onSendError, data));

getData().then((pictures) => renderPhotos(pictures)).catch(() => showErrorDataAlert());
