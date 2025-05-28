"use strict";

const slides = document.querySelectorAll(".slider__img");
const prevBtn = document.querySelector(".slider_btn-prev");
const nextBtn = document.querySelector(".slider_btn-next");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === slides.length - 1 ? "none" : "inline-block";
}
prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});
nextBtn.addEventListener("click", function () {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

showSlide(currentIndex);
