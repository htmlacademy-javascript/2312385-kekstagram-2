import { Effects } from './constants.js';

const form = document.querySelector('.img-upload__form');
const sliderContainerElement = form.querySelector('.effect-level');
const sliderElement = form.querySelector('.effect-level__slider');
const effectField = form.querySelector('.effect-level__value');
const photoPreview = form.querySelector('.img-upload__preview img');

const DEFAULT_EFFECT = Effects[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderContainerElement.classList.remove('hidden');
  // sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });
  if (isDefault()) {
    sliderContainerElement.classList.add('hidden');
    // sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = Effects.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  photoPreview.style.filter = 'none';
  effectField.value = '';
  if (isDefault()) {
    return;
  }
  const currentValue = sliderElement.noUiSlider.get();
  photoPreview.style.filter = `${chosenEffect.style}(${currentValue}${chosenEffect.unit})`;
  photoPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectField.value = `${currentValue}`;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.min,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return parseFloat(value).toFixed(0);
      }
      return parseFloat(value).toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});
updateSlider();

sliderElement.noUiSlider.on('update', onSliderUpdate);

export {onFormChange, resetEffect};
