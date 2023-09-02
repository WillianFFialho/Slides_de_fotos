// JavaScript para controlar o slider de fotos

const sliderImages = document.querySelectorAll(".slider img");
const thumbnailImages = document.querySelectorAll(".thumbnails img");
const enlargedImage = document.querySelector(".enlarged-image img");

let currentIndex = 0;

function showImage(index) {
    sliderImages.forEach((img) => (img.style.display = "none"));
    sliderImages[index].style.display = "block";
}

function showEnlargedImage(index) {
    enlargedImage.src = sliderImages[index].src;
}

thumbnailImages.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
        showEnlargedImage(currentIndex);
    });
});

function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
    showEnlargedImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(currentIndex);
    showEnlargedImage(currentIndex);
}

showImage(currentIndex);
showEnlargedImage(currentIndex);

// Adicionar eventos para os botões de próxima e anterior
document.querySelector("#next").addEventListener("click", nextImage);
document.querySelector("#prev").addEventListener("click", prevImage);
