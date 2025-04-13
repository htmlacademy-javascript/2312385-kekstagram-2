const MAX_COUNT_TAGS = 5;
const MAX_DESCRIPTION = 140;
const MAX_LENGTH_TAG = 20;

const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const descriptionField = form.querySelector('.text__description');

const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: '.img-upload__field-wrapper--error'
});

// проверка тегов на шаблон
const isValidHashtad = (tag) => regexp.test(tag);

// проверка тегов на количество
const isValidCountHashtag = (stringTags) => {
  const tags = stringTags.trim().split(' ');
  return tags.length <= MAX_COUNT_TAGS;
};

// проверка тегов на уникальность
const isUniqueTags = (stringTags) => {
  const tags = stringTags.trim().toLowerCase().split(' ');
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

// валидация хэштега по шаблону
const validateHashtad = (stringRaw) => {
  const tags = stringRaw.trim().split(' ').every(isValidHashtad);
  return tags;
};

pristine.addValidator(
  hashtagField,
  validateHashtad,
  `Хештег не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и длина должна быть не более ${MAX_LENGTH_TAG}`
);

pristine.addValidator(
  hashtagField,
  isValidCountHashtag,
  `Количество хештегов не должно превышать ${MAX_COUNT_TAGS}`
);

pristine.addValidator(
  hashtagField,
  isUniqueTags,
  'Хэштеги должны быть уникальные'
);

const isValidDescription = (descString) => descString.length <= MAX_DESCRIPTION;

pristine.addValidator(
  descriptionField,
  isValidDescription,
  `Ваш коментарий должен быть не длинее ${MAX_DESCRIPTION} символов`
);

const isValid = () => pristine.validate();

const resetPristine = () => pristine.reset();

export {isValid, resetPristine};
