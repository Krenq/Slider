const slides = document.querySelectorAll('.slide'); // array

function slidesPlugin(activeSlide = 0) {
  const changeClassFunc = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  };

  slides[activeSlide].classList.add('active');

  addEventListener('click', (event) => {
    if (event.target.className === 'slide') {
      changeClassFunc();
      event.target.classList.add('active');
    }
  });
}

slidesPlugin(2);
