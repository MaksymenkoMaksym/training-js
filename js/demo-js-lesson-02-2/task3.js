// todo Площа прямокутника
/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника 
зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. 
Значення гарантовано розділені пробілом.
 */

console.log(getRectArea('8 11'));

function getRectArea(dimensions) {
    const a = dimensions.split(' ');
    const b = dimensions.split(' ');
    const result = Number(a[0]) * Number(b[1]);

    return result;
}