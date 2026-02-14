// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилівsimplelightbox
import "simplelightbox/dist/simple-lightbox.min.css";
const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  function adding_gallery(images_array) {
    const gallery_ul = document.querySelector(".gallery");
    images_array.forEach((item) => {
      const li_m = document.createElement("li");
      li_m.classList.add("gallery-item");

      const a_m = document.createElement("a");
      a_m.classList.add("gallery-link");
      a_m.setAttribute("href", item.original);

      const img_m = document.createElement("img");
      img_m.classList.add("gallery-image");

      img_m.setAttribute("src", item.preview);
      img_m.setAttribute("alt", item.description);
      img_m.setAttribute("height", "200px");
      img_m.setAttribute("width", "360px");

      //       img_m.src = item.url;
      // img_m.alt = item.alt;

      li_m.appendChild(a_m);
      a_m.appendChild(img_m);

      gallery_ul.appendChild(li_m);
    });

    
  }

  adding_gallery(images);

  const instancen = new SimpleLightbox('.gallery a', {
    nav: true,
    captions: true,
    captionsType: 'text',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    close: true,
    showCounter: true,
    animationSpeed: 250,
    docClose: true,
    className: 'simple-lightbox',
 

  })
  instancen.open();
  setTimeout(() => instancen.options.fadeSpeed, 250)
});
