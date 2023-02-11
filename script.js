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

// let num1 = prompt("Введите первое  число");
// let num2 = prompt("Введите второе число");
// alert((num1 <= 1) ? "Первое число меньше или равно единице" : "Первое число больше единицы");
// alert((num1 >= 3) ? "Второе число больше или равно трём" : "Второе число меньше трёх");

// // Задание 2

// let test = true;
// console.log((test === true) ? '+++' : '---');

// // Задание 3

// let day = prompt("Введите число от 1 до 31");
// alert((day >= 1 && day <= 31) ? day : "Неверное число");
// if (day <= 10) {
//     console.log("Первая декада месяца");
// } else if (day > 10 && day <= 20) {
//     console.log("Вторая декада месяца");
// } else {
//     console.log("Третья декада месяца");
// }

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function TwoIn(num1, num2) {
//     let res1 = num1 * num1 * num1;
//     let res2 = num2 * num2 * num2;
//     return res1 + res2;
// }
// console.log(TwoIn(2, 3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let num = prompt("Введите число");
// (num >= 0 || num <= 0) ? console.log(num): alert("значение задано неверно");

// function proc(num) {
//     let res = num / 100 * 13;
//     return res;
// }

// console.log(`Размер заработной платы за вычетом налогов равен: ${proc(num)}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let num1 = prompt();
// let num2 = prompt();
// let num3 = prompt();

// function MaxNum(num1, num2, num3) {
//     let res;
//     if (num1 >= num2 && num1 >= num3) {
//         res = num1;
//     } else if (num2 >= num3 && num2 >= num1) {
//         res = num2;
//     } else {
//         res = num3;
//     }
//     return res;
// }

// console.log(MaxNum(num1, num2, num3));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let fn = prompt("Выберите действие с числами: 1. Сложение 2. Разность 3. Умножение 4. Деление");

// function fun1(num1, num2) {
//     let res1 = num1 + num2;
//     return res1;
// }

// function fun2(num1, num2) {
//     let res2;
//     if (num1 == num2) {
//         res2 = 0;
//     } else {
//         (num1 > num2) ? res2 = num1 - num2: res2 = num2 - num1;
//     }
//     return res2;
// }

// function fun3(num1, num2) {
//     let res3 = num1 * num2;
//     return res3;
// }

// function fun4(num1, num2) {
//     let res4 = num1 / num2;
//     return res4;
// }

// if (fn == 1) {
//     console.log(fun1(num1, num2));
// }
// if (fn == 2) {
//     console.log(fun2(num1, num2));
// }
// if (fn == 3) {
//     console.log(fun3(num1, num2));
// }
// if (fn == 4) {
//     console.log(fun4(num1, num2));
// }

//HW4

// Задание 1
// Необходимо с помощью цикла
// for вывести следующие 11 строк в консоль:
// 0– это ноль
// 1– нечетное число
// 2– четное число
// 3– нечетное число…
// 10– четное число

// function check(i) {
//     return i % 2 === 0;
// }

// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (check(i)) {
//         console.log(`${i} - четное число`);
//     } else {
//         console.log(`${i} - нечетное число`);
//     }
// }

// Задание 2
// Дан массив[1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий[1, 2, 3, 6, 7]

// const myArray = [1, 2, 3, 4, 5, 6, 7];

// myArray.splice(3, 2);

// console.log(`[${myArray}]`);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const myArray = [];

// for (let index = 0; index < 5; index++) {
//     myArray[index] = Math.floor((Math.random() * 10));

// }


// let sum = 0
// let minValue = myArray[0]


// for (let index = 0; index < myArray.length; index++) {
//     sum = sum + myArray[index];
//     if (myArray[index] < minValue)  {
//         minValue = myArray[index];
//     }
// }

// for (let index = 0; index < myArray.length; index++) {
//     if (myArray[index] === 3) {
//         console.log(`В этом массиве есть 3 на позиции ${index+1}`);
//     }
// }
// console.log(myArray);
// console.log(`${sum} сумма `);
// console.log(`${minValue} наименьшее`);