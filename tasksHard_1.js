"use strict";

const salary = +prompt("Укажите сумму Вашего заработка ");
let tax;
let percent;
const tax13 = 0.13;
const tax20 = 0.2;
const tax30 = 0.3;

if (Number.isFinite(salary)) {
  if (salary <= 15000) {
    tax = salary * 100 * tax13;
    percent = tax13;
  } else if (salary <= 50000) {
    tax = salary * 100 * tax20;
    percent = tax20;
  } else {
    tax = salary * 100 * tax30;
    percent = tax30;
  }
  console.log(
    `При величине Вашего заработка ${salary} рублей, сумма Вашего налога составит ${(tax / 100).toFixed(2)} 
    рублей, исходя из налоговой ставки ${percent * 100}%`
  );
} else {
    console.log("Вы неправильно предоставили данные")
}
