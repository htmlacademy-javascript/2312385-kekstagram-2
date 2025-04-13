const form = document.querySelector('.img-upload__form');
const sliderElement = form.querySelector('.effect-level__slider');
const effectField = form.querySelector('.effect-level__value');
const photoPreview = form.querySelector('.img-upload__preview img');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.min,
    step: chosenEffect.step,
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
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
});
updateSlider();

sliderElement.noUiSlider.on('update', onSliderUpdate);

export {onFormChange, resetEffect};
