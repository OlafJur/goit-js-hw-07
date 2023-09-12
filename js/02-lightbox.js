import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
    <li>
      <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>`
  )
  .join("");

gallery.innerHTML = galleryHTML;

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
