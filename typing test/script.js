const text = document.getElementById("text").innerText;
const input = document.getElementById("input");
const result = document.getElementById("result");

let done = false;

input.addEventListener("input", () => {
  let correct = 0;

  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === text[i]) {
      correct++;
    }
  }

  const accuracy = Math.round((correct / text.length) * 100);
  result.innerText = `Accuracy: ${accuracy}%`;

  if (accuracy === 100 && input.value.length === text.length && !done) {
    done = true;
    alert("شما 100% جمله را درست نوشتید");
  }
});

