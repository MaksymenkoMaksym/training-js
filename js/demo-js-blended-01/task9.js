/*
 * Скрипт приймає 1 сторону сторони (side) і діагональ (diagonal) прямокутника.
 * Перевір це прямокутник (діагональ не може бути менше сторони прямокутника).
 * Поверни площу цього прямокутника або рядок not a rectangle, якщо це не прямокутник.
 * Округли значення до 2 знаків після коми.
 */

let side = 2;
let diagonal = 6;
let result;
diagonal > side ? result = side * Math.sqrt(side * side + diagonal * diagonal).toFixed(2) : result = 'not a rectangle'
console.log(result)