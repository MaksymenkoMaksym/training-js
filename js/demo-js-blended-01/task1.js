/*
 * Перевірити, чи є число цілим
 */

const num = 10;

if (num % 2 === 0) { console.log(true) }
else { console.log(false) };

const message = "Welcome to Bahamas!";
console.log(message);
console.log(message.indexOf("hello")); // -1

const age = 5;
console.log(age < 10 || age > 30);
// -----------------------------------------------------
let a = "+";
console.log(typeof +a);

function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+":
            return value1 + value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "*":
            return value1 * value2;
            break;
        case "/":
            return value1 / value2;
            break;
    }

    if (operation === "+") {
        return value1 + value2;
    }
    if (operation === "-") {
        return value1 - value2;
    }
    if (operation === "*") {
        return value1 * value2;
    }
    if (operation === "/") {
        return value1 / value2;
    }
}

console.log(basicOp('-', 15, 18))
// ------------------------------------------------------
// Сортування циклу від меншого до більшого

// let array = [1, 2, 5, 7, 6, 1, 2,];
// array.sort((a, b) => { return a - b });
// console.log(array)
// --------------------------------------------------


/*
ЦИКЛ ДЛЯ ВЗАЄМОДІЇ З КОРИСТУВАЧЕМ ''null'' ОТРИМАЄМО КОЛИ ТИСНЕМ ''CANCEL''
*/
// while (true) {
//     let value = prompt('zalupa', '');
//     if (value === null) {
//         break;
//     }
//     console.log(value)
// }
// ----------------------------------------------------------




// -------------------------------------------------------
// Об'єкти та метод циклу в об'єкту 

// let person = {
//     name: 'Jack',
//     job: 'seaman',
//     age: '29',
// }


// for (let value in person) {
//     console.log(value)
// }

// console.log(typeof (person))
// ----------------------------------------------