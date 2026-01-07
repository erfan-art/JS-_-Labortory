document.addEventListener("DOMContentLoaded", () => {

  const title = document.getElementById("slide-title");
  const thumbs = document.querySelectorAll(".thumb");
  const slideImages = document.querySelectorAll(".swiper-slide img");

  const swiper = new Swiper(".list-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
  });


  if (slideImages.length > 0) {
    title.textContent = slideImages[0].dataset.title || "";
  }


  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      swiper.slideToLoop(index);
    });
  });

 
  swiper.on("slideChange", () => {
    const i = swiper.realIndex;


    title.textContent = slideImages[i].dataset.title || "";


    thumbs.forEach(t => t.classList.remove("active-thumb"));
    if (thumbs[i]) {
      thumbs[i].classList.add("active-thumb");
    }
  });

});



