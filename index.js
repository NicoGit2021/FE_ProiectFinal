let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function moveSlide(step) {
  currentIndex += step;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;
  slides.style.transform = 'translateX(' + (-100 * currentIndex) + '%)';
}