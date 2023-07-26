// Happy Clients Carousel
const happyImages = ['./images/erp.png', './images/eye.png', './images/logo.png'];

let happyCurrentIndex = 0;
const happyImgElement = document.getElementById('happyCarouselImage');

function happyUpdateImage() {
    happyImgElement.src = happyImages[happyCurrentIndex];
}

function happyHandleNextClick() {
    happyCurrentIndex = (happyCurrentIndex + 1) % happyImages.length;
    happyUpdateImage();
}

function happyHandlePrevClick() {
    happyCurrentIndex = (happyCurrentIndex - 1 + happyImages.length) % happyImages.length;
    happyUpdateImage();
}

const happyNextButton = document.querySelector('.carouselButton.happyNext');
const happyPrevButton = document.querySelector('.carouselButton.happyPrev');

happyNextButton.addEventListener('click', happyHandleNextClick);
happyPrevButton.addEventListener('click', happyHandlePrevClick);


// Tech partners
const techImages = ['./images/erp.png', './images/eye.png', './images/logo.png'];

let techCurrentIndex = 0;
const techImgElement = document.getElementById('techCarouselImage');

function techUpdateImage() {
    techImgElement.src = techImages[techCurrentIndex];
}

function techHandleNextClick() {
    techCurrentIndex = (techCurrentIndex + 1) % techImages.length;
    techUpdateImage();
}


function techHandlePrevClick() {
    techCurrentIndex = (techCurrentIndex - 1 + techImages.length) % techImages.length;
    techUpdateImage();
}

const techNextButton = document.querySelector('.carouselButton.techNext');
const techPrevButton = document.querySelector('.carouselButton.techPrev');

techNextButton.addEventListener('click', techHandleNextClick);
techPrevButton.addEventListener('click', techHandlePrevClick);