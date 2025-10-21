
function randomNumber(btn, min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  btn.textContent = num;

    btn.style.fontSize = "20px";
    btn.style.color = "white";
    btn.style.background = "teal";
    btn.style.border = "none";
    btn.style.padding = "10px 20px";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
}
  