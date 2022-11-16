import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  galleryBox: document.querySelector(".gallery"),
};

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

refs.galleryBox.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryItems);
