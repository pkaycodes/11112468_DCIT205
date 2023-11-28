const slideshowContainers = document.querySelectorAll('.slideshow');

slideshowContainers.forEach(container => {
  const slides = container.querySelectorAll('.slide');
  let currentSlideIndex = 0;


  slides[currentSlideIndex].style.display = 'block';

  const showNextSlide = () => {
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].style.display = 'block';
  };

  const showPreviousSlide = () => {
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slides[currentSlideIndex].style.display = 'block';
  };

  const prevArrow = container.querySelector('.prev');
  const nextArrow = container.querySelector('.next');

  prevArrow.addEventListener('click', showPreviousSlide);
  nextArrow.addEventListener('click', showNextSlide);
});