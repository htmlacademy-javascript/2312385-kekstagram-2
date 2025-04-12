import { createPhotos } from './create-photos';
import { renderPhotos } from './render-photos';
import {showModal} from './form';

const photos = createPhotos();

renderPhotos(photos);

showModal();
