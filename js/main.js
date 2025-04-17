import { renderPhotos } from './render-photos.js';
import { showModal, closeModal, onSubmitForm, blockSubmitButton } from './form.js';
import { getData, sendData } from './api.js';
import { showSuccessAlert, showErrorAlert, showErrorDataAlert } from './alert.js';
import { unblockFilter, filterPhoto, onFilterClick } from './filter.js';

showModal();

const onSendSuccess = () => {
  closeModal();
  showSuccessAlert();
};

const onSendError = () => {
  showErrorAlert();
};

onSubmitForm((data) => sendData(onSendSuccess, onSendError, data).finally(() => blockSubmitButton(false)));

getData()
  .then((pictures) => {
    unblockFilter(pictures);
    renderPhotos(filterPhoto());
    onFilterClick(renderPhotos);
  }).catch(() => showErrorDataAlert());
