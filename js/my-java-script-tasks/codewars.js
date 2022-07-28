
/*
Complete the method / function so that it converts dash / underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
    (known as Upper Camel Case, also often referred to as Pascal case).

    Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
toCamelCase("the_stealth_warrior");
toCamelCase("The-Stealth-Warrior");

function firstLetterBig(string) {
    let result = '';

    if (string[0] !== string[0].toUpperCase()) {
        result = (string[0].toUpperCase());

        for (let i = 0; i < string.length - 1; i += 1) {

            result += string[i + 1]
        }
        return result;
    }
    return string
}

function toCamelCase(str) {
    let arr = []; // ['the', 'stealth', 'warrior']

    str.includes('-') ? arr = str.split("-") : arr = str.split("_");

    let result = arr[0];
    for (let i = 1; i < arr.length; i += 1) {

        result += firstLetterBig(arr[i]);

    }
    console.log(result)
}


// Вам даны длина и ширина четырехугольника.Многоугольник может быть прямоугольным или квадратным.
// Если это квадрат, вернуть его площадь.Если это прямоугольник, верните его периметр.

//     Пример(Ввод1, Ввод2-- > Выход):

// 6, 10 -- > 32
// 3, 3 -- > 9
// Примечание: для целей этого ката вы будете считать, что это квадрат, если его длина и ширина равны, в противном случае это прямоугольник.

// prymo = a>b kvadr = a = b

const areaOrPerimeter = function (a, w) {

    if (a === w) {
        return a * w;
    }

    return ((a + w) * 2);

};

console.log(areaOrPerimeter(2, 3))// 32

// Создайте функцию с двумя аргументами, которая будет возвращать массив первых(n) кратных(x).

//     Предположим, что и заданное число, и количество подсчетов будут положительными числами больше 0.

function countBy(x, n) {
    let z = [];
    let g = 0;

    for (let i = 0; i < n; i += 1) {
        // g = g + x;
        // z.push(g)
    }

    while (z.length < n) {
        g = g + x;
        z.push(g)
    }


    return console.log(z);
}

countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5) === [2, 4, 6, 8, 10]