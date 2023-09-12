import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  )
  .join("");

gallery.innerHTML = galleryHTML;

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    const imageUrl = e.target.dataset.source;

    const modal = basicLightbox.create(`
      <img src="${imageUrl}" alt="Image" />
    `);

    modal.show();

    const closeModalOnEscape = (event) => {
      if (event.key === "Escape") {
        modal.close();
        document.addEventListener("keydown", closeModalOnEscape);
      }
    };
  }
});
