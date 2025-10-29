document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".list-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
});

