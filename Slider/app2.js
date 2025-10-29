const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(n) {

  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
  counter.textContent = `${n + 1} / ${slides.length}`;
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index > slides.length - 1) index = 0;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
});

setInterval(() => {
  index++;
  if (index > slides.length - 1) index = 0;
  showSlide(index);
}, 3000);