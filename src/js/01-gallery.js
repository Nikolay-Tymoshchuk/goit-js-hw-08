import galleryItemTpl from '../templates/gallery-items.hbs';
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryMainBox = document.body.querySelector('.gallery');

const createGalleryFromObject = (obj) => obj.map(item => galleryItemTpl(item)).join('');
const galleryMarkupCreaton = createGalleryFromObject(galleryItems);

galleryMainBox.insertAdjacentHTML('beforeend', galleryMarkupCreaton);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});