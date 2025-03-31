/*
задача про номер квартиры:
Входные параметры - количество этажей, количество квартир на площадке количество квартир на площадке.

Написать фукцию, которая возвращает номер подъезда и номер этажа
*/

// находим количство квартир в 1 подъезде
// делим номер квартиры на количество квартир в 1 подъезде. целое число + 1 - это и будет номер подезда
// остаток от деления номера квартиры на количество квартир в 1 подъезде делим на количество квартир на площадку

const getAddress = (floors, flats, numberFlat) => {
  const numberOfApartments = floors * flats; // находим количество квартир в 1 подъезде
  const currentEntrance = Math.ceil(numberFlat / numberOfApartments); // номер подъезда
  let currentFloor = 0;
  if (numberFlat % numberOfApartments) {
    currentFloor = Math.ceil((numberFlat % numberOfApartments) / flats);
  } else {
    currentFloor = floors;
  }
  console.log(`Входные данные:\n- количество этажей: ${floors}\n- количество квартир на площадке: ${flats}\n- количество квартир на площадке ${numberFlat}\nВывод:\nПодъезд: ${ currentEntrance }\nЭтаж: ${currentFloor}`);
};

getAddress(5, 4, 40);

// Задача про ёлочки

// квадрат
const renderRectangle = (h, v) => {
  let result = '';
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < v; j++) {
      result += '*';
    }
    result += '\n';
  }

  return result;
};

// треугольник
const renderTriangle = (v) => {
  let result = '';
  for (let i = 0; i < v; i++) {
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
};

// обратный треугольник
const renderTriangleReverse = (v) => {
  let result = '';
  for (let i = 0; i < v; i++) {
    let resultString = '';
    for (let j = 0; j <= i; j++) {
      resultString += '*';
    }
    result += `${resultString.padStart(v, ' ')}\n`;
  }
  return result;
};

// перевёрнутый треугольник
const invertTriangle = (v) => {
  let result = '';
  for (let i = v; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
};

// перевёрнутый обратный треугольник
const invertReverseTriangle = (v) => {
  let result = '';
  for (let i = v; i > 0; i--) {
    let resultString = '';
    for (let j = 0; j < i; j++) {
      resultString += '*';
    }
    result += `${resultString.padStart(v, ' ')}\n`;
  }
  return result;
};

// пол ромба
const halfDiamond = (v) => {
  let result = '';
  for (let i = 0; i < v; i++) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    result += '\n';
  }
  for (let i = v; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
};

// обратные пол ромба

const reverseHalfDiamond = (v) => {
  let result = '';
  for (let i = 1; i < v; i++) {
    let resultString = '';
    for (let j = 0; j < i; j++) {
      resultString += '*';
    }
    result += `${resultString.padStart(v, ' ')}\n`;
  }
  for (let i = v; i > 0; i--) {
    let resultString = '';
    for (let j = 0; j < i; j++) {
      resultString += '*';
    }
    result += `${resultString.padStart(v, ' ')}\n`;
  }

  return result;
};

// ромб
const diamond = (v) => {
  let result = '';
  let start = 0;

  v % 2 ? start = 1 : '';

  for (let i = start; i < v; i += 2) {
    for (let j = v; j >= i; j -= 2) {
      result += ' ';
    }
    for(let j = 0; j < i * 2; j += 2) {
      result += '*';
    }
    result += '\n';
  }

  for (let i = v; i > 0; i -= 2) {
    for (let j = v; j >= i; j -= 2) {
      result += ' ';
    }
    for (let j = 0; j < i * 2; j += 2) {
      result += '*';
    }
    result += '\n';
  }
  return result;
};

console.log(renderRectangle(5, 4));
console.log(renderTriangle(5));
console.log(renderTriangleReverse(4));
console.log(invertTriangle(7));
console.log(invertReverseTriangle(6));
console.log(halfDiamond(4));
console.log(reverseHalfDiamond(7));
console.log(diamond(8));
