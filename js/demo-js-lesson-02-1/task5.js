// todo Масиви та рядки
/*
 * Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього.
 Результуючий рядок не повинен починатися або закінчуватися пробілом.
  Скрипт повинен працювати для будь-якого рядка.
 */

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas cupiditate excepturi,';

const stringWithoutWhiteSpace = string.trim();
const array = stringWithoutWhiteSpace.split(' ');
console.log(array.slice(1, -1).join(' '))
