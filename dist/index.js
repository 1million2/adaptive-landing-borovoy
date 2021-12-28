const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: false,
    speed: 800
  });

const burgerButton = document.querySelector(".btn-burger");
if (burgerButton) {
  const burgerlist = document.querySelector(".nav__items");
  const body = document.querySelector("body");
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("active");
    burgerlist.classList.toggle("active");
    body.classList.toggle("stop-pagination");
    
  })
}