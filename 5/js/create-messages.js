import { getRandomNumber, getArrayElement } from './util';
import { COMMENTS } from './data';

const createMessage = () => Array.from({length: getRandomNumber(1, 2)}, () => getArrayElement(COMMENTS)).join(' ');

export {createMessage};
