let currentSlide = 0;
const slides = document.querySelectorAll('.slide-liste li');
const slides1 = document.querySelectorAll('.slide-liste1 li');

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlide();
}

function nextSlide1() {
  if (currentSlide < slides1.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlide1();
}

function updateSlide() {
  const slideWidth = slides[0].clientWidth;
  const offset = -currentSlide * slideWidth;
  document.querySelector('.slide-liste').style.transform = `translateX(${offset}px)`;
}

function updateSlide1() {
  const slideWidth1 = slides1[0].clientWidth;
  const offset1 = -currentSlide * slideWidth1;
  document.querySelector('.slide-liste1').style.transform = `translateX(${offset1}px)`;
}
document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
