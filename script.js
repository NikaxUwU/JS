//HW1

// Задание 1

// let tempCel = 15;
// let tempFa = tempCel * (9 / 5) + 32;
// console.log(`Температура в Цельсиях: ${tempCel}
// Температура в Фаренгейтах: ${tempFa}`);

// Задание 2

// const myName = 'Анастасия';
// let admin = myName;
// console.log(`admin: ${admin}`);


//HW2

// Задание 1

let num1 = prompt("Введите первое  число");
let num2 = prompt("Введите второе число");
alert((num1 <= 1) ? "Первое число меньше или равно единице" : "Первое число больше единицы");
alert((num1 >= 3) ? "Второе число больше или равно трём" : "Второе число меньше трёх");

// Задание 2

let test = true;
console.log((test === true) ? '+++' : '---');

// Задание 3

let day = prompt("Введите число от 1 до 31");
alert((day >= 1 && day <= 31) ? day : "Неверное число");
if (day <= 10) {
    console.log("Первая декада месяца");
} else if (day > 10 && day <= 20) {
    console.log("Вторая декада месяца");
} else {
    console.log("Третья декада месяца");
}