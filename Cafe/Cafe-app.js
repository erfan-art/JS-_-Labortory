
let prices = {
  latte: 100,
  americano: 80,
  macha: 120
};

let total = 0;
let totalCount = 0;
let loyaltyTypes = []; // همه قهوه‌هایی که بیش از 3 تا خریدن

let howManyTypes = Number(prompt("How many types of coffee?")); // مثلاً 2 نوع

for (let i = 0; i < howManyTypes; i++) {
  let type = prompt("Type of coffee? (latte / americano / macha)").toLowerCase();
  let count = Number(prompt(`How many ${type}?`));

  if (!prices[type] || count <= 0) {
    console.log("Unknown coffee type or invalid count!");
    continue;
  }

  let subtotal = count * prices[type];
  total += subtotal;
  totalCount += count;

  console.log(`${count} ${type} = ${subtotal} $`);

  // اگر از یه نوع قهوه بیش از 3 تا بخره => اضافه به وفاداری
  if (count > 3) {
    loyaltyTypes.push(type);
  }
}

console.log("Total before discount: " + total + " $");

// تخفیف براساس تعداد کل قهوه‌ها
if (totalCount > 3) {
  total *= 0.9;
  console.log("10% discount for large order!");
}

// تخفیف وفاداری برای هر نوع قهوه بیش از 3
if (loyaltyTypes.length > 0) {
  loyaltyTypes.forEach(type => {
    console.log(`وفادار به ${type} ☕ 20% discount!`);
  });
  total *= 0.8;
}

console.log("Final price: " + total + " $");


