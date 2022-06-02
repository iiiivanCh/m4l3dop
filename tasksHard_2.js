"use strict";

const salary = +prompt("Укажите сумму Вашего заработка ");
let tax;

if (Number.isFinite(salary)) {
  if (salary <= 15000) {
    tax = salary * 0.13;
  } else if (salary <= 50000) {
    tax = (salary - 15000) * 0.20 + 15000 * 0.13;
  } else {
    tax =
      (salary - 50000) * 0.30 +
      (50000 - 15000) * 0.20 +
      15000 * 0.13;
  }
  console.log(
    `При величине Вашего заработка ${salary} рублей, сумма Вашего налога составит ${tax.toFixed(2)} рублей`
  );
} else {
  console.log("Вы неправильно предоставили данные");
}
