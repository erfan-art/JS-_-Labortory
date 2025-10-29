const slides = document.querySelectorAll(".slides img");
const thumbs = document.querySelectorAll(".thumbnails img");
const counter = document.querySelector(".counter");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("active-thumb", i === index);
  });

  counter.textContent = `${index + 1} / ${slides.length}`;
  currentIndex = index;
}

// دکمه‌های بعد و قبل
document.querySelector(".next").addEventListener("click", () => {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

// کلیک روی عکس‌های کوچک
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    showSlide(i);
  });
});
