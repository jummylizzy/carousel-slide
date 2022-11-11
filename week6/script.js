let slidePosition = 0
let slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length
// console.log(totalSlides)

document.getElementById("carousel-button-prev")
  .addEventListener('click', function() {
    moveToPrevSlide();
  });
document.getElementById("carousel-button-next")
  .addEventListener('click', function() {
    moveToNextSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-invisible")
    slide.classList.add("carousel-item-hidden")
  }

  slides[slidePosition].classList.add("carousel-item-invisible")
};

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
};
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
};