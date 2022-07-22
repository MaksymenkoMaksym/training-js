/*
 * Дано рядок, що складається із символів, наприклад, 'abcde'.
 * Перевірте, що першим символом цього рядка є буква 'a'. 
 * Якщо це так - виведіть 'так', інакше виведіть 'ні'.
 */
let string = 'abbc';
let value;

const withOutSpace = string.trim();
string.startsWith('a') ? value = 'так' : value = 'ні';
console.log(value)

// Створи функцію returnNegative, яка приймає число num та повертає його від'ємну версію.

// Примітки:

// якщо num вже від'ємне, поверни num, не змінюючи його;
// якщо num = 0 або num = NaN, поверни num.
// let num = 2;
// function returnNegative(num) {
//     let result;
//     if (num === 0 || NaN) {
//         result = num
//     }

//     if (num / num === 1) {
//         result = num
//     }
//     else { result = num * -1 }

//     console.log(result)
// }

// Приклади:

// returnNegative(1) //=== -1
// returnNegative(-5) // === -5
// returnNegative(0) //=== 0
// returnNegative(0.12) //=== -0.12
// returnNegative(NaN) //=== NaN


// Difference of volumes of cuboids

/* Є два масиви натуральних чисел.Кожен масив складається з трьох чисел - ширина,
   глибина та висота коробок A і B.На скільки об'єм більшої коробки більший за об'єм меншої ?
*/

// let boxes1 = [];
// let boxes2 = [];

// function giveBigger(boxes1, boxes2) {
//     let volume1 = (boxes1[0] * boxes1[1] * boxes1[2]);
//     let volume2 = (boxes2[0] * boxes2[1] * boxes2[2]);

//     let result = volume1 - volume2;
//     if (result > 0) { console.log(result) }
//     else { console.log(result * -1) }
// }
// giveBigger([2, 3, 5], [4, 5, 6])
//     Приклад :

//     Коробка A: \[2, 3, 5\] - об'єм 30
// Коробка B: \[4, 5, 6\] - об'єм 120
// Результат: 90.


// Fake binary

/* Дано рядок input, що складається з цифр.Поверніть новий рядок, 
   в якому цифри менші за 5 з input замінені на 0, а цифри 5 і більше - на 1.
*/
/*function fakeBin(string) {
    let newString = '';
    for (const one of string) {
        if (Number(one) >= 5) { newString = newString + '1' }
        else { newString = newString + '0' }
    }
    console.log(newString)
}

// Приклад:

fakeBin("4538") //=== "0101";
fakeBin("12345")// === "00001";
fakeBin("5678")// === "1111";
*/