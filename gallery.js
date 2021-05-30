import defaultExport from "./gallery-items.js";
const galleryFolderEl = document.querySelector(`.js-gallery`);
const lightboxEl = document.querySelector(`.js-lightbox`);
const closeLightboxEl = document.querySelector(`.lightbox__button`);
const lightboxImageEl = document.querySelector(`.lightbox__image`)

const addGalleryElementEl = defaultExport.map(el => {
  return `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" src=${el.preview} data-source=${el.original} alt=${el.description}/></a></li>`
}).join(``);
galleryFolderEl.insertAdjacentHTML(`afterbegin`, addGalleryElementEl);
galleryFolderEl.addEventListener(`click`, (event) => {
  lightboxEl.classList.add('is-open');
  lightboxImageEl.setAttribute(`src`, event.target.dataset.source);
  lightboxImageEl.setAttribute(`alt`, event.target.alt);

});
closeLightboxEl.addEventListener(`click`, () => {
  lightboxEl.classList.remove('is-open');
  lightboxImageEl.removeAttribute(`src`);
  lightboxImageEl.removeAttribute(`alt`);
});
