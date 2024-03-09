console.log('hellow world');

let slideIndex = 0;
  const slides = document.querySelectorAll('.slider ol li');
  console.log (slides);
  const slideWidth = slides[0].clientWidth;

  function showSlides() {
    const windowWidth = window.innerWidth;
    const slidesPerWindow = Math.floor(windowWidth / slideWidth);
    const totalSlides = slides.length;
    const maxIndex = totalSlides - slidesPerWindow;

    console.log(slides);
    
    slides.forEach((slide, i) => {
      if (i >= slideIndex ) {
        slide.style.display = 'flex';
      } else {
        slide.style.display = 'none';
      }
    });

   
}
  function nextSlide() {
    slideIndex++;
    showSlides();
    console.log("right button clicked");
}

function prevSlide() {
    slideIndex--;
    showSlides();
    console.log("left button clicked");
  }

  // Show initial slides
  showSlides();
