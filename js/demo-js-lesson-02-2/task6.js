// todo Пошук найбільшого елемента
/*
 * Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
 */

function findLargestNumber(array) {
    let max = array[0];
    for (const number of array) {
        if (max < number) { max = number; }

    }
    console.log(max)
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
