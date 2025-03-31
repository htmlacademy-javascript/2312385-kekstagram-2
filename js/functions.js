/*
Задание:

1 - Функция для проверки длины строки
2 - Функция для проверки, является ли строка палиндромом

---------
Доп. задание:

Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
*/

// 1 - Функция для проверки длины строки

const getLength = (string, length) => string.length <= length;

getLength('проверяемая строка', 20);
getLength('проверяемая строка', 18);
getLength('проверяемая строка', 10);


// 2 - Функция для проверки, является ли строка палиндромом

const getPolynomial = (string) => {
  let message = `${string} не является полиндромом`;

  if (string.length % 2) {
    const lowerString = string.replaceAll(' ', '').toLowerCase();

    for (let i = 0; i < lowerString.length - 1; i++) {

      if (lowerString.at(i) !== lowerString.at(-i - 1)) {
        break;
      }
      message = `${string} является полиндромом`;
    }
  }
  return console.log(message);
};

getPolynomial('тОпот');
getPolynomial('ДовОд');
getPolynomial('Кексc');
getPolynomial('Лёша на полке клопа нашёл');


// Доп. задание

const getNumbet = (value) => {
  const string = String(value);

  let resultString = '';

  for (let i = 0; i < string.length; i++) {

    // первый вариант. он работает но линтер на него ругается
    // !(Number.isNaN(parseInt(string[i], 10))) ? resultString += string[i] : '';

    if (!(Number.isNaN(parseInt(string[i], 10)))) {
      resultString += string[i];
    }
  }

  console.log(parseInt(resultString, 10));
};

getNumbet('2023 год');
getNumbet('ECMAScript');
getNumbet('1 кефир, 0.5 батона');
getNumbet('агент 007');
getNumbet(2023);
getNumbet(-1);
getNumbet(1.5);


// Делу - время

const getNumber = (arr) => {
  const [hours, minutes] = arr.split(':').map((item) => Number(item));
  return hours * 60 + minutes;
};

const businessTime = (startWork, endWork, startTime, duration) => {
  const startWorkArray = getNumber(startWork);
  const endWorkArray = getNumber(endWork);
  const startTimeArray = getNumber(startTime);
  const endTimeArray = startTimeArray + duration;

  return startWorkArray <= startTimeArray && endWorkArray >= endTimeArray;
};

console.log(businessTime('08:00', '17:30', '14:00', 90));
console.log(businessTime('8:0', '10:0', '8:0', 120));
console.log(businessTime('08:00', '14:30', '14:00', 90));
console.log(businessTime('14:00', '17:30', '08:0', 90));
console.log(businessTime('8:00', '17:30', '08:00', 900));
