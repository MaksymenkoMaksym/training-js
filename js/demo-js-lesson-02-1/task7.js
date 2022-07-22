// todo Пошук елемента
/*
 *  Напиши скрипт пошуку найменшого числа в масиві.
    Код має працювати для будь-якого масиву чисел. 
    Використовуйте цикл для вирішення задачі.
 */



const numbers = [2, 17, 94, 1, 23, 37, 0, -5]; // -5
let result = numbers[0];

for (let i = 1; i <= numbers.length - 1; i += 1) {
    if (numbers[i] < result) { result = numbers[i] }
}

console.log(result)