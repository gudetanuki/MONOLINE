'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('slides');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;


  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        moveSlides();
      });

      dots.push(button);
      document.getElementById('btnav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  setupDots();


  next.addEventListener('click', () => {
    if (currentIndex === dots.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = dots.length - 1
    } else {
      currentIndex--;
    }
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });


 
  
 
}