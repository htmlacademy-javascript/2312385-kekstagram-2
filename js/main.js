const DESCRIPTIONS = [
  'Это шедевр!!!',
  'Боже, я познал комедию',
  'Оказался в нужное время, в нужном месте',
  'Проходил мимо',
  'Чудестный день',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Олег',
  'Иван',
  'Анна',
  'Полина',
  'Анастасия',
  'София',
  'Софья',
];

const PHOTO_COUNR = 25;

const getRandomNumber = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const creatRandomId = (a, b) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(a, b);

    if (previousValues.length >= (b - a + 1)) {
      return;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(a, b);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
};

const getArrayElement = (element) => element[getRandomNumber(0, element.length - 1)];

const createMessage = () => Array.from({length: getRandomNumber(1, 2)}, () => getArrayElement(COMMENTS)).join(' ');

const photoId = creatRandomId(1, PHOTO_COUNR);
const photoUrl = creatRandomId(1, PHOTO_COUNR);
const commentId = creatRandomId(1, PHOTO_COUNR);
const avatarUrl = creatRandomId(1, 6);

const createPhoto = () => ({
  id: photoId(),
  url: `photo/${photoUrl()}.png`,
  description: getArrayElement(DESCRIPTIONS),
  comments: {
    id: commentId(),
    avatar: `img/avatar-${avatarUrl()}.png`,
    message: createMessage(),
    name: getArrayElement(NAMES),
  },
});

const photos = Array.from({length: PHOTO_COUNR}, createPhoto);

console.log(photos);
