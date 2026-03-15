const images = document.querySelectorAll(".gallery-item img");

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const caption = document.getElementById("caption");

const close = document.querySelector(".close");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";

    popupImg.src = img.src;

    caption.textContent = img.dataset.caption;

    currentIndex = index;
  });
});

close.onclick = () => {
  popup.style.display = "none";
};

function showImage(index) {
  popupImg.src = images[index].src;

  caption.textContent = images[index].dataset.caption;
}

next.onclick = () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
};

prev.onclick = () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage(currentIndex);
};
