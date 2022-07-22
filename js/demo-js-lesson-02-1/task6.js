// todo Масиви та рядки
/*
 * Напиши скрипт, який «розвертає» рядок (зворотний порядок літер) і виводить його в консоль.
 */

const string = 'Welcome to the future';
let reverse = '';
for (let i = string.length - 1; i >= 0; i -= 1) {
    reverse += string[i];
}
console.log(reverse)
