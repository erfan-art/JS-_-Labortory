window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`[data-key="${e.key}"]`);
  if (!key) return;

  key.classList.add("active");

  setTimeout(() => {
    key.classList.remove("active");
  }, 200);
});
