const SCALE_DEFAULT = 100;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
const SCALE_COEFFICIENT = 100;

const formElement = document.querySelector('.img-upload__form');
const scaleControlField = formElement.querySelector('.scale__control--value');
const scaleControlSmaller = formElement.querySelector('.scale__control--smaller');
const scaleControlBigger = formElement.querySelector('.scale__control--bigger');
const photoPreview = formElement.querySelector('.img-upload__preview img');

const scale = (evt) => {
  const controlSmaller = evt.target.closest('.scale__control--smaller');
  let currentValue = parseInt(scaleControlField.value, 10);
  if (controlSmaller) {
    if (currentValue > SCALE_MIN) {
      currentValue -= SCALE_STEP;
    }
  } else {
    if (currentValue < SCALE_MAX) {
      currentValue += SCALE_STEP;
    }
  }
  scaleControlField.value = `${currentValue}%`;
  photoPreview.style.transform = `scale(${currentValue / SCALE_COEFFICIENT})`;
};

const resetScale = () => {
  photoPreview.style.transform = `scale(${SCALE_DEFAULT / SCALE_COEFFICIENT})`;
};

scaleControlSmaller.addEventListener('click', scale);
scaleControlBigger.addEventListener('click', scale);

export {resetScale};
