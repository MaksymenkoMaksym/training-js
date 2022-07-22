/*
 * Рубрика 'wtf!?' або "Що покаже консоль?"
 */

function a(value) {
  return true - value;
}

const b = a('4') + a('-4') + a('-4') + a(4);
console.log(b);

let array = [1, 2, 3, 5, 5, 8, 9, 2];
console.log(array.push());
