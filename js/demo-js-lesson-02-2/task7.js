// todo Середнє значення
/*
 * Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. 
  Усі аргументи будуть лише числами.
 */

function calAverage(numbers) {
    let sum = 0;

    for (const number of arguments) {
        sum += number;
    }
    return sum / arguments.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
