let num = prompt("enter a number:");

if (num.startsWith("!")) {
  num = num.slice(1);
}

num = Number(num);

let result = 1;
for (let i = num; i > 1; i--) {
  result *= i;
}

alert(`${num}! = ${result}`);
