import { renderPhotos } from './render-photos.js';
import { showModal, closeModal, onSubmitForm, unblockSubmitButton } from './form.js';
import { getData, sendData } from './api.js';
import { showSuccessAlert, showErrorAlert, showErrorDataAlert } from './alert.js';
import { filterActive, filterPhoto, setOnFilterClick } from './filter.js';

showModal();

const onSendSuccess = () => {
  closeModal();
  showSuccessAlert();
};

const onSendError = () => {
  showErrorAlert();
};

onSubmitForm((data) => sendData(onSendSuccess, onSendError, data).finally(unblockSubmitButton));

getData()
  .then((pictures) => {
    filterActive(pictures);
    renderPhotos(filterPhoto());
    setOnFilterClick(renderPhotos);
  }).catch(() => showErrorDataAlert());
